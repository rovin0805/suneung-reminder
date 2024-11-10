export const share = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "눈 떠보니 수능날? | afterdinnerclub",
      text: "내가 봤던 수능 다시 보기!",
      url: window.location.href,
    });
  }
};
