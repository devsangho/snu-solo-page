import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNU SOLO - 서울대학교 태양광 자동차 팀",
  description: "Seoul National University Solar Car Team",
  openGraph: {
    title: "SNU SOLO - 서울대학교 태양광 자동차 팀",
    description: "Seoul National University Solar Car Team",
    url: "https://snusolo.com",
    siteName: "SNU SOLO",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SNU SOLO - 서울대학교 태양광 자동차 팀",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SNU SOLO - 서울대학교 태양광 자동차 팀",
    description: "Seoul National University Solar Car Team",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Analytics />
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
