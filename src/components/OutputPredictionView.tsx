import React, { useState } from 'react';
import { outputPredictionData, OutputPredictionItem } from '../data/outputPredictionData';
import { Code, CheckCircle, XCircle, Eye, EyeOff, RotateCcw, Sparkles } from 'lucide-react';

export const OutputPredictionView: React.FC = () => {
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  const [filterDifficulty, setFilterDifficulty] = useState<string>('ALL');
  const [trainerMode, setTrainerMode] = useState<boolean>(false);

  const filteredItems = outputPredictionData.filter((item) => {
    return filterDifficulty === 'ALL' || item.difficulty === filterDifficulty;
  });

  const handleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleRevealAll = () => {
    const all: Record<number, boolean> = {};
    outputPredictionData.forEach((i) => (all[i.id] = true));
    setRevealedIds(all);
  };

  const handleHideAll = () => {
    setRevealedIds({});
  };

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
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600/10 via-teal-600/5 to-transparent border border-emerald-500/20 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Technical Screening Output Prediction</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              30 "Predict the Output" Code Challenges
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Distribution: <strong>10 Easy</strong> • <strong>15 Medium</strong> • <strong>5 Difficult</strong>. Test your mental code execution across variables, slicing, closures, list mutation, and bankers rounding.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setTrainerMode(!trainerMode)}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                trainerMode
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              {trainerMode ? <Eye className="w-3.5 h-3.5 text-amber-500" /> : <EyeOff className="w-3.5 h-3.5 text-slate-400" />}
              <span>{trainerMode ? 'Trainer Key Mode: Active' : 'Reveal All Trainer Answers'}</span>
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="mt-6 flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase">Difficulty:</span>
          <div className="flex gap-1">
            {[
              { label: 'All (30)', val: 'ALL' },
              { label: 'Easy (10)', val: 'Easy' },
              { label: 'Medium (15)', val: 'Medium' },
              { label: 'Difficult (5)', val: 'Difficult' }
            ].map((btn) => (
              <button
                key={btn.val}
                onClick={() => setFilterDifficulty(btn.val)}
                className={`text-xs px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                  filterDifficulty === btn.val
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Output Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredItems.map((item: OutputPredictionItem) => {
          const isRevealed = trainerMode || !!revealedIds[item.id];
          const userGuess = userInputs[item.id] || '';
          const hasGuessed = userGuess.trim().length > 0;
          const isMatch = hasGuessed && userGuess.trim() === item.correctOutput.trim();

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Snippet #{item.id}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                      {item.topic}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getDifficultyBadge(
                      item.difficulty
                    )}`}
                  >
                    {item.difficulty}
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-950 p-3 shadow-inner">
                  <pre className="text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{item.code}</code>
                  </pre>
                </div>

                {/* Interactive Guess Input for Student */}
                {!trainerMode && (
                  <div className="space-y-1.5 pt-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                      Your Predicted Output:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type output here (e.g. 20 30 or True)..."
                        value={userGuess}
                        onChange={(e) =>
                          setUserInputs((prev) => ({
                            ...prev,
                            [item.id]: e.target.value
                          }))
                        }
                        className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => handleReveal(item.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
                      >
                        {isRevealed ? 'Hide' : 'Check'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Reveal Section */}
              {isRevealed && (
                <div className="bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      Correct Verified Output:
                    </span>
                    {hasGuessed && (
                      <span
                        className={`text-xs font-bold flex items-center gap-1 ${
                          isMatch ? 'text-emerald-500' : 'text-amber-500'
                        }`}
                      >
                        {isMatch ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isMatch ? 'Exact Match!' : 'Compare Above'}
                      </span>
                    )}
                  </div>
                  <div className="rounded bg-slate-950 border border-slate-800 p-2 font-mono text-xs text-emerald-300">
                    {item.correctOutput}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    <strong>Why: </strong>
                    {item.explanation}
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
