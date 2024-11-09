import { HEADER_HEIGHT } from "@/styles/scale";
import { PropsWithChildren } from "react";

const ExamContainer = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`bg-white px-5 pt-[40px] pb-[100px] flex flex-col items-center`}
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {children}
    </div>
  );
};

export default ExamContainer;
