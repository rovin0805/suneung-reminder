import { useState, useEffect } from "react";
import { useExamStore } from "@/stores/exam";
import { useOMRStore } from "@/stores/omr";
import { ExamSubjectType } from "@/types/exam";
import TimerBUbbleMsg from "./TimerBubbleMsg";
import useDynamicTop from "../_hooks/useDynamicTop";

const LIMIT_SECONDS = 90;

const CHECK_POINT1 = 20;
const CHECK_POINT2 = 10;

const MSG1 = "시간이 얼마 안 남았어요!";
const MSG2 = "얼른 찍으세요!";

interface TimerBarProps {
  onClickNext: () => void;
}

const TimerBar = ({ onClickNext }: TimerBarProps) => {
  const currentTime = useExamStore((state) => state.currentTime);
  const setOMR = useOMRStore((state) => state.setOMR);

  const [timeLeft, setTimeLeft] = useState(LIMIT_SECONDS);
  const [message, setMessage] = useState("");

  // 시간 감소
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000); // 1초마다 감소
      return () => clearInterval(timer); // 컴포넌트가 unmount 될 때 인터벌 제거
    } else if (timeLeft === 0) {
      setTimeLeft(LIMIT_SECONDS);
      // 시간 종료 시, 오답 처리하고 다음 교시로 이동
      setOMR({
        [currentTime as ExamSubjectType]: null,
      });
      onClickNext();
    }
  }, [timeLeft]);

  // 말풍선 메시지
  useEffect(() => {
    if (timeLeft <= CHECK_POINT1 && timeLeft > CHECK_POINT2) {
      setMessage(MSG1);
    } else if (timeLeft <= CHECK_POINT2 && timeLeft > 5) {
      setMessage(MSG2);
    } else {
      setMessage("");
    }
  }, [timeLeft]);

  const dynamicTop = useDynamicTop();
  const containerStyle = {
    background:
      timeLeft > CHECK_POINT1
        ? "linear-gradient(90deg, #de8b46 0%, rgba(123, 81, 207, 0) 100%)"
        : "linear-gradient(90deg, #D65A3C 0%, rgba(214, 90, 60, 0) 100%)",
  };
  const progressBarStyle = {
    width: `${((LIMIT_SECONDS - timeLeft) / LIMIT_SECONDS) * 100}%`,
    background: timeLeft > CHECK_POINT1 ? "#de8b46" : "#D65A3C",
  };
  const bubblePosition = {
    left: `calc(${((LIMIT_SECONDS - timeLeft) / LIMIT_SECONDS) * 100}% - ${
      message === MSG1 ? 123 : 76
    }px)`,
  };

  return (
    <div
      className={`w-full max-w-md h-[10px] fixed`}
      style={{
        top: `${dynamicTop}px`, // 동적으로 계산된 top 값 적용
        ...containerStyle,
      }}
    >
      {/* 프로그레스 바 */}
      <div className="h-full" style={progressBarStyle}></div>

      {/* 말풍선 */}
      {message && (
        <TimerBUbbleMsg message={message} bubblePosition={bubblePosition} />
      )}
    </div>
  );
};

export default TimerBar;
