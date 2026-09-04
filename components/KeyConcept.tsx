
import React from 'react';
import { KeyConcept as KeyConceptType, ProgressStatus } from '../types';
import { CheckCircleIcon, QuestionMarkCircleIcon, XCircleIcon } from './icons';

interface KeyConceptProps {
  concept: KeyConceptType;
  status: ProgressStatus;
  onStatusChange: (conceptId: string, status: ProgressStatus) => void;
}

const statusConfig = {
    [ProgressStatus.Yes]: {
        button: "bg-green-100 text-green-700 hover:bg-green-200",
        icon: <CheckCircleIcon className="w-5 h-5" />
    },
    [ProgressStatus.Maybe]: {
        button: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
        icon: <QuestionMarkCircleIcon className="w-5 h-5" />
    },
    [ProgressStatus.No]: {
        button: "bg-red-100 text-red-700 hover:bg-red-200",
        icon: <XCircleIcon className="w-5 h-5" />
    },
     [ProgressStatus.Unselected]: {
        button: "bg-slate-600/50 text-slate-400 hover:bg-slate-600/80",
        icon: null
    }
}

const KeyConcept: React.FC<KeyConceptProps> = ({ concept, status, onStatusChange }) => {
  return (
    <div className="py-3 px-4 bg-slate-100 rounded-lg flex items-start gap-4">
      <div className="flex-1">
        <p className="text-slate-700">{concept.text}</p>
        {concept.campbellChapter && <p className="text-xs text-cyan-600/80 mt-1">Campbell Biology: {concept.campbellChapter}</p>}
      </div>
      <div className="flex gap-2">
        {(Object.keys(ProgressStatus) as Array<keyof typeof ProgressStatus>)
            .filter(key => ProgressStatus[key] !== ProgressStatus.Unselected)
            .map(key => {
            const currentStatus = ProgressStatus[key];
            const isActive = status === currentStatus;
            return (
                 <button
                    key={currentStatus}
                    onClick={() => onStatusChange(concept.id, currentStatus)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                        isActive ? statusConfig[currentStatus].button : 'bg-slate-200 hover:bg-slate-300 text-slate-500'
                    }`}
                    aria-label={`Mark as ${currentStatus}`}
                    title={`Mark as ${currentStatus}`}
                >
                    {statusConfig[currentStatus].icon}
                </button>
            )
        })}
      </div>
    </div>
  );
};

export default KeyConcept;