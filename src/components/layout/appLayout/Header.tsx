"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActionIcon } from "@mantine/core";

const INSTA_URL =
  "https://www.instagram.com/afterdinnerclub.kr?igsh=bzc4dDVwdXVldDdo";

const Header = () => {
  const openInsta = () => window.open(INSTA_URL, "_blank");

  const router = useRouter();
  const goToLanding = () => {
    router.push("/");
  };

  const share = async () => {
    if (navigator.share) {
      // TODO: og tag
      await navigator.share({
        title: "AFTERDINNERCLUB",
        text: "내가 봤던 수능 다시보기!",
        url: window.location.href,
      });
    }
  };

  return (
    <header className="w-full bg-black pt-5">
      <div className="p-5 w-full flex justify-between">
        <ActionIcon onClick={openInsta}>
          <Image
            src="/svg/insta.svg"
            alt="insta"
            width={24}
            height={24}
            priority
          />
        </ActionIcon>

        <ActionIcon onClick={goToLanding}>
          <Image
            src="/svg/logo.svg"
            width={200}
            height={25}
            alt="logo"
            priority
          />
        </ActionIcon>

        <ActionIcon onClick={share}>
          <Image
            src="/svg/share.svg"
            alt="share"
            width={24}
            height={24}
            priority
          />
        </ActionIcon>
      </div>
    </header>
  );
};

export default Header;
