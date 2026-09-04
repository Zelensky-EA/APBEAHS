
import React from 'react';
import { courseData } from '../constants';

interface CourseProgressProps {
  overallProgress: number;
  unitProgress: Record<string, number>;
}

const unitColors = courseData.units.map(u => u.color);

const CourseProgress: React.FC<CourseProgressProps> = ({ overallProgress, unitProgress }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 sticky top-4 z-20">
      <h2 className="text-xl font-bold text-cyan-600 mb-2">AP Biology Exam Readiness</h2>
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-slate-200"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="text-cyan-500"
              strokeDasharray={`${overallProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              transform="rotate(90 18 18)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
            {Math.round(overallProgress)}%
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-600 mb-3">Your overall progress is calculated based on your self-assessment across all units, weighted by their importance on the AP Exam.</p>
          <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden flex">
            {courseData.units.map(unit => {
              const progress = unitProgress[unit.id] || 0;
              if(progress === 0) return null;
              return (
                 <div
                  key={unit.id}
                  className="h-full"
                  style={{ width: `${unit.normalizedWeight * 100}%`, backgroundColor: unit.color, opacity: (progress / 100) * 0.6 + 0.4 }}
                  title={`${unit.name}: ${Math.round(progress)}%`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;