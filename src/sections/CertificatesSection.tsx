import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  X, 
  Eye, 
  Check,
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Database', 'Algorithms', 'Frontend', 'DSA', 'Web Development'];

  const filteredCerts = CERTIFICATES.filter(cert => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certificates" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient">Licenses</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Certifications completed through rigorous academic evaluations and platforms including NPTEL, HackerRank, and Udemy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl border border-slate-700/60 shadow-xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div>
                {/* Certificate Banner */}
                <div className={`h-36 w-full bg-gradient-to-r ${cert.previewGradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-mono font-semibold backdrop-blur-md">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  </div>

                  <div className="z-10">
                    <h3 className="text-base font-bold text-white drop-shadow">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Issued: {cert.issueDate}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold text-[10px] border border-blue-500/20">
                      {cert.badgeText}
                    </span>
                  </div>

                  <div className="space-y-1 pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 block">Skills Covered:</span>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsCovered.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                          {skill}
                        </span>
                      ))}
                      {cert.skillsCovered.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                          +{cert.skillsCovered.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center justify-center gap-2 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Preview Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-xl w-full rounded-2xl p-6 border border-slate-700 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Modal Banner */}
              <div className={`p-6 rounded-xl bg-gradient-to-r ${selectedCert.previewGradient} text-white space-y-3 relative overflow-hidden`}>
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded bg-black/40 text-xs font-mono font-semibold">
                    {selectedCert.issuer}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30">
                    {selectedCert.badgeText}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold">{selectedCert.title}</h3>
                <p className="text-xs text-slate-200">Certified Year: {selectedCert.issueDate}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Competencies Verified:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCert.skillsCovered.map((s) => (
                    <div key={s} className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
                >
                  Close Preview
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
