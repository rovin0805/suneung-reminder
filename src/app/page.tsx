"use client";

import ColorContainer from "@/components/layout/ColorContainer";
import Image from "next/image";

// TODO: 응시자 수 api binding

export default function Home() {
  const goToNextPage = () => {};

  return (
    <ColorContainer className="justify-between" onClick={goToNextPage}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-[40px]">
          <p className="font-tenada text-white text-[40px] leading-[40px] mb-[6px]">
            눈 떠보니 수능날?
          </p>
          <p className="font-pretendard600 text-white text-[20px] leading-[24px]">
            내가 봤던 수능 다시보기
          </p>
        </div>

        <Image
          src="/img/main.png"
          width={270}
          height={300}
          alt="수능날"
          priority
        />
        <p className="text-white font-pretendard500 mt-[10px]">
          응시자 수 {(7777).toLocaleString()}명
        </p>
      </div>

      <div className="flex flex-col items-center mb-[30%]">
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
      </div>
    </ColorContainer>
  );
}
