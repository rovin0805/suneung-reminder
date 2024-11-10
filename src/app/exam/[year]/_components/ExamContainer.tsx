import { PropsWithChildren } from "react";
import { HEADER_HEIGHT } from "@/styles/scale";
import Col from "@/components/layout/Col";

const ExamContainer = ({ children }: PropsWithChildren) => {
  return (
    <Col
      className={`bg-white px-5 pt-[50px] pb-[100px]`}
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {children}
    </Col>
  );
};

export default ExamContainer;
