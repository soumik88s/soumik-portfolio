import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  School, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Calculator, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

interface EducationSectionProps {
  onOpenCgpaModal: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenCgpaModal }) => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Formal education, Computer Science & Business Systems degree, academic metrics, and coursework.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 hidden sm:block" />

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative sm:pl-16 group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute left-0 top-1 w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white border-4 border-slate-950 shadow-lg flex items-center justify-center hidden sm:flex group-hover:scale-110 transition-transform">
                {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl space-y-4 hover:border-blue-500/40 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.years}</span>
                    </span>
                    <h3 className="text-xl font-extrabold text-white">{edu.institution}</h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-slate-400">{edu.field}</p>
                  </div>

                  <div className="sm:text-right mt-2 sm:mt-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-sm">
                      <Award className="w-4 h-4" />
                      <span>{edu.gradeType}: {edu.grade}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 sm:justify-end mt-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </p>
                  </div>
                </div>

                {/* Coursework & Focus Areas */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span>Relevant Subjects & Coursework:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CGPA Planner CTA Widget Box */}
        <div className="mt-12 max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-cyan-900/20">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Calculator className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Academic CGPA Calculator & Planner</span>
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Compute semester SGPA, predict required SGPA for your target graduation CGPA, and track academic goals.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCgpaModal}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-600/25 flex items-center gap-2 transition-all whitespace-nowrap transform hover:-translate-y-0.5"
          >
            <Calculator className="w-4 h-4" />
            <span>Launch CGPA Calculator</span>
          </button>
        </div>

      </div>
    </section>
  );
};
