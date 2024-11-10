"use client";

import Image from "next/image";
import DefaultModal, {
  CommonModalProps,
} from "@/components/modal/DefaultModal";
import Col from "@/components/layout/Col";

/**
 * 행운 부적
 */

const CharmModal = ({ isOpen, onOpenChange }: CommonModalProps) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={`언제나처럼${"\n"}행운이 함께하길!`}
      buttonText="뒤로가기"
      onPress={onOpenChange}
    >
      <Col className="mt-[10px] mb-[20px] w-full" spacing={30}>
        <p className="whitespace-pre-line font-pretendard500 leading-[20px] text-center text-[15px]">
          2025년도 수능,{"\n"}멋지게 해낼 수험생 여러분을 응원해요!
        </p>
        <Image
          src="/img/charm.png"
          alt="charm"
          width={160}
          height={200}
          priority
        />
      </Col>
    </DefaultModal>
  );
};

export default CharmModal;
