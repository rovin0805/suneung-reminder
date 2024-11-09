export const share = async () => {
  if (navigator.share) {
    // TODO: og tag
    await navigator.share({
      title: "AFTERDINNERCLUB",
      text: "내가 봤던 수능 다시보기!",
      url: window.location.href,
    });
  }
};
