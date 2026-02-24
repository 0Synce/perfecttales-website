export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1033] via-[#2d1b69] to-[#1a1033]" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl sm:text-6xl mb-6">📖✨</div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Make Bedtime the Best
          <br />
          Part of the Day
        </h2>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of families creating magical, personalized bedtime stories.
          Free to download — start your child&apos;s adventure tonight.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-muted font-medium">
                Download on the
              </div>
              <div className="text-lg leading-tight">App Store</div>
            </div>
          </a>

          <span className="text-white/40 text-sm">Free • No account required</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 justify-center mt-10 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Zero data collection
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span> iPhone, iPad, Mac & Vision Pro
          </div>
          <div className="flex items-center gap-2">
            <span>🌍</span> 55 languages
          </div>
          <div className="flex items-center gap-2">
            <span>👶</span> Ages 3-11
          </div>
        </div>
      </div>
    </section>
  );
}
