import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  X, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  TrendingUp,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CourseSubject {
  id: string;
  name: string;
  gradePoints: number;
  credits: number;
}

interface CgpaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CgpaCalculatorModal: React.FC<CgpaCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [subjects, setSubjects] = useState<CourseSubject[]>([
    { id: '1', name: 'Data Structures & Algorithms', gradePoints: 8, credits: 4 },
    { id: '2', name: 'DBMS', gradePoints: 8, credits: 4 },
    { id: '3', name: 'Operating Systems', gradePoints: 7, credits: 3 },
    { id: '4', name: 'Object Oriented Programming', gradePoints: 8, credits: 3 },
    { id: '5', name: 'Computer Networks', gradePoints: 7, credits: 3 },
  ]);

  const [targetCgpa, setTargetCgpa] = useState<number>(8.0);
  const [completedSemesters, setCompletedSemesters] = useState<number>(3);
  const [totalSemesters] = useState<number>(8);

  if (!isOpen) return null;

  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
  const totalWeightedPoints = subjects.reduce((sum, s) => sum + s.gradePoints * s.credits, 0);
  const currentSgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '0.00';

  // Target SGPA calculation formula
  const currentCgpaVal = parseFloat(currentSgpa);
  const remainingSems = totalSemesters - completedSemesters;
  const requiredSgpa = remainingSems > 0 
    ? ((targetCgpa * totalSemesters - currentCgpaVal * completedSemesters) / remainingSems).toFixed(2)
    : 'N/A';

  const addSubject = () => {
    setSubjects(prev => [
      ...prev,
      { id: Date.now().toString(), name: `Subject ${prev.length + 1}`, gradePoints: 8, credits: 3 }
    ]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(prev => prev.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof CourseSubject, value: any) => {
    setSubjects(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, [field]: value };
      }
      return s;
    }));
  };

  const triggerCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 relative shadow-2xl space-y-6 my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">CGPA Calculator & Target Planner</h3>
              <p className="text-xs text-slate-400">Compute SGPA, predict target CGPA, and track academic progress</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Metrics Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-blue-600/15 border border-blue-500/30 text-center">
            <span className="text-xs text-blue-300 font-semibold block">Calculated SGPA</span>
            <span className="text-3xl font-extrabold text-blue-400 mt-1 block">{currentSgpa}</span>
            <span className="text-[10px] text-slate-400">Based on {totalCredits} Credits</span>
          </div>

          <div className="p-4 rounded-xl bg-purple-600/15 border border-purple-500/30 text-center">
            <span className="text-xs text-purple-300 font-semibold block">Target CGPA</span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <input
                type="number"
                step="0.1"
                min="5"
                max="10"
                value={targetCgpa}
                onChange={(e) => setTargetCgpa(parseFloat(e.target.value) || 8.0)}
                className="w-20 text-center text-2xl font-extrabold text-purple-400 bg-slate-900/80 border border-slate-700 rounded-lg focus:outline-none"
              />
            </div>
            <span className="text-[10px] text-slate-400">Target for Graduation</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-center">
            <span className="text-xs text-emerald-300 font-semibold block">Required Future SGPA</span>
            <span className="text-3xl font-extrabold text-emerald-400 mt-1 block">{requiredSgpa}</span>
            <span className="text-[10px] text-slate-400">For remaining {remainingSems} semesters</span>
          </div>
        </div>

        {/* Subjects Input List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Semester Subjects & Credit Weights</span>
            </h4>

            <button
              onClick={addSubject}
              className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30 flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Subject</span>
            </button>
          </div>

          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {subjects.map((sub, idx) => (
              <div
                key={sub.id}
                className="grid grid-cols-12 gap-2 items-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs"
              >
                <div className="col-span-5">
                  <input
                    type="text"
                    value={sub.name}
                    onChange={(e) => updateSubject(sub.id, 'name', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-cyan-500"
                    placeholder="Subject Name"
                  />
                </div>

                <div className="col-span-3 flex items-center gap-1">
                  <span className="text-[11px] text-slate-400">Grade:</span>
                  <select
                    value={sub.gradePoints}
                    onChange={(e) => updateSubject(sub.id, 'gradePoints', parseInt(e.target.value))}
                    className="w-full px-2 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 font-bold focus:outline-none"
                  >
                    <option value={10}>O (10)</option>
                    <option value={9}>E (9)</option>
                    <option value={8}>A (8)</option>
                    <option value={7}>B (7)</option>
                    <option value={6}>C (6)</option>
                    <option value={5}>D (5)</option>
                  </select>
                </div>

                <div className="col-span-3 flex items-center gap-1">
                  <span className="text-[11px] text-slate-400">Credits:</span>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={sub.credits}
                    onChange={(e) => updateSubject(sub.id, 'credits', parseInt(e.target.value) || 1)}
                    className="w-full px-2 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-center font-bold focus:outline-none"
                  />
                </div>

                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() => removeSubject(sub.id)}
                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                    title="Remove Subject"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={triggerCelebrate}
            className="px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Celebrate Goal</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
          >
            Done
          </button>
        </div>

      </motion.div>
    </div>
  );
};
