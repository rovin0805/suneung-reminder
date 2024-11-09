import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutWrapper from "@/app/_components/LayoutWrapper";

export const metadata: Metadata = {
  title: "눈 떠보니 수능날? | afterdinnerclub",
  description: "내가 봤던 수능 다시보기!",
  icons: {
    icon: "/svg/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>눈 떠보니 수능날?</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/reset-css@4.0.1/reset.min.css"
        />
      </head>
      <body className={`antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
