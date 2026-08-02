import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  BookOpen, 
  Users, 
  Search, 
  Terminal, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  FileCode,
  FileCode2,
  Coffee,
  Atom,
  Palette,
  FileText,
  Globe,
  Network,
  Flame,
  Leaf,
  GitBranch,
  Github,
  Laptop,
  Radio,
  Binary,
  Table,
  Box,
  HardDrive,
  Share2,
  Brain,
  MessageSquare,
  Clock,
  BarChart3,
  FileSpreadsheet
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Icon Map helper
const iconComponentMap: Record<string, React.FC<{ className?: string }>> = {
  Code2, Layout, Server, Database, Wrench, BookOpen, Users,
  Terminal, Cpu, Layers, FileCode, FileCode2, Coffee, Atom,
  Palette, FileText, Sparkles, Globe, Network, Flame, Leaf,
  GitBranch, Github, Laptop, Radio, Binary, Table, Box,
  HardDrive, Share2, Brain, MessageSquare, Clock, BarChart3, FileSpreadsheet
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    if (activeCategory !== 'All' && cat.title !== activeCategory) {
      return null;
    }

    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive overview of my programming languages, frameworks, developer tools, and computer science core competencies.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 border border-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Python)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/70 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            const CategoryIcon = iconComponentMap[cat.iconName] || Code2;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${cat.color} text-white shadow-md`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{cat.title}</h3>
                      <span className="text-[11px] text-slate-400">{cat.skills.length} skills listed</span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => {
                      const SkillIcon = iconComponentMap[skill.iconName] || Sparkles;

                      return (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2 text-slate-200 font-medium">
                              <SkillIcon className="w-3.5 h-3.5 text-blue-400" />
                              <span>{skill.name}</span>
                            </div>
                            <span className="font-mono text-xs text-blue-400 font-semibold">{skill.level}%</span>
                          </div>

                          {/* Animated Skill Progress Bar */}
                          <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-700/30">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Production Grade
                  </span>
                  <span>Interactive Skill Card</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
