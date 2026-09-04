
import { useState, useEffect, useMemo, useCallback } from 'react';
import { CourseData, StudentProgress, ProgressStatus, Unit, ICanStatement } from '../types';
import { courseData } from '../constants';

const progressValueMap: Record<ProgressStatus, number> = {
  [ProgressStatus.Yes]: 100,
  [ProgressStatus.Maybe]: 50,
  [ProgressStatus.No]: 0,
  [ProgressStatus.Unselected]: 0,
};

export const useStudentProgress = () => {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const savedProgress = localStorage.getItem('studentProgress');
      if (savedProgress) {
        return JSON.parse(savedProgress);
      }
    } catch (error) {
      console.error("Could not load progress from local storage", error);
    }
    
    // Initialize progress if nothing is saved
    const initialProgress: StudentProgress = {};
    courseData.units.forEach(unit => {
      unit.topics.forEach(topic => {
        topic.iCanStatements.forEach(iCan => {
          iCan.keyConcepts.forEach(kc => {
            initialProgress[kc.id] = ProgressStatus.Unselected;
          });
        });
      });
    });
    return initialProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem('studentProgress', JSON.stringify(progress));
    } catch (error) {
      console.error("Could not save progress to local storage", error);
    }
  }, [progress]);

  const updateProgress = useCallback((keyConceptId: string, status: ProgressStatus) => {
    setProgress(prev => ({ ...prev, [keyConceptId]: status }));
  }, []);
  
  const calculateICanProgress = useCallback((iCan: ICanStatement): number => {
    if (iCan.keyConcepts.length === 0) return 0;
    const total = iCan.keyConcepts.reduce((acc, kc) => {
        const status = progress[kc.id] || ProgressStatus.Unselected;
        return acc + progressValueMap[status];
    }, 0);
    return total / iCan.keyConcepts.length;
  }, [progress]);

  const unitProgressCalculations = useMemo(() => {
      const unitProgressMap: Record<string, number> = {};
      courseData.units.forEach(unit => {
          let totalICanStatements = 0;
          const totalProgress = unit.topics.reduce((topicAcc, topic) => {
              totalICanStatements += topic.iCanStatements.length;
              const topicTotal = topic.iCanStatements.reduce((iCanAcc, iCan) => {
                  return iCanAcc + calculateICanProgress(iCan);
              }, 0);
              return topicAcc + topicTotal;
          }, 0);
          unitProgressMap[unit.id] = totalICanStatements > 0 ? totalProgress / totalICanStatements : 0;
      });
      return unitProgressMap;
  }, [calculateICanProgress]);


  const overallCourseProgress = useMemo(() => {
    return courseData.units.reduce((acc, unit) => {
      const unitProgress = unitProgressCalculations[unit.id] || 0;
      return acc + (unitProgress * unit.normalizedWeight);
    }, 0);
  }, [unitProgressCalculations]);

  return {
    progress,
    updateProgress,
    calculateICanProgress,
    unitProgressCalculations,
    overallCourseProgress,
  };
};
