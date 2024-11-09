import { create } from "zustand";
import { CurrentTime, ExamSubjectType, ValidYearType } from "@/types/exam";

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
  currentTime: CurrentTime;
  setCurrentTime: (subject: CurrentTime) => void;
  reset: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
  year: null,
  setYear: (year) => set({ year }),
  currentTime: "k",
  setCurrentTime: (subject) => set({ currentTime: subject }),
  reset: () => set({ year: null, currentTime: "k" }),
}));
