import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Github, 
  Linkedin, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  Sparkles,
  Trophy
} from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Github,
  Linkedin,
  Terminal,
  Code
};

export const CodingProfilesSection: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Connect with me across GitHub, LinkedIn, HackerRank, and LeetCode to view my code repositories and competitive programming track record.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CODING_PROFILES.map((profile, index) => {
            const Icon = iconMap[profile.iconName] || Code;

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-800 text-white border border-slate-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {profile.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{profile.platform}</h3>
                    <p className="text-xs font-mono text-cyan-400">{profile.handle}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 block">{profile.statTitle}</span>
                    <span className="text-xs font-bold text-white block">{profile.statValue}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Visit {profile.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
