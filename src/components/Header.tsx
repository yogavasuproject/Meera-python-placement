import React, { useState } from 'react';
import { Download, Presentation, BookOpen, CheckCircle, Code, HelpCircle, Bug, FileText, Award, Layers } from 'lucide-react';
import { exportPresentationToPPTX } from '../utils/pptxExport';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);

  const handleDownloadPPTX = async () => {
    try {
      setDownloading(true);
      await exportPresentationToPPTX((current, total) => {
        setProgress({ current, total });
      });
    } catch (err) {
      console.error('PPTX export error:', err);
    } finally {
      setDownloading(false);
      setProgress(null);
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'slides', label: '72 Slides (PPT)', icon: Presentation, badge: '72' },
    { id: 'trainer-notes', label: 'Trainer Notes', icon: FileText },
    { id: 'interview-qa', label: '50 Interview Q&A', icon: HelpCircle, badge: '50' },
    { id: 'mcqs', label: '100 MCQs', icon: CheckCircle, badge: '100' },
    { id: 'output-pred', label: '30 Output Predict', icon: Code, badge: '30' },
    { id: 'debugging', label: '20 Debugging', icon: Bug, badge: '20' },
    { id: 'coding-problems', label: '50 Coding Problems', icon: Code, badge: '50' },
    { id: 'mock-test', label: '60-Min Mock Test', icon: Award, badge: '50 Qs' },
    { id: 'revision', label: 'Revision Sheet', icon: FileText },
    { id: 'matrix', label: 'Topic Matrix', icon: Layers }
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="font-mono text-xl font-black text-white">Py</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  PyPlace Placement Masterclass
                </h1>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/30">
                  Campus 2026 Ready
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Complete First-Round Screening Package for Engineering Placements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadPPTX}
              disabled={downloading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Download professional classroom PowerPoint file (.pptx) with all 72 slides, code blocks, and trainer notes"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              {downloading ? (
                <span>
                  Generating PPTX ({progress ? `${progress.current}/${progress.total}` : 'Packaging...'})
                </span>
              ) : (
                <span>Download .PPTX (72 Slides)</span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-slate-700">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
