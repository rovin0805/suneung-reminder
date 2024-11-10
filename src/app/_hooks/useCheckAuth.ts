"use client";

/**
 * 시험 ~ 결과 페이지에서
 * form 값(학생 정보)을 입력했는지 확인
 * 없으면 랜딩 페이지로 이동
 */

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useStudentStore } from "@/stores/student";

const useCheckAuth = () => {
  const router = useRouter();
  const path = usePathname();
  const studentInfo = useStudentStore((state) => state.name);

  useEffect(() => {
    const isHome = path === "/";
    const isForm = path === "/form";

    if (!(isHome && isForm) && !studentInfo) {
      router.push("/");
    }
  }, []);
};

export default useCheckAuth;
