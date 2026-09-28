import React from 'react';
import { revisionSheetData, RevisionSection } from '../data/revisionSheet';
import { FileText, Printer, Sparkles, CheckCircle2 } from 'lucide-react';

export const RevisionSheetView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-600/10 via-emerald-600/5 to-transparent border border-teal-500/20 rounded-2xl p-6 print:border-none print:p-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Campus Interview Ready</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Python Placement – Last Minute Revision Sheet
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              High-yield summary designed for quick revision 30 minutes before your technical screening round or campus interview.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm transition-colors cursor-pointer print:hidden"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF Sheet</span>
          </button>
        </div>
      </div>

      {/* Revision Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionSheetData.map((sec: RevisionSection, idx: number) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-3"
          >
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              {sec.title}
            </h3>

            <div className="space-y-3">
              {sec.items.map((item, itemIdx) => (
                <div key={itemIdx} className="space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 pl-3">
                    {item.detail}
                  </p>
                  {item.code && (
                    <div className="ml-3 mt-1 rounded bg-slate-950 p-2 border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                      <code>{item.code}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
