export const FULL_WIDTH = typeof window !== "undefined" ? window.innerWidth : 0;

export const adjustFontSize = () => {
  if (FULL_WIDTH < 500) {
    return 12; // 작은 화면일 때 폰트 크기 조정
  } else if (FULL_WIDTH < 768) {
    return 14; // 중간 화면일 때 폰트 크기 조정
  } else {
    return 16; // 큰 화면일 때 기본 폰트 크기
  }
};
