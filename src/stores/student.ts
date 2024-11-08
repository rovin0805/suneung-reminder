import { create } from "zustand";

interface StudentState {
  name: string;
  setName: (name: string) => void;
  reset: () => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  name: "",
  setName: (name) => set({ name }),
  reset: () => set({ name: "" }),
}));
