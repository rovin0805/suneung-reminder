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
import LunchTime from "./_components/LunchTime";
import GradingTime from "./_components/GradingTime";
import TimerBar from "./_components/TimerBar";

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
        window.scrollTo(0, 0);
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
  };

  if (isLunchTime) {
    return <LunchTime />;
  }

  if (isGradingTime) {
    return <GradingTime />;
  }

  const onClickAnswer = (num: ValidAnswerType) => {
    setOMR({
      [currentTime]: num,
    });
  };

  const onHandleImgLoader = ({ src }: { src: string }) => {
    return `/img/exams/${+year + 1}/${src}`;
  };

  return (
    <>
      <TimerBar onClickNext={onClickNext} />
      <ExamContainer>
        <Image
          src={`${+year + 1}_${currentTime}_q.png`}
          loader={onHandleImgLoader}
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
                  src={`${+year + 1}_${currentTime}_a0${num}.png`}
                  loader={onHandleImgLoader}
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

        <p className="font-pretendard500 text-[#666666] leading-[17px] mt-5 text-sm md:text-base">
          이 문제지에 관한 저작권은 한국교육과정평가원에 있습니다.
        </p>

        <div
          className="fixed bottom-[0px] bg-white w-full max-w-md py-3 flex items-center justify-center"
          style={{
            boxShadow: "0px -4px 4px 0px #00000040",
            zIndex: 50, // 다른 요소보다 위에 뜨도록 설정
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
    </>
  );
};

export default ExamPage;
