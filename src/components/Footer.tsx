import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="font-bold text-lg text-primary-light">
                PerfectTales
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Personalized AI bedtime stories for children aged 3-11.
              Create magical, illustrated tales with your child as the hero.
            </p>
            <a
              href="https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store →
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#themes" className="hover:text-white transition-colors">Themes & Art Styles</a></li>

              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Story Themes */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Story Themes
            </h3>
            <ul className="space-y-3 text-sm">
              <li>🐾 Friendly Animals</li>
              <li>🐉 Dragons</li>
              <li>🚀 Space Adventures</li>
              <li>🦄 Unicorns</li>
              <li>🌊 Ocean Adventures</li>
              <li>🤖 Robots</li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guides/best-bedtime-story-apps-2026" className="hover:text-white transition-colors">
                  Best Story Apps Guide
                </Link>
              </li>
              <li>
                <Link href="/compare/perfecttales-vs-books" className="hover:text-white transition-colors">
                  PerfectTales vs. Books
                </Link>
              </li>
              <li>
                <Link href="/brand-facts" className="hover:text-white transition-colors">
                  Brand Facts
                </Link>
              </li>
              <li>
                <a href="https://thinkthefuture.notion.site/Privacy-policy-2edd8a57f3ef80a184c6fdcb53ceb529" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://thinkthefuture.notion.site/Terms-of-Service-2edd8a57f3ef8054b221ff9a1599026b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li className="text-xs mt-4 text-white/40">
                Developer: Simon Majar
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} PerfectTales. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with ❤️ for families everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
