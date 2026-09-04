import React, { useState } from 'react';
import { courseData } from '../constants';
import { useStudentProgress } from '../hooks/useStudentProgress';
import UnitView from './UnitView';
import VocabularyModal from './VocabularyModal';
import UnitSelection from './UnitSelection';

const ProgressTracker: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedVocabTerm, setSelectedVocabTerm] = useState<string | null>(null);
  const { progress, updateProgress, resetUnitProgress, calculateICanProgress, unitProgressCalculations, overallCourseProgress } = useStudentProgress();
  const selectedUnit = courseData.units.find(unit => unit.id === selectedUnitId);
  if (!selectedUnit) return <main className="min-h-[calc(100vh-73px)]"><UnitSelection units={courseData.units} onSelectUnit={setSelectedUnitId} overallProgress={overallCourseProgress} unitProgress={unitProgressCalculations} /></main>;
  return <div className="flex min-h-[calc(100vh-73px)] flex-col md:flex-row">
    <VocabularyModal term={selectedVocabTerm} onClose={() => setSelectedVocabTerm(null)} />
    <aside className="w-full border-b border-slate-200 bg-slate-100/90 p-4 md:sticky md:top-[73px] md:h-[calc(100vh-73px)] md:w-64 md:overflow-y-auto md:border-b-0 md:border-r">
      <button onClick={() => setSelectedUnitId(null)} className="mb-3 text-left text-lg font-bold text-slate-900 hover:text-cyan-700">All CED Units</button>
      <nav><ul>{courseData.units.map(unit => <li key={unit.id}><button onClick={() => setSelectedUnitId(unit.id)} className={`my-1 w-full rounded-md border-l-4 p-3 text-left text-sm font-medium ${selectedUnitId === unit.id ? 'text-slate-950' : 'border-transparent text-slate-600 hover:bg-white'}`} style={{backgroundColor: selectedUnitId === unit.id ? `${unit.color}22` : undefined, borderLeftColor: selectedUnitId === unit.id ? unit.color : undefined}}>{unit.name}</button></li>)}</ul></nav>
    </aside>
    <main className="min-w-0 flex-1"><UnitView unit={selectedUnit} studentProgress={progress} onStatusChange={updateProgress} onResetUnit={() => resetUnitProgress(selectedUnit.id)} calculateICanProgress={calculateICanProgress} onVocabClick={setSelectedVocabTerm} unitProgress={unitProgressCalculations[selectedUnit.id] || 0} /></main>
  </div>;
};
export default ProgressTracker;
