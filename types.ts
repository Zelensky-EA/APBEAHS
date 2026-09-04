
export enum ProgressStatus {
  Yes = 'Yes',
  Maybe = 'Maybe',
  No = 'No',
  Unselected = 'Unselected',
}

export interface KeyConcept {
  id: string;
  text: string;
  campbellChapter?: string;
}

export interface ICanStatement {
  id: string;
  text: string;
  keyConcepts: KeyConcept[];
}

export interface Topic {
  id: string;
  name: string;
  iCanStatements: ICanStatement[];
}

export interface Unit {
  id: string;
  name: string;
  examWeighting: string;
  normalizedWeight: number;
  classPeriods: string;
  keyUnderstanding: string;
  bigIdeas: { title: string; question: string }[];
  sciencePractices: string;
  examTips: string;
  vocabulary: string[];
  topics: Topic[];
  color: string;
}

export interface CourseData {
  units: Unit[];
}

export type StudentProgress = Record<string, ProgressStatus>;
