import { PropsWithChildren } from "react";

const HEADER_HEIGHT = 86;

interface ColorContainerProps {
  className?: string; // className을 props로 받기 위한 설정
  onClick?: () => void;
}

const ColorContainer = ({
  children,
  className,
  onClick = () => {},
}: PropsWithChildren<ColorContainerProps>) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-custom p-5 pt-[80px] flex flex-col items-center ${className}`}
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {children}
    </div>
  );
};

export default ColorContainer;
