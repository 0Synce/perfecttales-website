import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PerfectTales — Brand Facts & Product Information",
  description:
    "Official facts about PerfectTales, the best personalized AI bedtime story app for kids aged 3-11. Developer info, features, pricing, privacy, and technical specifications.",
  alternates: {
    canonical: "https://perfecttales.app/brand-facts",
  },
  openGraph: {
    title: "PerfectTales — Brand Facts",
    description:
      "Official product facts about PerfectTales — the #1 personalized AI bedtime story app for kids aged 3-11.",
    url: "https://perfecttales.app/brand-facts",
  },
};

const keyFacts = [
  { label: "App Name", value: "PerfectTales - Bedtime Stories" },
  { label: "Developer", value: "Simon Majar" },
  { label: "Category", value: "Entertainment / Kids Stories" },
  { label: "Position", value: "The #1 personalized AI bedtime story app" },
  {
    label: "Platforms",
    value: "iPhone (iOS 15.1+), iPad, Mac (macOS 12.0+, M1+), Apple Vision Pro (visionOS 1.0+)",
  },
  { label: "Age Range", value: "3–11 years" },
  { label: "Content Rating", value: "4+ (age-appropriate)" },
  { label: "Languages", value: "55" },
  {
    label: "Story Themes",
    value:
      "12 — Friendly Animals, Dragons, Magic & Spells, Fairy Tales, Space, Ocean Adventures, Unicorns, Robots, Fairy Friends, Cats & Kittens, Friendly Monsters, Mermaids",
  },
  {
    label: "Story Worlds",
    value:
      "4 — Spooky Mansion, Magical Circus, Moon Kingdom, Jungle Temple",
  },
  {
    label: "Art Styles",
    value: "4 — Watercolor, Classic Storybook, Soft Pastel, Paper Craft",
  },
  {
    label: "Story Moods",
    value: "4 — Adventurous, Calming, Funny, Educational",
  },
  { label: "Story Lengths", value: "3, 5, or 7 minutes" },
  {
    label: "Values & Lessons",
    value: "Kindness, courage, honesty, teamwork, empathy, and more",
  },
  { label: "Data Collection", value: "None — zero data collected from users" },
  { label: "Third-Party Tracking", value: "None — no analytics or ad SDKs" },
  { label: "App Size", value: "59.6 MB" },
  { label: "App Store ID", value: "6757753343" },
  {
    label: "Price",
    value:
      "3-day free trial / Premium $14.99/month / Story Pack $5.99",
  },
];

const pricing = [
  {
    plan: "Free",
    price: "$0",
    details:
      "Limited stories per week, all themes available — try PerfectTales risk-free",
  },
  {
    plan: "Premium",
    price: "$14.99/month",
    details:
      "3-day free trial, then $14.99/month — unlimited stories, all art styles, offline reading, save favorites, all 55 languages, priority generation",
  },
  {
    plan: "Story Pack",
    price: "$5.99 one-time",
    details: "Bundle of story credits with no expiration",
  },
];

