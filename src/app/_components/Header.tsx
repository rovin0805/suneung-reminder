"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { share } from "@/utils/share";

const INSTA_URL =
  "https://www.instagram.com/afterdinnerclub.kr?igsh=bzc4dDVwdXVldDdo";

const Header = () => {
  const openInsta = () => window.open(INSTA_URL, "_blank");

  const router = useRouter();
  const goToLanding = () => {
    router.push("/");
  };

  return (
    <header className="w-full bg-black pt-5">
      <div className="p-5 w-full flex justify-between">
        <button onClick={openInsta}>
          <Image
            src="/svg/insta.svg"
            alt="insta"
            width={24}
            height={24}
            priority
          />
        </button>

        <button onClick={goToLanding}>
          <Image
            src="/svg/logo.svg"
            width={200}
            height={25}
            alt="logo"
            priority
          />
        </button>

        <button onClick={share}>
          <Image
            src="/svg/share.svg"
            alt="share"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
