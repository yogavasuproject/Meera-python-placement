import React, { useState } from 'react';
import { debuggingData, DebuggingItem } from '../data/debuggingData';
import { Bug, CheckCircle2, AlertTriangle, Eye, EyeOff, Code } from 'lucide-react';

export const DebuggingView: React.FC = () => {
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [selectedErrorType, setSelectedErrorType] = useState<string>('ALL');
  const [trainerMode, setTrainerMode] = useState<boolean>(false);

  const errorTypes = Array.from(new Set(debuggingData.map((d) => d.errorType))).sort();

  const filteredItems = debuggingData.filter((item) => {
    return selectedErrorType === 'ALL' || item.errorType === selectedErrorType;
  });

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getErrorTypeBadge = (err: string) => {
    switch (err) {
      case 'SyntaxError':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      case 'IndentationError':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'TypeError':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'IndexError':
      case 'KeyError':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      case 'Logic Error':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-600/10 via-red-600/5 to-transparent border border-rose-500/20 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
              <Bug className="w-4 h-4" />
              <span>Campus Code Debugging Round</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              20 Placement Code Debugging Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Identify, diagnose, and fix real bugs tested in TCS, Cognizant, and Infosys debugging rounds: Syntax errors, indentation traps, mutable defaults, unbound locals, and off-by-one errors.
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
              <span>{trainerMode ? 'Trainer Solution Mode: Active' : 'Reveal All Corrected Codes'}</span>
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="mt-6 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase">Error Type:</span>
          <select
            value={selectedErrorType}
            onChange={(e) => setSelectedErrorType(e.target.value)}
            className="text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
          >
            <option value="ALL">All Errors (20)</option>
            {errorTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Debugging List */}
      <div className="space-y-4">
        {filteredItems.map((item: DebuggingItem) => {
          const isRevealed = trainerMode || !!revealedIds[item.id];

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Debug Task #{item.id}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getErrorTypeBadge(
                      item.errorType
                    )}`}
                  >
                    {item.errorType}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {/* Buggy Snippet */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Buggy Python Code:
                  </span>
                  <div className="rounded-lg overflow-hidden border border-rose-950/60 bg-slate-950 p-3">
                    <pre className="text-xs font-mono text-rose-400 overflow-x-auto leading-relaxed">
                      <code>{item.buggyCode}</code>
                    </pre>
                  </div>
                </div>

                {/* Reveal Action Button */}
                {!trainerMode && (
                  <div className="pt-1">
                    <button
                      onClick={() => toggleReveal(item.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition-colors cursor-pointer"
                    >
                      {isRevealed ? 'Hide Solution' : 'Reveal Bug Fix & Explanation'}
                    </button>
                  </div>
                )}
              </div>

              {/* Corrected Code & Explanation */}
              {isRevealed && (
                <div className="bg-emerald-50/30 dark:bg-slate-950/80 border-t border-emerald-200/60 dark:border-slate-800 p-5 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Corrected Clean Code:
                    </span>
                    <div className="rounded-lg overflow-hidden border border-emerald-950/60 bg-slate-950 p-3">
                      <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                        <code>{item.correctedCode}</code>
                      </pre>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">Why It Failed & How to Fix: </strong>
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
