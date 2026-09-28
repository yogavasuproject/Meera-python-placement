import React, { useState } from 'react';
import { codingProblemsData, CodingProblem } from '../data/codingProblemsData';
import { Code2, Search, Check, Copy, Eye, EyeOff, Layers, Sparkles, AlertCircle } from 'lucide-react';

export const CodingProblemsView: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'student' | 'trainer'>('student');
  const [selectedLevel, setSelectedLevel] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredProblems = codingProblemsData.filter((p) => {
    const matchesLevel = selectedLevel === 'ALL' || p.level === selectedLevel;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const handleCopyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getLevelBadge = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 2:
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 3:
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700/10 via-indigo-700/5 to-transparent border border-blue-500/20 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Campus Coding Round Assessment Problems</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              50 Python Placement Coding Practice Problems
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Divided into <strong>Level 1 (15 Very Basic)</strong>, <strong>Level 2 (20 Basic)</strong>, and <strong>Level 3 (15 Basic/Intermediate)</strong>. Includes problem statement, constraints, expected approach, time/space complexity, and common placement mistakes.
            </p>
          </div>

          {/* Student vs Trainer Toggle */}
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm">
            <button
              onClick={() => setActiveMode('student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'student'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Section A: Student Version (No Solutions)</span>
            </button>

            <button
              onClick={() => setActiveMode('trainer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'trainer'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Section B: Trainer Solutions & Key</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search coding problems (e.g. palindrome, two sum, prime, armstrong, Kadane, anagram)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-1">
            {[
              { label: 'All (50)', val: 'ALL' },
              { label: 'Level 1: Basic (15)', val: 1 },
              { label: 'Level 2: Core (20)', val: 2 },
              { label: 'Level 3: Interm (15)', val: 3 }
            ].map((btn) => (
              <button
                key={String(btn.val)}
                onClick={() => setSelectedLevel(btn.val as any)}
                className={`text-xs px-2.5 py-1.5 rounded-md font-medium cursor-pointer transition-colors whitespace-nowrap ${
                  selectedLevel === btn.val
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{filteredProblems.length}</strong> of 50 problems in{' '}
          <strong className="text-blue-600 dark:text-blue-400 uppercase">
            {activeMode === 'student' ? 'Student Practice Mode' : 'Trainer Full Solution Key Mode'}
          </strong>
        </span>
      </div>

      {/* Problems List */}
      <div className="space-y-6">
        {filteredProblems.map((prob: CodingProblem) => (
          <div
            key={prob.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
          >
            {/* Problem Card Header */}
            <div className="bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  #{prob.id}
                </span>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {prob.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Category: {prob.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${getLevelBadge(
                    prob.level
                  )}`}
                >
                  {prob.difficultyLabel}
                </span>
              </div>
            </div>

            {/* Problem Details */}
            <div className="p-6 space-y-4">
              {/* Problem Statement */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">
                  Problem Statement:
                </span>
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {prob.problemStatement}
                </p>
              </div>

              {/* Input & Output Format Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    Input Format:
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">{prob.inputFormat}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    Output Format:
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">{prob.outputFormat}</p>
                </div>
              </div>

              {/* Constraints */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wide">
                  Constraints:
                </span>
                <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  {prob.constraints}
                </code>
              </div>

              {/* Examples Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">
                    Example Input:
                  </span>
                  <pre className="font-mono text-emerald-400 overflow-x-auto">
                    <code>{prob.exampleInput}</code>
                  </pre>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block">
                    Example Output:
                  </span>
                  <pre className="font-mono text-emerald-300 overflow-x-auto">
                    <code>{prob.exampleOutput}</code>
                  </pre>
                </div>
              </div>

              {/* TRAINER VIEW SECTION: REVEALED IN TRAINER MODE */}
              {activeMode === 'trainer' && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 bg-amber-500/5 -mx-6 -mb-6 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      SECTION B: Trainer Solution & Complexity Analysis
                    </span>
                    <button
                      onClick={() => handleCopyCode(prob.id, prob.pythonSolution)}
                      className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    >
                      {copiedId === prob.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === prob.id ? 'Copied' : 'Copy Python Solution'}</span>
                    </button>
                  </div>

                  {/* Expected Approach */}
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Expected Placement Approach:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">{prob.expectedApproach}</p>
                  </div>

                  {/* Python Solution Code Box */}
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 p-4 shadow-inner">
                    <pre className="text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                      <code>{prob.pythonSolution}</code>
                    </pre>
                  </div>

                  {/* Complexity & Explanation */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-400 uppercase text-[10px] block">
                        Time Complexity:
                      </span>
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm">
                        {prob.timeComplexity}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-400 uppercase text-[10px] block">
                        Space Complexity:
                      </span>
                      <span className="font-mono font-bold text-purple-600 dark:text-purple-400 text-sm">
                        {prob.spaceComplexity}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs space-y-1 sm:col-span-1">
                      <span className="font-bold text-amber-700 dark:text-amber-400 uppercase text-[10px] block">
                        Common Mistake:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-snug">
                        {prob.commonMistake}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    <strong>Solution Note: </strong>
                    {prob.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
