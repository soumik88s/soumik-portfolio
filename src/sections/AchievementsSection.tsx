import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Star, 
  Database, 
  BrainCircuit, 
  Award, 
  CheckCircle2, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Trophy,
  Star,
  Database,
  BrainCircuit,
  Award
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Competitive programming accolades, hackathon victories, star badges, and problem-solving benchmarks.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = iconMap[item.iconName] || Trophy;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all group relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${item.badgeColor}`}>
                      {item.metric}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {item.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Achievement
                  </span>
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Consistent Algorithmic Problem Solver</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Completed DBMS, JavaScript, HTML, CSS & Responsive Web Design certifications on NPTEL & HackerRank.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.hackerrank.com/profile/soumikchakraborty88s"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all whitespace-nowrap"
            >
              Verify HackerRank Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
