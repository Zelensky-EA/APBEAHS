
import React from 'react';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 my-2">
      <div
        className="h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;