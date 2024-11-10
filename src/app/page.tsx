"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ColorContainer from "@/components/layout/ColorContainer";
import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";
import { useOMRStore } from "@/stores/omr";
import { useStudentStore } from "@/stores/student";

// TODO: 응시자 수 GET api binding

export default function HomePage() {
  const resetExam = useExamStore((state) => state.reset);
  const resetORM = useOMRStore((state) => state.reset);
  const resetStudent = useStudentStore((state) => state.reset);

  const resetAllStores = () => {
    resetExam();
    resetORM();
    resetStudent();
  };

  useEffect(() => {
    resetAllStores();
  }, []);

  const router = useRouter();
  const goToFormScreen = () => {
    router.push("/form");
  };

  return (
    <ColorContainer className="cursor-pointer" onClick={goToFormScreen}>
      <Col className="mb-[50px]">
        <Col className="mb-[40px]">
          <p className="font-tenada text-white text-[40px] leading-[40px] mb-[6px]">
            눈 떠보니 수능날?
          </p>
          <p className="font-pretendard600 text-white text-[20px] leading-[24px]">
            내가 봤던 수능 다시 보기
          </p>
        </Col>

        <Image
          src="/img/landing.png"
          width={270}
          height={300}
          alt="수능날"
          priority
        />
        <p className="text-white font-pretendard500 mt-[10px]">
          응시자 수 {(7777).toLocaleString()}명
        </p>
      </Col>

      <Col>
        <Image
          src="/svg/click.svg"
          width={32}
          height={32}
          alt="click"
          priority
        />
        <p className="text-white mt-[10px] font-pretendard500">
          화면을 터치해서 이동
        </p>
      </Col>
    </ColorContainer>
  );
}
