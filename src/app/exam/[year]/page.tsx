"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useShallow } from "zustand/shallow";
import ExamContainer from "./_components/ExamContainer";
import { useExamStore } from "@/stores/exam";
import Col from "@/components/layout/Col";
import { useOMRStore } from "@/stores/omr";
import { ValidAnswerType } from "@/types/exam";
import SharedButton from "@/components/action/SharedButton";
import { FULL_WIDTH } from "@/styles/scale";

/**
 * 문제 이미지 이름 형식 : {year+1}/{year+1}_{k | m | e}_q
 * 오지선다 이미지 이름 형식 : {year+1}/{year+1}_{k | m | e}_a0{1 | 2 | 3| 4 | 5}
 */

const ExamPage = () => {
  const { year } = useParams<{ year: string }>();
  const { omr, setOMR } = useOMRStore(
    useShallow((state) => ({ omr: state.omr, setOMR: state.setOMR }))
  );
  const { currentTime, setCurrentTime } = useExamStore(
    useShallow((state) => ({
      currentTime: state.currentTime,
      setCurrentTime: state.setCurrentTime,
    }))
  );
  const isLunchTime = currentTime === "lunch";
  const isGradingTime = currentTime === "grading";

  const onClickNext = () => {
    switch (currentTime) {
      case "k":
        setCurrentTime("m");
        break;
      case "m":
        setCurrentTime("lunch");
        break;
      case "e":
        setCurrentTime("grading");
        break;
      case "lunch":
      case "grading":
        break;
      default:
        setCurrentTime("k");
        break;
    }
    setTimeout(() => {
      window.scrollTo(0, 0), 100;
    });
  };

  if (isLunchTime) {
    return <></>;
  }

  if (isGradingTime) {
    return <></>;
  }

  const onClickAnswer = (num: ValidAnswerType) => {
    setOMR({
      [currentTime]: num,
    });
  };

  return (
    <ExamContainer>
      <Image
        src={`/img/exams/${+year + 1}/${+year + 1}_${currentTime}_q.png`}
        alt="exam"
        width={FULL_WIDTH - 40}
        height={400}
        priority
      />

      <Col spacing={10} className="my-[30px]">
        {[1, 2, 3, 4, 5].map((num) => {
          const isSelected = omr[currentTime] === num;

          return (
            <button
              key={currentTime + num}
              className="rounded-xl overflow-hidden"
              onClick={() => onClickAnswer(num as ValidAnswerType)}
            >
              <Image
                src={`/img/exams/${+year + 1}/${
                  +year + 1
                }_${currentTime}_a0${num}.png`}
                alt={`answer${num}`}
                width={FULL_WIDTH - 40}
                height={800}
                priority
                style={{ backgroundColor: isSelected ? "#cccccc" : "" }}
              />
            </button>
          );
        })}
      </Col>

      <Image
        src={`/img/page_n/page_${
          currentTime === "k" ? 1 : currentTime === "m" ? 2 : 3
        }.png`}
        alt="page"
        width={58}
        height={25}
        priority
      />

      <div
        className={`absolute bottom-0 bg-white w-full max-w-md py-5 flex items-center justify-center`}
        style={{
          boxShadow: "0px -4px 4px 0px #00000040",
        }}
      >
        <SharedButton
          text={currentTime === "e" ? "제출하기" : "다음 교시"}
          isColor
          buttonProps={{
            disabled: !omr[currentTime],
          }}
          onClick={onClickNext}
        />
      </div>
    </ExamContainer>
  );
};

export default ExamPage;
