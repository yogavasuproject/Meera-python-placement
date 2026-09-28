import React, { useState } from 'react';
import { mcqsData, MCQItem } from '../data/mcqsData';
import { CheckCircle, XCircle, RotateCcw, Eye, EyeOff, Filter, Trophy, Sparkles, Code } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MCQsView: React.FC = () => {
  const [trainerMode, setTrainerMode] = useState<boolean>(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});

  // Unique topics
  const topics = Array.from(new Set(mcqsData.map((m) => m.topic))).sort();

  const filteredMCQs = mcqsData.filter((item) => {
    const matchesDiff = selectedDifficulty === 'ALL' || item.difficulty === selectedDifficulty;
    const matchesTopic = selectedTopic === 'ALL' || item.topic === selectedTopic;
    return matchesDiff && matchesTopic;
  });

  const handleSelectOption = (qId: number, option: 'A' | 'B' | 'C' | 'D') => {
    if (userAnswers[qId]) return; // already answered
    const updated = { ...userAnswers, [qId]: option };
    setUserAnswers(updated);

    const question = mcqsData.find((m) => m.id === qId);
    if (question && question.correctAnswer === option) {
      // check if reached milestone
      const currentCorrect = Object.entries(updated).filter(
        ([id, ans]) => mcqsData.find((m) => m.id === Number(id))?.correctAnswer === ans
      ).length;
      if (currentCorrect === 10 || currentCorrect === 25 || currentCorrect === 50 || currentCorrect === 100) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all answers and restart practice?')) {
      setUserAnswers({});
    }
  };

  // Score calculation
  const totalAttempted = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => mcqsData.find((m) => m.id === Number(id))?.correctAnswer === ans
  ).length;
  const scorePercent = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Medium':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Difficult':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="bg-gradient-to-r from-indigo-600/10 via-blue-600/5 to-transparent border border-indigo-500/20 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <Trophy className="w-4 h-4" />
              <span>Campus Assessment Question Bank</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              100 Verified Technical Placement MCQs
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Distribution: <strong>30 Easy</strong> • <strong>50 Medium</strong> • <strong>20 Difficult</strong>. Exactly one verified correct answer per question, with plausible distractors and complete technical explanations.
            </p>
          </div>

          {/* Interactive Scoreboard & Mode Toggle */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 flex items-center gap-4 shadow-sm">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Score</span>
                <span className="text-base font-extrabold text-slate-900 dark:text-white">
                  {correctCount} / {totalAttempted}
                  <span className="text-xs font-semibold text-slate-400 ml-1">({scorePercent}%)</span>
                </span>
              </div>
              <button
                onClick={handleReset}
                title="Reset answers"
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setTrainerMode(!trainerMode)}
              className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all cursor-pointer shadow-sm ${
                trainerMode
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {trainerMode ? <Eye className="w-4 h-4 text-amber-500" /> : <EyeOff className="w-4 h-4 text-slate-400" />}
              <span>{trainerMode ? 'Trainer Solution Mode: ACTIVE' : 'Switch to Trainer Answer Key'}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Difficulty:</span>
            <div className="flex gap-1">
              {[
                { label: 'All (100)', val: 'ALL' },
                { label: 'Easy (30)', val: 'Easy' },
                { label: 'Medium (50)', val: 'Medium' },
                { label: 'Difficult (20)', val: 'Difficult' }
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => setSelectedDifficulty(btn.val)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                    selectedDifficulty === btn.val
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 uppercase">Topic:</span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="ALL">All Topics</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* MCQs List */}
      <div className="space-y-4">
        {filteredMCQs.map((mcq: MCQItem) => {
          const selectedAns = userAnswers[mcq.id];
          const hasAnswered = !!selectedAns;
          const isCorrect = selectedAns === mcq.correctAnswer;
          const showAnswer = trainerMode || hasAnswered;

          return (
            <div
              key={mcq.id}
              className={`bg-white dark:bg-slate-900 border rounded-xl p-5 shadow-sm transition-all ${
                hasAnswered
                  ? isCorrect
                    ? 'border-emerald-500/40 bg-emerald-500/5'
                    : 'border-rose-500/40 bg-rose-500/5'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Q.{mcq.id}
                  </span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {mcq.topic}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getDifficultyBadge(
                      mcq.difficulty
                    )}`}
                  >
                    {mcq.difficulty}
                  </span>
                </div>

                {hasAnswered && (
                  <span
                    className={`flex items-center gap-1 text-xs font-bold ${
                      isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                )}
              </div>

              {/* Question Text */}
              <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-2 leading-relaxed">
                {mcq.question}
              </p>

              {/* Code Snippet if present */}
              {mcq.codeSnippet && (
                <div className="mt-3 rounded-lg overflow-hidden border border-slate-700 bg-slate-950 p-3">
                  <pre className="text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto">
                    <code>{mcq.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Options */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const optText = mcq.options[optKey];
                  const isSelected = selectedAns === optKey;
                  const isThisCorrect = mcq.correctAnswer === optKey;

                  let btnStyle = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60';
                  let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';

                  if (showAnswer) {
                    if (isThisCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                      badgeStyle = 'bg-emerald-600 text-white';
                    } else if (isSelected && !isThisCorrect) {
                      btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through';
                      badgeStyle = 'bg-rose-600 text-white';
                    }
                  } else if (isSelected) {
                    btnStyle = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200';
                    badgeStyle = 'bg-indigo-600 text-white';
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(mcq.id, optKey)}
                      disabled={hasAnswered && !trainerMode}
                      className={`flex items-start gap-2.5 p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${badgeStyle}`}>
                        {optKey}
                      </span>
                      <span className="leading-snug pt-0.5">{optText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Answer Key (Visible in Trainer Mode or after answering) */}
              {showAnswer && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1 bg-slate-50/60 dark:bg-slate-950/40 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      ✓ Correct Answer: Option {mcq.correctAnswer}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Explanation: </strong>
                    {mcq.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
