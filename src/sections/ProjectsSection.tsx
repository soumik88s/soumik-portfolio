import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  X, 
  Cpu, 
  Code2,
  Terminal,
  Calculator
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenCgpaModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCgpaModal }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full Stack', 'Utilities'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const handleDemoClick = (project: ProjectItem) => {
  if (project.id === "cgpa-calculator") {
    onOpenCgpaModal();
  } else {
    window.open(project.liveDemoUrl, "_blank");
  }
};

  return (
    <section id="projects" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Full-stack web applications, collaborative platforms, and specialized tools built with clean architecture and modern user experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-slate-700/60 shadow-xl overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all group"
            >
              <div>
                {/* Project Banner Graphic */}
                <div className={`relative h-48 w-full bg-gradient-to-tr ${project.imageBg} p-6 flex flex-col justify-between border-b border-slate-800 overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 text-cyan-400 text-[11px] font-mono font-semibold border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
                  </div>

                  {/* Visual Graphic Representation */}
                  <div className="z-10 space-y-1">
                    <h3 className="text-xl font-extrabold text-white drop-shadow-md group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-200/90 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Background overlay pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                </div>

                {/* Project Description & Tech Stack */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => handleDemoClick(project)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                  {project.id === 'cgpa-calculator' ? <Calculator className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  <span>{project.id === 'cgpa-calculator' ? 'Launch Calculator' : 'Live Demo'}</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Interactive Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selectedProject.category} Project Showcase</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-xs text-slate-400">{selectedProject.subtitle}</p>
              </div>

              {/* Simulated Interactive Preview Box */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Project Architecture Preview</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                    Deployed & Production Ready
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs text-slate-400 font-semibold block mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-300 text-xs border border-blue-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Features & Specifications:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map(f => (
                    <div key={f} className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-2 hover:bg-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
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
