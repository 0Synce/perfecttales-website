"use client";

import { useEffect, useRef } from "react";

function Star({ style }: { style: React.CSSProperties }) {
  return <div className="star" style={style} />;
}

function PhoneMockup() {
  return (
    <div className="phone-mockup animate-float-slow">
      <div className="phone-screen">
        {/* Stars inside phone */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Moon */}
        <div className="absolute top-12 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-secondary-light to-secondary shadow-lg shadow-secondary/40" />
        <div className="absolute top-13 right-7 w-10 h-10 rounded-full bg-[#1e1145]" />

        {/* App UI Mock */}
        <div className="relative z-10 text-center space-y-4 mt-4">
          <div className="text-3xl">📖✨</div>
          <div className="text-white/90 text-sm font-semibold tracking-wide">PerfectTales</div>
          <div className="w-44 mx-auto space-y-2">
            <div className="h-2 bg-white/20 rounded-full" />
            <div className="h-2 bg-white/15 rounded-full w-36 mx-auto" />
            <div className="h-2 bg-white/10 rounded-full w-28 mx-auto" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-[10px]">🐉</div>
                <span className="text-white/70 text-[11px] font-medium">Dragon Adventure</span>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 bg-white/10 rounded-full" />
                <div className="h-1.5 bg-white/10 rounded-full w-4/5" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-[10px]">🦄</div>
                <span className="text-white/70 text-[11px] font-medium">Unicorn Dreams</span>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 bg-white/10 rounded-full" />
                <div className="h-1.5 bg-white/10 rounded-full w-3/5" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-3 text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center text-[10px]">🚀</div>
                <span className="text-white/70 text-[11px] font-medium">Space Journey</span>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 bg-white/10 rounded-full" />
                <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const starsRef = useRef<{ top: string; left: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    if (starsRef.current.length === 0) {
      starsRef.current = [...Array(20)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${2 + Math.random() * 4}s`,
        delay: `${Math.random() * 3}s`,
      }));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1033] via-[#2d1b69] to-[#f5f0ff]" />

      {/* Stars */}
      <div className="absolute inset-0 top-0 h-[70%]">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              ["--duration" as string]: `${2 + Math.random() * 4}s`,
              ["--delay" as string]: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-24 right-[15%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-secondary-light to-secondary opacity-30 blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <span className="text-secondary">✨</span> Personalized Bedtime Stories
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Every Child Deserves a{" "}
              <span className="gradient-text">Magical</span>{" "}
              Bedtime Story
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Create personalized bedtime stories with your child&apos;s name, favorite themes, and beautiful illustrations.
              Powered by AI, made with love.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 animate-pulse-glow"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-muted font-medium">Download on the</div>
                  <div className="text-lg leading-tight">App Store</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-secondary">★</span> Free to try
                </div>
                <span>•</span>
                <div>Ages 3-11</div>
                <span>•</span>
                <div>55 languages</div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg text-white/70 text-xs">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                No data collected
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg text-white/70 text-xs">
                <span>📱</span> iPhone, iPad & Vision Pro
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg text-white/70 text-xs">
                <span>⭐</span> Rated 4+
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fefcfb"/>
        </svg>
      </div>
    </section>
  );
}
