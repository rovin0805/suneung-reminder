import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ColorContainer from "@/components/layout/ColorContainer";

const GradingTime = () => {
  const [dots, setDots] = useState(".");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/result");
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === "...") {
          return ".";
        } else if (prevDots === "..") {
          return "...";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContainer className="justify-center">
      <Image
        src="/img/grading.png"
        width={84}
        height={84}
        alt="채점"
        priority
      />
      <p className="text-white text-[20px] font-pretendard600 leading-[24px] mt-5">
        채점 중{dots}
      </p>
    </ColorContainer>
  );
};

export default GradingTime;
