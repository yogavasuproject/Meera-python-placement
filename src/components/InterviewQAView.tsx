import React, { useState } from 'react';
import { interviewQuestionsData, InterviewQuestion } from '../data/interviewQuestions';
import { Search, HelpCircle, ChevronDown, ChevronUp, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const InterviewQAView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({ 1: true, 2: true });

  const categories = [
    { code: 'ALL', label: 'All Categories (50 Qs)' },
    { code: 'A', label: 'A. Basic Python' },
    { code: 'B', label: 'B. Variables & Types' },
    { code: 'C', label: 'C. Operators' },
    { code: 'D', label: 'D. Conditions & Loops' },
    { code: 'E', label: 'E. Strings' },
    { code: 'F', label: 'F. Lists, Sets & Dicts' },
    { code: 'G', label: 'G. Functions' },
    { code: 'H', label: 'H. Exception Handling' },
    { code: 'I', label: 'I. OOP Basics' },
    { code: 'J', label: 'J. File Handling' },
    { code: 'K', label: 'K. Coding Concepts' }
  ];

  const filteredQuestions = interviewQuestionsData.filter((q) => {
    const matchesCat = selectedCategory === 'ALL' || q.categoryCode === selectedCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.expectedAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    filteredQuestions.forEach((q) => (all[q.id] = true));
    setExpandedIds(all);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Campus Recruitment Technical Screening</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Top 50 Python Technical Interview Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Curated from first-round technical interviews at TCS Digital, Infosys SP/DSE, Cognizant GenC Next, Wipro Elite, and high-growth product companies. Focuses on testing conceptual depth over rote memorization.
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

        {/* Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by keyword (e.g., GIL, mutable default, slicing, is vs ==, self)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.code} value={cat.code}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{filteredQuestions.length}</strong> of 50 technical interview questions
        </span>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map((q: InterviewQuestion) => {
          const isExpanded = !!expandedIds[q.id];
          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:border-blue-400 dark:hover:border-blue-700 transition-colors"
            >
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full p-4 flex items-start justify-between text-left gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    Q{q.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        Cat {q.categoryCode}: {q.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {q.question}
                    </h3>
                  </div>
                </div>
                <div className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  {/* Expected Answer */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Expected Interview Answer:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium bg-emerald-50/40 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200/60 dark:border-emerald-900/40">
                      {q.expectedAnswer}
                    </p>
                  </div>

                  {/* Technical Explanation */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Technical Concept Deep-Dive:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-300 dark:border-slate-700">
                      {q.shortExplanation}
                    </p>
                  </div>

                  {/* Interviewer Tip */}
                  <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/40 flex items-start gap-2">
                    <span className="text-xs font-black text-blue-700 dark:text-blue-400 uppercase flex-shrink-0">
                      [INTERVIEW TIP]:
                    </span>
                    <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 leading-snug">
                      {q.interviewTip}
                    </p>
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
