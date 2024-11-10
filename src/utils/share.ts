import { WEBSITE_URL } from "@/constants";

export const share = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "눈 떠보니 수능날? | afterdinnerclub",
        text: "내가 봤던 수능 다시 보기!",
        url: WEBSITE_URL,
      });
    } catch {
      await navigator.clipboard.writeText(WEBSITE_URL);
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(WEBSITE_URL);
    } catch {
      alert(
        "이런! 공유하는 중 문제가 발생했어요. 수동으로 URL을 복사해주세요."
      );
    }
  } else {
    alert("이런! 공유하는 중 문제가 발생했어요. 수동으로 URL을 복사해주세요.");
  }
};
