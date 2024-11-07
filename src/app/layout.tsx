import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/layout/appLayout";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "눈 떠보니 수능날? | afterdinnerclub",
  description: "내가 봤던 수능 다시보기!",
  icons: {
    icon: "/svg/character.svg",
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
      </head>
      <body className={`antialiased`}>
        <MantineProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
