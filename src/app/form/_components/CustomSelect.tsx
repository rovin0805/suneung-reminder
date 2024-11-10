import { useState } from "react";
import Image from "next/image";
import { END_YEAR, START_YEAR, ValidYearType } from "@/types/exam";

// 시작 연도와 끝 연도를 받아서 사이의 연도 배열을 내림차순 반환
const getYearsInRange = (endYear: number, startYear: number) => {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = endYear - i;
    return year.toString();
  });
};

const YEAR_OPTIONS = getYearsInRange(END_YEAR, START_YEAR);

interface CustomSelectProps {
  currentValue: string | null;
  onChange: (value: ValidYearType) => void;
}

const RANDOM = "랜덤";

const CustomSelect = ({ currentValue, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    if (value === RANDOM) {
      // YEAR_OPTIONS에서 랜덤으로 선택
      const randomIndex = Math.floor(Math.random() * YEAR_OPTIONS.length);
      onChange(+YEAR_OPTIONS[randomIndex] as ValidYearType);
    } else {
      onChange(+value as ValidYearType);
    }

    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  return (
    <div className="relative w-[126px]">
      <div
        className={`w-full px-[16px] py-[10px] bg-white rounded-[5px] cursor-pointer focus:outline-none`}
        onClick={handleToggle}
      >
        <p
          className={`${
            currentValue
              ? "font-pretendard500 text-primary-700"
              : "font-pretendard600 text-primary-200"
          }`}
        >
          {currentValue || "응시 연도"}
        </p>

        <div
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src="/svg/arrow_down.svg"
            width={16}
            height={16}
            alt="arrow-down"
            className={`transition-transform duration-300`}
          />
        </div>
      </div>

      {isOpen && (
        <ul className="absolute w-full max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md mt-2 z-10">
          {YEAR_OPTIONS.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-primary-700 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
