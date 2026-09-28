import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewView } from './components/OverviewView';
import { SlidesViewer } from './components/SlidesViewer';
import { TrainerNotesView } from './components/TrainerNotesView';
import { InterviewQAView } from './components/InterviewQAView';
import { MCQsView } from './components/MCQsView';
import { OutputPredictionView } from './components/OutputPredictionView';
import { DebuggingView } from './components/DebuggingView';
import { CodingProblemsView } from './components/CodingProblemsView';
import { MockTestView } from './components/MockTestView';
import { RevisionSheetView } from './components/RevisionSheetView';
import { TopicMatrixView } from './components/TopicMatrixView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Top Navigation & Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'overview' && <OverviewView onNavigate={setActiveTab} />}
        {activeTab === 'slides' && <SlidesViewer />}
        {activeTab === 'trainer-notes' && <TrainerNotesView />}
        {activeTab === 'interview-qa' && <InterviewQAView />}
        {activeTab === 'mcqs' && <MCQsView />}
        {activeTab === 'output-pred' && <OutputPredictionView />}
        {activeTab === 'debugging' && <DebuggingView />}
        {activeTab === 'coding-problems' && <CodingProblemsView />}
        {activeTab === 'mock-test' && <MockTestView />}
        {activeTab === 'revision' && <RevisionSheetView />}
        {activeTab === 'matrix' && <TopicMatrixView />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300">PyPlace Suite</span>
            <span>•</span>
            <span>Placement Training Curriculum for Engineering Students</span>
          </div>
          <div>
            <span>Format: CONCEPT → SYNTAX → EXAMPLE → OUTPUT → INTERVIEW → MISTAKES</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
