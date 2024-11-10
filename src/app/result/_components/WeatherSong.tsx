import Image from "next/image";
import Col from "@/components/layout/Col";
import { useExamStore } from "@/stores/exam";

const WeatherSong = () => {
  const year = useExamStore((state) => state.year);

  return (
    <Col spacing={20}>
      <p className="font-pretendard600 text-[20px] leading-[24px]">
        다시 보는 {year! + 1} 이모저모
      </p>
      <Image
        src={`/img/weather_song/weather_${year! + 1}.png`}
        alt="날씨노래"
        width={330}
        height={200}
        priority
      />
    </Col>
  );
};

export default WeatherSong;
