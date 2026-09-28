import React, { useState } from 'react';
import { trainerNotesData, TrainerSectionNote } from '../data/trainerNotes';
import { BookOpen, HelpCircle, Activity, Lightbulb, Code2, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

export const TrainerNotesView: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({ 1: true });

  const toggleSection = (id: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    trainerNotesData.forEach((s) => (all[s.sectionId] = true));
    setExpandedSections(all);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Trainer Classroom Companion</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Section-by-Section Trainer Teaching Notes
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Practical classroom scripts, intuitive real-world analogies, common student pitfalls, quick 1-minute whiteboard activities, and live coding exercises for engineering placement instructors.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Sections Accordion */}
      <div className="space-y-4">
        {trainerNotesData.map((note: TrainerSectionNote) => {
          const isExpanded = !!expandedSections[note.sectionId];
          return (
            <div
              key={note.sectionId}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleSection(note.sectionId)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                    {note.sectionId}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {note.sectionTitle}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {note.whatToExplain.length} Key Concepts • 1 Analogy • Classroom Activity
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-6">
                  {/* Grid for What to Explain & Analogy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* What to Explain */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        <BookOpen className="w-4 h-4" />
                        <span>What To Explain In Class</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {note.whatToExplain.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Real-World Analogy */}
                    <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        <Lightbulb className="w-4 h-4" />
                        <span>Intuitive Real-World Analogy</span>
                      </div>
                      <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {note.realWorldAnalogy}
                      </p>
                      <div className="pt-2 border-t border-amber-200 dark:border-amber-900/40">
                        <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 block mb-0.5">
                          How To Explain Simply:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                          "{note.howToExplainSimply}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Questions to Ask & Classroom Activity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Questions to Ask */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        <HelpCircle className="w-4 h-4" />
                        <span>Interactive Classroom Check Questions</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {note.questionsToAskStudents.map((q, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-500 font-bold">Q{idx + 1}.</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Activity */}
                    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        <Activity className="w-4 h-4" />
                        <span>1-Minute Classroom Activity</span>
                      </div>
                      <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                        {note.quickClassroomActivity}
                      </p>
                    </div>
                  </div>

                  {/* Common Student Doubts */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Frequent Student Doubts & Clarifications</span>
                    </div>
                    <div className="space-y-3">
                      {note.commonStudentDoubts.map((doubt, idx) => (
                        <div key={idx} className="text-xs space-y-1">
                          <p className="font-semibold text-slate-900 dark:text-slate-200">
                            ❓ {doubt.question}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-rose-400">
                            💡 {doubt.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interview Question & Coding Exercise */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
                        Typical Placement Interview Question
                      </span>
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">
                        "{note.typicalInterviewQuestion.question}"
                      </p>
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        <strong className="text-blue-600 dark:text-blue-400">Expected Answer: </strong>
                        {note.typicalInterviewQuestion.expectedAnswer}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                        <Code2 className="w-4 h-4" />
                        <span>Classroom Live Coding Exercise</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">
                        {note.typicalCodingExercise.problem}
                      </p>
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        <strong className="text-indigo-600 dark:text-indigo-400">Hint: </strong>
                        {note.typicalCodingExercise.hint}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
