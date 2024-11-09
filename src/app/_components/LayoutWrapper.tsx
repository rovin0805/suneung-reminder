"use client";

import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header";

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        {/* 모바일처럼 보이게 하는 최대 너비 설정 */}
        <div className="w-full min-h-screen max-w-md bg-white shadow-md border overflow-hidden">
          <Header />

          {/* 스크롤 가능한 콘텐츠 영역 */}
          <main className="overflow-y-auto">{children}</main>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default LayoutWrapper;
