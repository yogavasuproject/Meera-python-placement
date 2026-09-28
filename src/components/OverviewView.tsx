import React from 'react';
import { courseOverviewData } from '../data/courseOverview';
import { BookOpen, CheckCircle, Target, Users, Clock, Award, Download, Presentation, Code2, HelpCircle } from 'lucide-react';
import { exportPresentationToPPTX } from '../utils/pptxExport';

interface OverviewViewProps {
  onNavigate: (tab: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate }) => {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    await exportPresentationToPPTX();
    setDownloading(false);
  };

  return (
    <div className="space-y-8">
      {/* Hero Welcome */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-900/50 p-8 sm:p-10 text-white shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Official Training Package • Campus Recruitment 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
            Python Placement Training Masterclass
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive, placement-oriented Python training package designed for engineering students preparing for campus and off-campus technical interviews. Focused on clearing first-round screening tests, output prediction, and standard coding assessments.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('slides')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Presentation className="w-4 h-4" />
              <span>Launch Classroom Slides (72)</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>{downloading ? 'Generating...' : 'Download PPTX Presentation'}</span>
            </button>

            <button
              onClick={() => onNavigate('mock-test')}
              className="flex items-center gap-2 bg-purple-600/30 hover:bg-purple-600/40 text-purple-200 border border-purple-500/40 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer"
            >
              <Clock className="w-4 h-4" />
              <span>60-Min Mock Screening</span>
            </button>
          </div>
        </div>

        {/* Background glow circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Teaching Pattern Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent border border-blue-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
            Classroom Teaching Methodology:
          </span>
          <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
            {courseOverviewData.teachingMethodology}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
          <Clock className="w-4 h-4 text-blue-500" />
          <span>Recommended Duration: {courseOverviewData.duration}</span>
        </div>
      </div>

      {/* Target Audience & Learning Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Target Audience */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
            <Users className="w-5 h-5" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Target Audience
            </h3>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            {courseOverviewData.targetAudience.map((aud, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{aud}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
            <strong className="text-slate-900 dark:text-white block mb-1">Prerequisites:</strong>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Basic logical thinking and school mathematics. Assumes no prior Python knowledge; starts from absolute basics.
            </p>
          </div>
        </div>

        {/* Course Objectives */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
            <Target className="w-5 h-5" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Core Learning Objectives
            </h3>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {courseOverviewData.courseObjectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Placement Relevance Breakdown */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span>Placement Relevance & Technical Weightage</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseOverviewData.placementRelevance.map((rel, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {rel.focusArea}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  {rel.interviewWeight}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {rel.whyItMatters}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Launch Suite Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <button
          onClick={() => onNavigate('mcqs')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500 transition-all cursor-pointer shadow-sm group"
        >
          <span className="text-xs font-bold text-indigo-500 block mb-1">Interactive Quiz</span>
          <h4 className="font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
            100 MCQs
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Practice test with scoring</p>
        </button>

        <button
          onClick={() => onNavigate('interview-qa')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500 transition-all cursor-pointer shadow-sm group"
        >
          <span className="text-xs font-bold text-emerald-500 block mb-1">Interview Prep</span>
          <h4 className="font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
            50 Interview Q&A
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Categories A through K</p>
        </button>

        <button
          onClick={() => onNavigate('coding-problems')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500 transition-all cursor-pointer shadow-sm group"
        >
          <span className="text-xs font-bold text-amber-500 block mb-1">Coding Rounds</span>
          <h4 className="font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
            50 Coding Problems
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Level 1, 2, 3 with solutions</p>
        </button>

        <button
          onClick={() => onNavigate('debugging')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500 transition-all cursor-pointer shadow-sm group"
        >
          <span className="text-xs font-bold text-rose-500 block mb-1">Code Fixes</span>
          <h4 className="font-extrabold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">
            20 Debugging Tasks
          </h4>
          <p className="text-[11px] text-slate-400 mt-1">Common placement errors</p>
        </button>
      </div>
    </div>
  );
};
