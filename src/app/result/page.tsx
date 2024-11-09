"use client";

import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";
import { useOMRStore } from "@/stores/omr";
import { ANSWERS } from "./_constants/answers";
import { RESULT_DIC } from "./_constants/resultDic";
import ResultCard from "./_components/ResultCard";
import Report from "./_components/Report";
import SharedButton from "@/components/action/SharedButton";
import { share } from "@/utils/share";
import WeatherSong from "./_components/WeatherSong";

const ResultPage = () => {
  const year = useExamStore((state) => state.year);
  const omr = useOMRStore((state) => state.omr);

  if (!year) return null;

  const checkAnswer = () => {
    if (!year) return;

    const selectedYear = (year + "") as keyof typeof ANSWERS;

    if (!ANSWERS[selectedYear]) return;

    const correctAnswers = ANSWERS[selectedYear];
    const userAnswers = [omr.k, omr.m, omr.e];

    let resultKey = "";
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        resultKey += "o"; // 맞으면 "o"
      } else {
        resultKey += "x"; // 틀리면 "x"
      }
    });

    return resultKey;
  };

  const resultInfo = RESULT_DIC[checkAnswer() as keyof typeof RESULT_DIC];

  return (
    <div className="bg-gradient-custom">
      <div className="p-5">
        <ResultCard title={resultInfo?.title} subtitle={resultInfo?.subtitle} />
      </div>
      <Col
        className="p-[30px] pb-[60px] bg-white rounded-t-[10px] w-full"
        spacing={60}
      >
        <Report answerResult={checkAnswer()!} />
        <SharedButton text="공유하기" onClick={share} isColor />
        <WeatherSong />
      </Col>
    </div>
  );
};

export default ResultPage;
