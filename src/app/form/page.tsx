"use client";

import { useState } from "react";
import { useDisclosure } from "@nextui-org/modal";
import { END_YEAR, ValidYearType } from "@/types/exam";
import ColorContainer from "@/components/layout/ColorContainer";
import Row from "@/components/layout/Row";
import CustomSelect from "@/app/form/_components/CustomSelect";
import Col from "@/components/layout/Col";
import SharedButton from "@/components/action/SharedButton";
import { useExamStore } from "@/stores/exam";
import { useStudentStore } from "@/stores/student";
import HandWritingModal from "./_components/HandwritingModal";
import CharmModal from "./_components/CharmModal";

const FormPage = () => {
  const {
    isOpen: isHandwritingModalOpen,
    onOpen: onOpenHandwritingModal,
    onOpenChange: onOpenHandwritingModalChange,
  } = useDisclosure();
  const {
    isOpen: isCharmModalOpen,
    onOpen: onOpenCharmModal,
    onOpenChange: onOpenCharmModalChange,
  } = useDisclosure();

  const storeYear = useExamStore((state) => state.setYear);
  const storeName = useStudentStore((state) => state.setName);

  const [year, setYear] = useState<ValidYearType | null>(null);
  const [name, setName] = useState<string | null>(null);

  const handleChangeOption = (selectedYear: ValidYearType) => {
    setYear(selectedYear);
  };

  const onClickButton = () => {
    storeYear(year);
    storeName(name!);
    if (year === END_YEAR) {
      onOpenCharmModal();
    } else {
      onOpenHandwritingModal();
    }
  };

  return (
    <>
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

      <HandWritingModal
        isOpen={isHandwritingModalOpen}
        onOpenChange={onOpenHandwritingModalChange}
      />
      <CharmModal
        isOpen={isCharmModalOpen}
        onOpenChange={onOpenCharmModalChange}
      />
    </>
  );
};

export default FormPage;
