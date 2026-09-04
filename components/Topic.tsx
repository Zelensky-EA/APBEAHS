
import React, { useState } from 'react';
import { Topic as TopicType, StudentProgress, ProgressStatus } from '../types';
import ICanStatement from './ICanStatement';
import { ChevronDownIcon } from './icons';

interface TopicProps {
  topic: TopicType;
  studentProgress: Record<string, ProgressStatus>;
  onStatusChange: (conceptId: string, status: ProgressStatus) => void;
  calculateICanProgress: (iCan: any) => number;
  color: string;
}

const Topic: React.FC<TopicProps> = ({ topic, studentProgress, onStatusChange, calculateICanProgress, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-slate-100/80 transition"
      >
        <h3 className="text-lg font-bold text-slate-900">{topic.name}</h3>
        <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {topic.iCanStatements.map(statement => (
            <ICanStatement
              key={statement.id}
              statement={statement}
              progress={calculateICanProgress(statement)}
              studentProgress={studentProgress}
              onStatusChange={onStatusChange}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topic;