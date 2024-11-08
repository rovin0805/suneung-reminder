"use client";

import { useState } from "react";
import { ValidYearType } from "@/types/exam";
import ColorContainer from "@/components/layout/ColorContainer";
import Row from "@/components/layout/Row";
import CustomSelect from "@/components/action/CustomSelect";
import Col from "@/components/layout/Col";
import SharedButton from "@/components/action/SharedButton";
import { useExamStore } from "@/stores/exam";
import { useStudentStore } from "@/stores/student";

const FormPage = () => {
  const [year, setYear] = useState<ValidYearType | null>(null);
  const [name, setName] = useState<string | null>(null);

  const handleChangeOption = (selectedYear: ValidYearType) => {
    setYear(selectedYear);
  };

  const storeYear = useExamStore((state) => state.setYear);
  const storeName = useStudentStore((state) => state.setName);
  const onClickButton = () => {
    storeYear(year);
    storeName(name!);
  };

  return (
    <ColorContainer className="justify-between">
      <p className="font-tenada text-white text-[40px] leading-[40px] mb-[6px]">
        응시 접수
      </p>

      <Col spacing={30}>
        <Row spacing={10}>
          <CustomSelect
            currentValue={year ? year + "" : year}
            onChange={handleChangeOption}
          />

          <p className="font-pretendard500 text-white text-[20px] leading-[24px]">
            년 11월 수험생
          </p>
        </Row>

        <input
          type="text"
          className="name-input text-primary-700 font-pretendard500 w-[250px] px-[16px] py-[10px] bg-white rounded-[5px] cursor-pointer focus:outline-none"
          placeholder="이름"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </Col>

      <SharedButton
        text="응시하기"
        onClick={onClickButton}
        buttonProps={{
          disabled: !year || !name,
        }}
      />

      <div />
      <div />
      <div />
    </ColorContainer>
  );
};

export default FormPage;
