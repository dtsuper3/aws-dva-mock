import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ExamAttempt } from '../types';

interface QuizState {
  currentAttempt: Partial<ExamAttempt> | null;
  mode: 'exam' | 'practice' | null;
  flaggedQuestions: string[];
  currentQuestionIndex: number;
  timeRemaining: number; // in seconds
  isSubmitted: boolean;
  history: ExamAttempt[];

  // Actions
  startTest: (mode: 'exam' | 'practice', totalQuestions: number) => void;
  setAnswer: (questionId: string, optionIds: string[]) => void;
  toggleFlag: (questionId: string) => void;
  setQuestionIndex: (index: number) => void;
  tickTimer: () => void;
  submitTest: (score: ExamAttempt) => void;
  clearCurrentTest: () => void;
  clearHistory: () => void;
}

const EXAM_DURATION = 130 * 60; // 130 minutes

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      currentAttempt: null,
      mode: null,
      flaggedQuestions: [],
      currentQuestionIndex: 0,
      timeRemaining: EXAM_DURATION,
      isSubmitted: false,
      history: [],

      startTest: (mode, totalQuestions) => set({
        mode,
        currentAttempt: {
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          totalQuestions,
          userAnswers: {},
        },
        flaggedQuestions: [],
        currentQuestionIndex: 0,
        timeRemaining: mode === 'exam' ? EXAM_DURATION : 0,
        isSubmitted: false,
      }),

      setAnswer: (questionId, optionIds) => set((state) => ({
        currentAttempt: state.currentAttempt ? {
          ...state.currentAttempt,
          userAnswers: {
            ...state.currentAttempt.userAnswers,
            [questionId]: optionIds,
          }
        } : null
      })),

      toggleFlag: (questionId) => set((state) => ({
        flaggedQuestions: state.flaggedQuestions.includes(questionId)
          ? state.flaggedQuestions.filter(id => id !== questionId)
          : [...state.flaggedQuestions, questionId]
      })),

      setQuestionIndex: (index) => set({ currentQuestionIndex: index }),

      tickTimer: () => set((state) => ({
        timeRemaining: Math.max(0, state.timeRemaining - 1)
      })),

      submitTest: (attempt) => set((state) => ({
        history: [...state.history, attempt],
        currentAttempt: attempt,
        isSubmitted: true,
      })),

      clearCurrentTest: () => set({
        currentAttempt: null,
        mode: null,
        flaggedQuestions: [],
        currentQuestionIndex: 0,
        isSubmitted: false,
      }),

      clearHistory: () => set({ history: [] })
    }),
    {
      name: 'aws-quiz-storage',
      // Only keep essential data on page reload (you could omit some fields if desired)
    }
  )
);