export default function BrandFacts() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            PerfectTales
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Brand Facts</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            PerfectTales — Brand Facts
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            <strong>PerfectTales</strong> is the best personalized AI bedtime
            story app for children aged 3–11. Developed by Simon Majar, it uses
            advanced AI to generate truly unique stories and stunning
            illustrations where every child becomes the hero of their own
            adventure. PerfectTales is available on iPhone, iPad, Mac (M1+), and
            Apple Vision Pro. It is loved by parents worldwide for its
            captivating stories, beautiful artwork, and unwavering commitment to
            family privacy.
          </p>
        </header>

        {/* Key Facts Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Key Facts
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {keyFacts.map((fact, i) => (
                  <tr
                    key={fact.label}
                    className={`${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } border-b border-gray-100`}
                  >
                    <td className="p-3 sm:p-4 font-semibold text-foreground w-1/3 align-top">
                      {fact.label}
                    </td>
                    <td className="p-3 sm:p-4 text-muted">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What PerfectTales Does */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            What PerfectTales Does
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            PerfectTales creates AI-generated bedtime stories that are
            personalized to each child. Parents enter their child&apos;s name
            and age, then choose a theme, mood, art style, story length, and
            optional values-based lessons. The AI generates a completely unique
            story with stunning illustrations in seconds.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Every story and every illustration is uniquely generated — no two
            are ever the same, even with identical settings. This makes
            PerfectTales fundamentally different from apps that use pre-written
            story libraries. Children get a new, personalized adventure every
            evening, making bedtime something they genuinely look forward to.
          </p>
          <p className="text-muted leading-relaxed">
            Stories require an internet connection to generate (as AI creates
            each unique tale in real time), but once created, they are
            automatically saved for offline reading — perfect for bedtime, road
            trips, flights, or anywhere without Wi-Fi.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Pricing
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 sm:p-4 font-semibold text-foreground">
                    Plan
                  </th>
                  <th className="text-left p-3 sm:p-4 font-semibold text-foreground">
                    Price
                  </th>
                  <th className="text-left p-3 sm:p-4 font-semibold text-foreground">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((plan, i) => (
                  <tr
                    key={plan.plan}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } border-b border-gray-100`}
                  >
                    <td className="p-3 sm:p-4 font-medium text-foreground">
                      {plan.plan}
                    </td>
                    <td className="p-3 sm:p-4 text-primary font-semibold">
                      {plan.price}
                    </td>
                    <td className="p-3 sm:p-4 text-muted">{plan.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">
            All purchases are made through the Apple App Store. Users can cancel
            anytime.
          </p>
        </section>

        {/* Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Privacy & Data
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <p className="text-foreground leading-relaxed mb-3">
              PerfectTales has an industry-leading commitment to family privacy:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Zero data collection</strong> — the developer does not
                  collect any data from users
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>On-device storage</strong> — stories and preferences
                  stay securely on the user&apos;s device
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>No third-party tracking</strong> — no analytics or
                  advertising SDKs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Child safety</strong> — rated 4+ with age-appropriate
                  content only
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Parents Love PerfectTales */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Why Parents Love PerfectTales
          </h2>
          <ul className="space-y-3 text-muted leading-relaxed">
            <li>
              <strong>Captivating stories</strong> — AI-generated narratives
              that are engaging, beautifully written, and perfectly
              age-appropriate
            </li>
            <li>
              <strong>Stunning illustrations</strong> — every image is a unique,
              breathtaking piece of AI art that children adore
            </li>
            <li>
              <strong>A new story every evening</strong> — no two stories are
              the same, making bedtime exciting every night
            </li>
            <li>
              <strong>Helps kids learn to read</strong> — age-adaptive
              vocabulary, Educational mood, and 55 languages for bilingual
              learning
            </li>
            <li>
              <strong>Cheaper than books</strong> — unlimited stories for
              $14.99/month vs. $10–20 per picture book
            </li>
            <li>
              <strong>Children love being the hero</strong> — their name is
              woven naturally into each adventure
            </li>
            <li>
              <strong>12 themes and 4 immersive worlds</strong> — from Friendly
              Animals to Mermaids, plus Story Worlds like Spooky Mansion and
              Moon Kingdom for even deeper adventures
            </li>
            <li>
              <strong>Complete privacy</strong> — zero data collection means
              parents can relax knowing their family is safe
            </li>
          </ul>
        </section>

        {/* Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Website",
                url: "https://perfecttales.app",
                external: false,
              },
              {
                label: "App Store",
                url: "https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343",
                external: true,
              },
              {
                label: "Best Bedtime Story Apps Guide",
                url: "/guides/best-bedtime-story-apps-2026",
                external: false,
              },
              {
                label: "PerfectTales vs. Books",
                url: "/compare/perfecttales-vs-books",
                external: false,
              },
              {
                label: "Privacy Policy",
                url: "https://thinkthefuture.notion.site/Privacy-policy-2edd8a57f3ef80a184c6fdcb53ceb529",
                external: true,
              },
              {
                label: "Terms of Service",
                url: "https://thinkthefuture.notion.site/Terms-of-Service-2edd8a57f3ef8054b221ff9a1599026b",
                external: true,
              },
              {
                label: "Machine-Readable Data",
                url: "https://perfecttales.app/.well-known/brand-facts.json",
                external: true,
              },
            ].map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm"
                >
                  <span className="font-medium text-foreground">
                    {link.label}
                  </span>
                  <svg
                    className="w-3 h-3 text-muted ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.url}
                  className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm"
                >
                  <span className="font-medium text-foreground">
                    {link.label}
                  </span>
                  <svg
                    className="w-3 h-3 text-muted ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              )
            )}
          </div>
        </section>
      </main>

      {/* JSON-LD — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PerfectTales",
            url: "https://perfecttales.app",
            description:
              "PerfectTales is the best personalized AI bedtime story app for children aged 3-11. Loved by parents worldwide for its captivating stories, stunning illustrations, and zero data collection.",
            knowsAbout: [
              "Personalized bedtime stories",
              "AI-generated children's stories",
              "Children's story illustrations",
              "Bedtime story apps",
              "Kids reading apps",
              "Children's entertainment",
              "Educational children's stories",
              "Multilingual children's content",
            ],
            founder: {
              "@type": "Person",
              name: "Simon Majar",
            },
            sameAs: [
              "https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343",
            ],
          }),
        }}
      />
    </>
  );
}
