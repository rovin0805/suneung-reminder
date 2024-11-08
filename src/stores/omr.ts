import { create } from "zustand";
import { ExamSubjectType, ValidAnswerType } from "@/types/exam";

/**
 * 유저가 선태한 과목별 답안
 */

interface OMRState {
  answers: Record<ExamSubjectType, ValidAnswerType | null>;
  setAnswers: (
    answers: Record<ExamSubjectType, ValidAnswerType | null>
  ) => void;
  reset: () => void;
}

const defaultAnswers: Record<ExamSubjectType, ValidAnswerType | null> = {
  k: null,
  m: null,
  e: null,
};

export const useOMRStore = create<OMRState>((set) => ({
  answers: defaultAnswers,
  setAnswers: (answers) => set({ answers }),
  reset: () =>
    set({
      answers: defaultAnswers,
    }),
}));
