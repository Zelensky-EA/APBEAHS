
import React from 'react';
import { ICanStatement as ICanStatementType, ProgressStatus } from '../types';
import ProgressBar from './ProgressBar';
import KeyConcept from './KeyConcept';

interface ICanStatementProps {
  statement: ICanStatementType;
  progress: number;
  studentProgress: Record<string, ProgressStatus>;
  onStatusChange: (conceptId: string, status: ProgressStatus) => void;
  color: string;
}

const ICanStatement: React.FC<ICanStatementProps> = ({ statement, progress, studentProgress, onStatusChange, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg mb-4 shadow-md border border-slate-200/80">
      <p className="font-semibold text-slate-800">{statement.text}</p>
      <ProgressBar progress={progress} color={color} />
      <div className="space-y-2 mt-3">
        {statement.keyConcepts.map(kc => (
          <KeyConcept
            key={kc.id}
            concept={kc}
            status={studentProgress[kc.id] || ProgressStatus.Unselected}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ICanStatement;