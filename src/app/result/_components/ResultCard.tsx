import Image from "next/image";
import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";

interface ResultCardProps {
  title: string;
  subtitle: string;
}

const ResultCard = ({ title, subtitle }: ResultCardProps) => {
  const year = useExamStore((state) => state.year);

  const getImgSrc = () => {
    if (!title) return "";
    const pureTitle = title.replace(/[^가-힣]/g, ""); // 한글 이외의 문자 삭제
    return `/img/character/${pureTitle}.png`;
  };

  return (
    <Col className="rounded-[10px] py-[30px] bg-white w-full" spacing={10}>
      <p className="font-pretendard500 text-primary-700 text-[20px] leading-[24px] mb-5">
        {year! + 1}년도 수능 결과로 본 당신은
      </p>
      <p className="font-tenada text-[50px] leading-[50px] text-primary-700">
        {title}
      </p>
      <Image src={getImgSrc()} alt={title} width={200} height={200} priority />
      <p className="font-pretendard500 leading-5 whitespace-pre-line text-primary-700 text-center">
        {subtitle}
      </p>
    </Col>
  );
};

export default ResultCard;
