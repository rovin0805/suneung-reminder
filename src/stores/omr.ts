import { create } from "zustand";
import { ExamSubjectType, ValidAnswerType } from "@/types/exam";

/**
 * 유저가 선태한 과목별 답안
 */

type OMRType = Record<ExamSubjectType, ValidAnswerType | null>;

interface OMRState {
  omr: OMRType;
  setOMR: (answers: Partial<OMRType>) => void;
  reset: () => void;
}

const defaultAnswers: OMRType = {
  k: null,
  m: null,
  e: null,
};

export const useOMRStore = create<OMRState>((set) => ({
  omr: defaultAnswers,
  setOMR: (answers) => set({ omr: { ...defaultAnswers, ...answers } }),
  reset: () =>
    set({
      omr: defaultAnswers,
    }),
}));
