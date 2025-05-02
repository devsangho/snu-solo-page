"use client";

import { useState, useEffect, useRef } from "react";

export default function Rainbow() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setVideoLoaded(true);
      };

      const handleEnded = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current
            .play()
            .catch((err) => console.error("Video playback error:", err));
        }
      };

      videoRef.current.addEventListener("ended", handleEnded);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("ended", handleEnded);
        }
      };
    }
  }, []);

  // 스크롤에 따라 그라데이션 효과 변경
  const gradientAngle = 45 + ((scrollY * 0.05) % 360);

  // 마우스 위치에 따른 동적 효과 계산
  const dynamicX = mousePosition.x / 20;
  const dynamicY = mousePosition.y / 20;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-28 lg:py-36 overflow-hidden"
    >
      {/* 비디오 배경 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          src="/firework.MOV"
          style={{
            opacity: videoLoaded ? 0.6 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* 비디오 오버레이 그라데이션 */}
        <div
          className="absolute inset-0 z-1 transition-all duration-1000"
          style={{
            background: `linear-gradient(${gradientAngle}deg, rgba(10, 36, 99, 0.7), rgba(62, 146, 204, 0.6), rgba(123, 201, 80, 0.5), rgba(255, 212, 73, 0.6))`,
            opacity: 0.9,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* 애니메이션 요소들 */}
      <div className="absolute inset-0 z-2 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
              transform: `translate(${dynamicX / (i + 1)}px, ${
                dynamicY / (i + 1)
              }px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
        ))}
      </div>

      {/* 내용 */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-[500px] h-[150px]">
              <img
                src="/snu_solo_logo.png"
                alt="SNU SOLO"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
                  transform: `translate(${dynamicX / 8}px, ${dynamicY / 8}px)`,
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl mb-6 text-white font-light drop-shadow">
            <span className="inline-block transform hover:scale-105 transition-all duration-300">
              Seoul National University Solar Car Team
            </span>
          </h2>

          {/* 스크롤 다운 화살표 */}
          <div className="mt-10 animate-bounce">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto text-white/70"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
