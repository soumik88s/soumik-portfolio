import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  Terminal, 
  Cpu, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Passionate CSBS undergraduate combining software engineering, business domain knowledge, and algorithmic thinking.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left - Profile Avatar Card & Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Developer Avatar Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-700/60 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/30 via-indigo-600/20 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    SC
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Soumik Chakraborty</h3>
                  <p className="text-xs font-medium text-blue-400 mt-0.5">
                    CSBS Student @ Techno Main Salt Lake
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <span>Bankura / Kolkata, WB, India</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Degree:</span>
                  <span className="font-semibold text-white">B.Tech (CSBS) 2023-2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Current CGPA:</span>
                  <span className="font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">7.00 / 10.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Focus Areas:</span>
                  <span className="font-semibold text-cyan-400">Full-Stack & AI Solutions</span>
                </div>
              </div>
            </div>

            {/* Quick Experience / Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Coding Card */}
              <div className="glass-card rounded-2xl p-4 border border-slate-700/60 hover:border-blue-500/50 transition-colors">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-3">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white">200+</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Coding Card</div>
                <div className="text-[11px] text-slate-400">HackerRank & LeetCode</div>
              </div>

              {/* Projects Card */}
              <div className="glass-card rounded-2xl p-4 border border-slate-700/60 hover:border-purple-500/50 transition-colors">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-3">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white">10+</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Projects Card</div>
                <div className="text-[11px] text-slate-400">Full-Stack & Utilities</div>
              </div>

              {/* CGPA Card */}
              <div className="glass-card rounded-2xl p-4 border border-slate-700/60 hover:border-amber-500/50 transition-colors">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white">7.00</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">CGPA Card</div>
                <div className="text-[11px] text-slate-400">Techno Main Salt Lake</div>
              </div>

              {/* Experience / Certs Card */}
              <div className="glass-card rounded-2xl p-4 border border-slate-700/60 hover:border-emerald-500/50 transition-colors">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-2xl font-extrabold text-white">7+</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Certificates</div>
                <div className="text-[11px] text-slate-400">NPTEL, HackerRank, Udemy</div>
              </div>

            </div>
          </motion.div>

          {/* Right - Narrative & Core Fundamentals List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Driven by Code, Powered by Innovation</span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Computer Science & Business Systems undergraduate with hands-on experience in full-stack web development, database management, and AI-powered applications.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Proficient in <span className="text-cyan-400 font-semibold">Python</span>, <span className="text-blue-400 font-semibold">Java</span>, <span className="text-indigo-400 font-semibold">JavaScript</span>, <span className="text-purple-400 font-semibold">React</span>, <span className="text-emerald-400 font-semibold">Node.js</span>, <span className="text-green-400 font-semibold">MongoDB</span>, <span className="text-teal-400 font-semibold">MySQL</span>, <span className="text-blue-300 font-semibold">TypeScript</span>, <span className="text-amber-400 font-semibold">Firebase</span>, and REST API development.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Passionate about solving real-world problems and building scalable software products from idea to deployment.
                </p>
              </div>

              {/* Core CS Fundamentals Box */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Strong CS Foundations</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {PERSONAL_INFO.coreFundamentals.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-200 hover:border-blue-500/40 transition-colors"
                    >
                      <Cpu className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span className="truncate">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
