export type Domain = 'Development' | 'Security' | 'Deployment' | 'Troubleshooting';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  domain: Domain;
  text: string;
  options: Option[];
  correctOptions: string[]; // Array of correct option IDs
  explanation: string;
  referenceUrl?: string; // Optional AWS doc reference
  isMultiSelect: boolean;
}

export interface DomainScore {
  correct: number;
  total: number;
}

export interface ExamAttempt {
  id: string;
  date: string; // ISO string
  score: number;
  totalQuestions: number;
  passed: boolean; // >= 720
  domainScores: Record<string, DomainScore>;
  userAnswers: Record<string, string[]>; // question ID -> array of selected option IDs
}
