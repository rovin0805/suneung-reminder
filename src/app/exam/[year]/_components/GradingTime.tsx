import { useEffect, useState } from "react";
import Image from "next/image";
import ColorContainer from "@/components/layout/ColorContainer";
import { useRouter } from "next/navigation";

const GradingTime = () => {
  const [dots, setDots] = useState(".");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/result");
    }, 1000);
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
    }, 200);

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
