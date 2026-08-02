import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileDown, 
  X, 
  Check, 
  Copy, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Award, 
  ExternalLink,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    window.location.href = '/api/resume/download';
  };

  const handleCopyText = () => {
    const resumeText = `SOUMIK CHAKRABORTY
Computer Science & Business Systems Undergraduate
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.socials.github}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}

EDUCATION
Techno Main Salt Lake, Kolkata (B.Tech CSBS 2023-2027) | CGPA: 7.00
Bankura Christian Collegiate School (12th: 77.5%, 10th: 89.57%)

SKILLS
Languages: Python, Java, C, C++, JavaScript, TypeScript
Frontend: React, Next.js, Tailwind CSS, HTML, CSS
Backend: Node.js, Express.js, REST APIs, Firebase
Databases: MongoDB, MySQL
Core CS: Data Structures & Algorithms, DBMS, OS, Computer Networks
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-card max-w-3xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 relative shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Soumik Chakraborty - Resume</h3>
              <p className="text-xs text-slate-400">Computer Science & Business Systems Undergraduate</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Sheet Preview */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 text-xs text-slate-300 font-sans">
          
          {/* Header Banner */}
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white">SOUMIK CHAKRABORTY</h2>
              <p className="text-blue-400 font-semibold text-xs mt-0.5">Computer Science & Business Systems Undergraduate</p>
              <p className="text-[11px] text-slate-400 mt-1">{PERSONAL_INFO.location} | {PERSONAL_INFO.email} | {PERSONAL_INFO.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                CGPA: 7.00
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-2 pl-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white">Techno Main Salt Lake, Kolkata</p>
                  <p className="text-[11px] text-slate-300">B.Tech in Computer Science & Business Systems (CSBS)</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">2023 – 2027 | CGPA: 7.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white">Bankura Christian Collegiate School</p>
                  <p className="text-[11px] text-slate-300">Higher Secondary (12th WBCHSE) - 77.5% | Secondary (10th WBBSE) - 89.57%</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">2021 – 2023</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 text-[11px]">
              <p><strong className="text-white">Languages:</strong> Python, Java, C, C++, JavaScript, TypeScript, SQL</p>
              <p><strong className="text-white">Frontend:</strong> React, Next.js, Tailwind CSS, HTML5, CSS3</p>
              <p><strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs, Socket.IO, Firebase</p>
              <p><strong className="text-white">Databases:</strong> MongoDB, MySQL</p>
              <p><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Wireshark, Postman</p>
              <p><strong className="text-white">Core CS:</strong> DSA, DBMS, Operating Systems, Networks, Software Engineering</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <BookOpen className="w-4 h-4" />
              <span>Key Projects</span>
            </h3>
            <div className="space-y-2 pl-2 text-[11px]">
              <div>
                <p className="font-bold text-white">1. Online Scholarship Management System (React, Node, Express, MongoDB, Firebase)</p>
                <p className="text-slate-300">Full-stack scholarship portal with student/admin authentication, document upload, and REST APIs.</p>
              </div>
              <div>
                <p className="font-bold text-white">2. DevConnect (React, TypeScript, Node, Express, MongoDB, Socket.IO)</p>
                <p className="text-slate-300">Real-time developer collaboration platform with JWT auth, messaging, and project Kanban boards.</p>
              </div>
              <div>
                <p className="font-bold text-white">3. CGPA Calculator & Planner (HTML, CSS, JavaScript)</p>
                <p className="text-slate-300">Academic insight tool to calculate cumulative CGPA, predict target SGPA, and validate inputs.</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Award className="w-4 h-4" />
              <span>Achievements & Certifications</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2 text-[11px] text-slate-300">
              <li>2nd Place Runner-Up in Innovation Coding Competition</li>
              <li>4★ Problem Solving Badge on HackerRank & 4★ SQL Badge</li>
              <li>200+ Coding Problems Solved across HackerRank & LeetCode</li>
              <li>NPTEL Certified in DBMS (Elite) | HackerRank & Udemy Certified</li>
            </ul>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={handleCopyText}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Text Resume'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
