import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";
import { useStudentStore } from "@/stores/student";

interface ReportProps {
  answerResult: string;
}

const Report = ({ answerResult }: ReportProps) => {
  const year = useExamStore((state) => state.year);
  const name = useStudentStore((state) => state.name);
  const levels = answerResult?.split(""); // 예: ["x", "o", "o"]
  const subjects = ["국어", "수학", "영어"];

  return (
    <Col spacing={10} className="">
      <p className="font-pretendard600 text-[20px] leading-[24px]">
        다시 보는 {year! + 1} 수능 성적표
      </p>

      {/* table */}
      <div className={`w-[330px] border border-solid`}>
        {/* 수험번호 / 성명 */}
        <div className="flex border-b border-solid bg-[#eeeeee]">
          <div className="w-1/2 p-3 font-pretendard500 leading-[24px] text-center border-r border-solid">
            수험번호
          </div>
          <div className="w-1/2 p-3 font-pretendard500 leading-[24px] text-center">
            성 명
          </div>
        </div>
        <div className="flex border-b border-solid">
          <div className="w-1/2 p-3 text-center bg-[#eeeeee] font-pretendard500 leading-[24px] border-r border-solid">
            20241114
          </div>
          <div className="w-1/2 p-3 text-center font-pretendard500 leading-[24px]">
            {name}
          </div>
        </div>

        {/* 구분 / 과목 */}
        <div className="flex border-b border-solid">
          <div className="w-1/4 p-3 text-center bg-[#eeeeee] font-pretendard500 leading-[24px] border-r border-solid">
            구분
          </div>
          {subjects?.map((subject, index) => (
            <div
              key={subject}
              className={`w-1/4 p-3 text-center font-pretendard500 leading-[24px] ${
                index !== subjects.length - 1 ? "border-r border-solid" : ""
              }`}
            >
              {subject}
            </div>
          ))}
        </div>

        {/* 등급 */}
        <div className="flex">
          <div className="w-1/4 p-3 text-center bg-[#eeeeee] font-pretendard500 leading-[24px] border-r border-solid">
            등급
          </div>
          {levels?.map((level, index) => (
            <div
              key={index}
              className={`w-1/4 p-3 text-center font-pretendard500 leading-[24px] ${
                index !== levels.length - 1 ? "border-r border-solid" : ""
              }`}
            >
              {level.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default Report;
