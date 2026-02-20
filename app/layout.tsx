import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroGate from "@/components/IntroGate";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Front-end developer portfolio",
  description: "Front-end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable} ${roboto.variable} antialiased`}>
        <IntroGate>
          <Header />
          <div className="w-[91%] max-w-[1560px] min-h-[100vh] m-[0_auto]">
              {children}
          </div>
          <Footer />
        </IntroGate>
      </body>
    </html>
  );
}
