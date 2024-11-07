import { PropsWithChildren } from "react";
import Header from "./Header";

const HEADER_HEIGHT = 83;

const LayoutWrapper = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* 모바일처럼 보이게 하는 최대 너비 설정 */}
      <div className="w-full min-h-screen max-w-md bg-white shadow-md border overflow-hidden">
        <Header />

        {/* 스크롤 가능한 콘텐츠 영역 */}
        <main className="flex-1 overflow-y-auto p-5">{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
