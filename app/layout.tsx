import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import "./globals.css";

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
        <div className="wrap">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
