import { useEffect, useState } from "react";
import Image from "next/image";
import ColorContainer from "@/components/layout/ColorContainer";
import { useExamStore } from "@/stores/exam";
import Col from "@/components/layout/Col";

const MAX_CLICK_COUNT = 3;

const LunchTime = () => {
  const setCurrentTime = useExamStore((state) => state.setCurrentTime);
  const [clickCount, setClickCount] = useState(1);

  useEffect(() => {
    if (clickCount === MAX_CLICK_COUNT) {
      setTimeout(() => {
        setCurrentTime("e");
      }, 1000);
    }
  }, [clickCount]);

  const onClickLunchBox = () =>
    setClickCount((prev) => {
      if (prev >= MAX_CLICK_COUNT) {
        return MAX_CLICK_COUNT;
      }
      return prev + 1;
    });

  return (
    <ColorContainer className="justify-between">
      <p className="font-tenada text-[30px] text-white">점심 시간</p>

      <Col>
        <Image
          src="/svg/lunch_msg.svg"
          alt="말풍선"
          width={166}
          height={64}
          priority
        />
        <button onClick={onClickLunchBox}>
          <Image
            src={`/img/lunch/lunch_${clickCount}.png`}
            alt="도시락"
            width={220}
            height={220}
            priority
          />
        </button>
      </Col>

      <div />
      <div />
    </ColorContainer>
  );
};

export default LunchTime;
