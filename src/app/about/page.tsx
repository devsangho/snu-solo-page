import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Team - 서울대학교 SNU SOLO",
  description: "서울대학교 솔라카 팀 SNU SOLO의 팀 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <About />
      </main>
    </div>
  );
} 