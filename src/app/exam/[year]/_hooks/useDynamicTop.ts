/**
 * 시험지 타이머 플로팅
 * 동적으로 변경되는 top 값
 */

import { HEADER_HEIGHT } from "@/styles/scale";
import { useEffect, useState } from "react";

const useDynamicTop = () => {
  const [scrollY, setScrollY] = useState(0); // 스크롤 Y값 상태 관리

  useEffect(() => {
    const handleScroll = () => {
      // requestAnimationFrame을 사용하여 스크롤 이벤트가 빠르게 처리될 때 부드럽게 변경되도록 함
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가
    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  const dynamicTop = scrollY < HEADER_HEIGHT ? HEADER_HEIGHT - scrollY - 2 : 0;

  return dynamicTop;
};

export default useDynamicTop;
