import React, { useState } from 'react';
import Navigator from './components/Navigator';
import ProgressTracker from './components/ProgressTracker';
import ExamGuide from './components/ExamGuide';

type Tab = 'navigator' | 'progress' | 'exam';

const App: React.FC = () => {
  const [tab, setTab] = useState<Tab>('navigator');
  return <div className="min-h-screen bg-slate-50 text-slate-800">
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Student Hub</p><h1 className="text-xl font-extrabold text-slate-950">AP Biology</h1></div>
        <nav className="flex rounded-xl bg-slate-100 p-1" aria-label="AP Biology tools">
          <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === 'navigator' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`} onClick={() => setTab('navigator')}>Daily Navigator</button>
          <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === 'progress' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`} onClick={() => setTab('progress')}>CED Progress</button>
          <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === 'exam' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`} onClick={() => setTab('exam')}>AP Exam</button>
        </nav>
      </div>
    </header>
    {tab === 'navigator' ? <Navigator /> : tab === 'progress' ? <ProgressTracker /> : <ExamGuide />}
  </div>;
};
export default App;
