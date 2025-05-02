"use client";

import { useState, useEffect, useRef } from "react";

export default function FireworkHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force load the video
    const loadVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.load();
          videoRef.current
            .play()
            .catch((err) => console.error("Initial play error:", err));
          setVideoLoaded(true);
        }
      } catch (error) {
        console.error("Error loading video:", error);
      }
    };

    loadVideo();

    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((err) => console.error("Video playback error:", err));
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleEnded);

      return () => {
        videoRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-team');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          controls={false}
          preload="auto"
          src="/videos/firework.mp4"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* Video overlay gradient */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-[500px] h-[150px]">
              <img
                src="/snu_solo_logo.png"
                alt="SNU SOLO"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </div>

          {/* Scroll down arrow */}
          <div className="mt-10 animate-bounce cursor-pointer" onClick={scrollToAbout}>
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
            <p className="text-white/70 text-sm mt-2">About Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
