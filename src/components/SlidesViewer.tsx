import React, { useState, useEffect } from 'react';
import { slidesData, SlideData } from '../data/slidesData';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Copy, Check, Eye, EyeOff, Download, List } from 'lucide-react';
import { exportPresentationToPPTX } from '../utils/pptxExport';

export const SlidesViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showTrainerNotes, setShowTrainerNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedSection, setSelectedSection] = useState<number | 'all'>('all');
  const [downloading, setDownloading] = useState(false);

  const currentSlide: SlideData = slidesData[currentSlideIndex];

  // Sections list for filtering
  const sections = Array.from(new Set(slidesData.map((s) => s.section))).map((name, idx) => ({
    number: idx + 1,
    name
  }));

  // Filtered slides
  const filteredSlides = selectedSection === 'all'
    ? slidesData
    : slidesData.filter((s) => s.sectionNumber === selectedSection);

  const handleNext = () => {
    if (currentSlideIndex < slidesData.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const handleCopyCode = () => {
    if (currentSlide.codeSnippet) {
      navigator.clipboard.writeText(currentSlide.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getCalloutStyles = (type?: string) => {
    switch (type) {
      case 'COMMON MISTAKE':
        return 'bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-300';
      case 'PLACEMENT TIP':
        return 'bg-emerald-500/10 border-emerald-500/40 text-emerald-900 dark:text-emerald-300';
      case 'INTERVIEW TIP':
        return 'bg-blue-500/10 border-blue-500/40 text-blue-900 dark:text-blue-300';
      case 'IMPORTANT':
        return 'bg-rose-500/10 border-rose-500/40 text-rose-900 dark:text-rose-300';
      default:
        return 'bg-indigo-500/10 border-indigo-500/40 text-indigo-900 dark:text-indigo-300';
    }
  };

  return (
    <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-6 overflow-y-auto' : ''}`}>
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Jump to Section:
          </span>
          <select
            value={selectedSection}
            onChange={(e) => {
              const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
              setSelectedSection(val);
              const firstMatch = slidesData.findIndex((s) => val === 'all' || s.sectionNumber === val);
              if (firstMatch !== -1) setCurrentSlideIndex(firstMatch);
            }}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All 14 Sections (72 Slides)</option>
            {sections.map((sec) => (
              <option key={sec.number} value={sec.number}>
                {sec.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTrainerNotes(!showTrainerNotes)}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Toggle Trainer Presenter Notes"
          >
            {showTrainerNotes ? <EyeOff className="w-3.5 h-3.5 text-amber-500" /> : <Eye className="w-3.5 h-3.5 text-slate-400" />}
            <span>{showTrainerNotes ? 'Hide Trainer Note' : 'Show Trainer Note'}</span>
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Toggle Fullscreen Projector Mode"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Projector Mode'}</span>
          </button>

          <button
            onClick={async () => {
              setDownloading(true);
              await exportPresentationToPPTX();
              setDownloading(false);
            }}
            disabled={downloading}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm cursor-pointer disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? 'Exporting...' : 'Export PPTX'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card Container (16:9 Aspect Ratio) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden min-h-[580px] flex flex-col justify-between">
        {/* Slide Header */}
        <div className="bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {currentSlide.section}
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSlide.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Slide {currentSlide.slideNumber} / {slidesData.length}
            </span>
          </div>
        </div>

        {/* Slide Body */}
        <div className="p-6 md:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bullet Points & Callouts */}
          <div className={`${currentSlide.codeSnippet ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
            <div className="space-y-3">
              {currentSlide.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Interview Points if available */}
            {currentSlide.interviewPoints && (
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide block mb-1">
                  INTERVIEW INSIGHT
                </span>
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {currentSlide.interviewPoints}
                </p>
              </div>
            )}

            {/* Highlight Callout Pill */}
            {currentSlide.calloutType && currentSlide.calloutText && (
              <div className={`p-4 rounded-xl border ${getCalloutStyles(currentSlide.calloutType)}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black uppercase tracking-wider">
                    [{currentSlide.calloutType}]
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug">
                  {currentSlide.calloutText}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Code Snippet & Output */}
          {currentSlide.codeSnippet && (
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">python_example.py</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed scrollbar-thin">
                  <code>{currentSlide.codeSnippet}</code>
                </pre>
              </div>

              {/* Output Box */}
              {currentSlide.output && (
                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-sm">
                  <div className="bg-slate-900/90 px-4 py-1.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Expected Output
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Terminal Output</span>
                  </div>
                  <pre className="p-3 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto">
                    <code>{currentSlide.output}</code>
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trainer Presenter Note (Collapsible bottom bar) */}
        {showTrainerNotes && currentSlide.trainerNote && (
          <div className="bg-amber-50/80 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900/40 px-6 py-3">
            <div className="flex items-start gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex-shrink-0 mt-0.5">
                TRAINER CLASSROOM NOTE:
              </span>
              <p className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                {currentSlide.trainerNote}
              </p>
            </div>
          </div>
        )}

        {/* Slide Footer Navigation */}
        <div className="bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === slidesData.length - 1}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Slider Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Slide {currentSlideIndex + 1} of {slidesData.length}
            </span>
            <input
              type="range"
              min={0}
              max={slidesData.length - 1}
              value={currentSlideIndex}
              onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
              className="w-24 sm:w-44 accent-blue-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
