import React from 'react';
import { topicMatrixData, TopicMatrixItem } from '../data/courseOverview';
import { Layers, Sparkles } from 'lucide-react';

export const TopicMatrixView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700/10 via-indigo-700/5 to-transparent border border-blue-500/20 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Curriculum Blueprint</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
          Python Placement – Final Topic Coverage Matrix
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Comprehensive curriculum alignment mapping every Python module to campus recruitment testing priorities: what freshers must know, common mistakes, and sample interview questions.
        </p>
      </div>

      {/* Topic Matrix Cards */}
      <div className="space-y-4">
        {topicMatrixData.map((item: TopicMatrixItem) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {item.module}
              </h3>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                Module #{item.id}
              </span>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">Topics Covered: </strong>
              {item.topicsCovered}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[10px] block">
                  What a Fresher MUST Know:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {item.mustKnowForFreshers}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs space-y-1">
                <span className="font-bold text-blue-700 dark:text-blue-400 uppercase text-[10px] block">
                  What Interviewers Test:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {item.whatInterviewersTest}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs space-y-1">
                <span className="font-bold text-amber-700 dark:text-amber-400 uppercase text-[10px] block">
                  Common Student Pitfalls:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {item.commonStudentMistakes}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] block">
                  💬 Typical Interview Question:
                </span>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "{item.typicalInterviewQuestion}"
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] block">
                  💻 Typical Coding Problem:
                </span>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "{item.typicalCodingProblem}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
