"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DefaultModal, {
  CommonModalProps,
} from "@/components/modal/DefaultModal";
import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";
import { HAND_WRITING } from "../_constants/handwriting";
import Row from "@/components/layout/Row";
import { useOMRStore } from "@/stores/omr";

/**
 * 필적 확인란
 */

const HandWritingModal = ({ isOpen, onOpenChange }: CommonModalProps) => {
  const year = useExamStore((state) => state.year);
  const handwriting = HAND_WRITING[(year + "") as keyof typeof HAND_WRITING];
  const [userText, setUserText] = useState("");
  const setCurrentTime = useExamStore((state) => state.setCurrentTime);
  const resetOMR = useOMRStore((state) => state.reset);

  const router = useRouter();
  const goToExam = () => {
    scrollTo(0, 0);
    // 새로 응시할 때는 기존 상태 초기화
    setUserText("");
    setCurrentTime("k");
    resetOMR();
    router.push(`/exam/${year}`);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    let str = text;
    const maxLength = 25;
    if (text.length > maxLength) {
      str = text.substring(0, maxLength);
    }
    setUserText(str);
  };

  return (
    <DefaultModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="필적 확인"
      buttonText="시험 시작"
      onPress={goToExam}
      buttonDisabled={handwriting !== userText.trim()}
      isDismissable={false}
      ExtraButton={
        <button onClick={onOpenChange} className="mt-[10px]">
          <p className="font-pretendard500 text-primary-700 text-[14px] leading-[16px] underline">
            뒤로가기
          </p>
        </button>
      }
    >
      <Col className="my-[40px]" spacing={20}>
        <div className="bg-[#DDDDDD] py-[10px] px-6 text-center border border-solid max-w-md">
          <p className="leading-[16px] font-pretendard500">{handwriting}</p>
        </div>

        <Row className="rounded-[5px] overflow-hidden min-h-[60px] bg-white border border-solid mx-5">
          <div className="bg-[#EEEEEE] px-5 py-[10px] h-full flex-col items-center justify-center w-[30%] border-r border-solid">
            <p
              className={`font-pretendard700 leading-[20px] flex text-sm md:text-base`}
            >
              필<span className="text-transparent">칸</span>적
            </p>
            <p
              className={`font-pretendard700 leading-[20px] text-sm md:text-base`}
            >
              확인란
            </p>
          </div>
          <div className="px-[10px] w-[70%] flex-col self-start relative ">
            <textarea
              value={userText}
              placeholder="입력"
              onChange={handleTextChange}
              className="font-pretendard500 focus:outline-none w-full h-full resize-none leading-[25px] mt-1"
            />

            {/* Dashed line overlay for underline effect */}
            <div className="absolute left-2 w-[90%] h-[1px] bg-dashed border-b border-dashed border-gray-400 top-1/2 pointer-events-none" />
          </div>
        </Row>
      </Col>
    </DefaultModal>
  );
};

export default HandWritingModal;
