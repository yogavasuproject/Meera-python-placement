import React, { useState, useEffect } from 'react';
import { mockTestQuestions, mockTestStructure, MockTestQuestion } from '../data/mockTestData';
import { Clock, Award, CheckCircle, XCircle, AlertCircle, RotateCcw, Eye, Printer, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MockTestView: React.FC = () => {
  const [activePart, setActivePart] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [trainerKeyMode, setTrainerKeyMode] = useState<boolean>(false);
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(3600); // 60 minutes
  const [studentMCQAnswers, setStudentMCQAnswers] = useState<Record<number, string>>({});
  const [studentTextAnswers, setStudentTextAnswers] = useState<Record<number, string>>({});

  // 60-Minute Countdown Timer
  useEffect(() => {
    let timer: any = null;
    if (testStarted && !testSubmitted && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, testSubmitted, secondsRemaining]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
    setTestSubmitted(false);
    setSecondsRemaining(3600);
    setStudentMCQAnswers({});
    setStudentTextAnswers({});
  };

  const handleSubmitTest = () => {
    setTestSubmitted(true);
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
  };

  const handleResetTest = () => {
    if (window.confirm('Reset this mock test attempt?')) {
      setTestStarted(false);
      setTestSubmitted(false);
      setSecondsRemaining(3600);
      setStudentMCQAnswers({});
      setStudentTextAnswers({});
    }
  };

  const currentQuestions = mockTestQuestions.filter((q) => q.part === activePart);

  // Score Calculation
  let mcqCorrect = 0;
  mockTestQuestions
    .filter((q) => q.part === 'A')
    .forEach((q) => {
      if (studentMCQAnswers[q.id] === q.correctAnswer) {
        mcqCorrect += 1;
      }
    });

  let outputCorrect = 0;
  mockTestQuestions
    .filter((q) => q.part === 'B')
    .forEach((q) => {
      const userText = (studentTextAnswers[q.id] || '').trim().toLowerCase();
      const actualText = q.correctAnswer.trim().toLowerCase();
      if (userText.length > 0 && (userText === actualText || actualText.includes(userText))) {
        outputCorrect += 1;
      }
    });

  const totalAutoScore = mcqCorrect * 1 + outputCorrect * 2;
  const maxPossibleScore = 20 * 1 + 15 * 2 + 10 * 3 + 5 * 2; // Part A: 20 + Part B: 30 + Part C: 30 + Part D: 10 = 90 marks

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-700/10 via-indigo-700/5 to-transparent border border-purple-500/20 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Full-Length Campus Screening Simulator</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              60-Minute First-Round Python Placement Mock Test
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              50 Questions formatted according to leading recruiter patterns (TCS NQT, Infosys, Cognizant, Wipro). Total duration: 60 minutes.
            </p>
          </div>

          {/* Test Action Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            {testStarted && !testSubmitted && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-sm border border-slate-700">
                <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="font-bold text-amber-300">{formatTime(secondsRemaining)}</span>
              </div>
            )}

            {!testStarted && !testSubmitted && (
              <button
                onClick={handleStartTest}
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Start 60-Min Timed Test
              </button>
            )}

            {testStarted && !testSubmitted && (
              <button
                onClick={handleSubmitTest}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm cursor-pointer"
              >
                Submit & Grade Test
              </button>
            )}

            {testSubmitted && (
              <button
                onClick={handleResetTest}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Test</span>
              </button>
            )}

            <button
              onClick={() => setTrainerKeyMode(!trainerKeyMode)}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                trainerKeyMode
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-300'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{trainerKeyMode ? 'Trainer Key Active' : 'Trainer Answer Key'}</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {mockTestStructure.map((sec) => {
            const isActive = activePart === sec.part;
            return (
              <button
                key={sec.part}
                onClick={() => setActivePart(sec.part)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold opacity-80">
                    {sec.part} ({sec.recommendedMinutes} mins)
                  </span>
                  <span className="text-xs font-bold">{sec.questionCount} Qs</span>
                </div>
                <h4 className="text-xs font-extrabold mt-1 truncate">{sec.title}</h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submitted Results Summary Banner */}
      {testSubmitted && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-slate-900 dark:text-white space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                Assessment Complete
              </span>
              <h3 className="text-xl font-black">Performance Report</h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {totalAutoScore} / 50 Marks
              </span>
              <span className="text-xs text-slate-500 block">
                Part A + Part B Auto-Graded (Part C & D evaluated via trainer key below)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Part A (MCQs)</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{mcqCorrect} / 20</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Part B (Output)</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{outputCorrect} / 15</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Part C (Coding)</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">10 Problems</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Part D (Debugging)</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">5 Tasks</p>
            </div>
          </div>
        </div>
      )}

      {/* Active Section Questions */}
      <div className="space-y-4">
        {currentQuestions.map((q: MockTestQuestion) => {
          const isShowAnswer = trainerKeyMode || testSubmitted;

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Q{q.id} • Part {q.part}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{q.topic}</span>
                </div>
                <span className="text-xs font-bold text-slate-400">{q.marks} Mark{q.marks > 1 ? 's' : ''}</span>
              </div>

              <p className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {q.questionText}
              </p>

              {/* Code Snippet if present */}
              {q.codeSnippet && (
                <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-950 p-3">
                  <pre className="text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{q.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Part A Options */}
              {q.part === 'A' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                    const isSelected = studentMCQAnswers[q.id] === opt;
                    const isCorrect = q.correctAnswer === opt;

                    let btnStyle = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60';
                    if (isShowAnswer) {
                      if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                      else if (isSelected && !isCorrect) btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through';
                    } else if (isSelected) {
                      btnStyle = 'border-purple-600 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 font-bold';
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() =>
                          !testSubmitted &&
                          setStudentMCQAnswers((prev) => ({
                            ...prev,
                            [q.id]: opt
                          }))
                        }
                        className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-700 dark:text-slate-300">
                          {opt}
                        </span>
                        <span>{q.options ? q.options[opt] : ''}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Part B: Student text input for output */}
              {q.part === 'B' && !isShowAnswer && (
                <div className="pt-1">
                  <input
                    type="text"
                    placeholder="Type predicted output..."
                    value={studentTextAnswers[q.id] || ''}
                    onChange={(e) =>
                      setStudentTextAnswers((prev) => ({
                        ...prev,
                        [q.id]: e.target.value
                      }))
                    }
                    className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              )}

              {/* Part C & D: Student Code Editor / Text Area */}
              {(q.part === 'C' || q.part === 'D') && !isShowAnswer && (
                <div className="pt-1">
                  <textarea
                    rows={3}
                    placeholder="Write your Python solution or code fix here..."
                    value={studentTextAnswers[q.id] || ''}
                    onChange={(e) =>
                      setStudentTextAnswers((prev) => ({
                        ...prev,
                        [q.id]: e.target.value
                      }))
                    }
                    className="w-full text-xs font-mono p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              )}

              {/* Answer Key / Explanation in Trainer Mode or after Submit */}
              {isShowAnswer && (
                <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      ✓ Correct Answer / Key:
                    </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {q.correctAnswer}
                    </span>
                  </div>

                  {q.solutionCode && (
                    <div className="rounded bg-slate-950 border border-slate-800 p-2 overflow-x-auto">
                      <pre className="font-mono text-emerald-400 text-xs">
                        <code>{q.solutionCode}</code>
                      </pre>
                    </div>
                  )}

                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Explanation: </strong>
                    {q.explanation}
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
