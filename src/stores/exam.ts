import { create } from "zustand";
import { ExamSubjectType, ValidYearType } from "@/types/exam";

/**
 * 현재 시험 교시 정보
 * 1. 국어 : k
 * 2. 수학 : m
 * 3. 점심시간
 * 4. 영어 : e
 * 5. 채점
 */

export interface ExamState {
  year: ValidYearType | null;
  setYear: (year: ValidYearType | null) => void;
  currentSubject: ExamSubjectType;
  setCurrentSubject: (subject: ExamSubjectType) => void;
  reset: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
  year: null,
  setYear: (year) => set({ year }),
  currentSubject: "k",
  setCurrentSubject: (subject) => set({ currentSubject: subject }),
  reset: () => set({ year: null, currentSubject: "k" }),
}));
