
import React from 'react';
import { Unit } from '../types';
import CourseProgress from './CourseProgress';

interface UnitSelectionProps {
  units: Unit[];
  onSelectUnit: (unitId: string) => void;
  overallProgress: number;
  unitProgress: Record<string, number>;
}

const UnitSelection: React.FC<UnitSelectionProps> = ({ units, onSelectUnit, overallProgress, unitProgress }) => {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto animate-fade-in">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">AP Biology Progress Tracker</h1>
        <p className="text-md md:text-lg text-slate-600 mt-2">Select a unit to begin tracking your progress and preparing for the exam.</p>
      </header>

      <div className="mb-10">
        <CourseProgress overallProgress={overallProgress} unitProgress={unitProgress} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {units.map(unit => (
          <button
            key={unit.id}
            onClick={() => onSelectUnit(unit.id)}
            className="p-6 rounded-xl text-left border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 focus:outline-none focus:ring-2 bg-white"
            style={{
                borderColor: unit.color,
                boxShadow: `0 10px 25px -5px ${unit.color}25, 0 8px 10px -6px ${unit.color}25`,
                '--tw-ring-color': unit.color,
            } as React.CSSProperties}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: unit.color }}>{unit.name}</h2>
            <div className="space-y-1">
                <p className="text-sm text-slate-700"><strong>{unit.examWeighting}</strong> Exam Weighting</p>
                <p className="text-sm text-slate-500">~{unit.classPeriods} Class Periods</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitSelection;