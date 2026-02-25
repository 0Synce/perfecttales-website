import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PerfectTales vs. Picture Books — Which Is Better for Bedtime Stories?",
  description:
    "Compare PerfectTales to traditional picture books. Discover why thousands of parents use PerfectTales for daily bedtime stories — personalized, cheaper, and a new story every night. Physical books still have a special place too.",
  keywords: [
    "PerfectTales vs books",
    "bedtime story app vs books",
    "best alternative to children's books",
    "digital bedtime stories",
    "cheaper than picture books",
    "personalized children's stories",
    "daily bedtime stories",
  ],
  alternates: {
    canonical: "https://perfecttales.app/compare/perfecttales-vs-books",
  },
  openGraph: {
    title: "PerfectTales vs. Picture Books — Bedtime Story Comparison",
    description:
      "Compare AI-personalized bedtime stories to traditional picture books. A practical guide for parents.",
    url: "https://perfecttales.app/compare/perfecttales-vs-books",
    type: "article",
  },
};

const comparison = [
  {
    aspect: "Cost per story",
    perfecttales: "~$0.14 (unlimited for $3.99/week)",
    books: "$10–20 per book",
    winner: "perfecttales",
  },
  {
    aspect: "Personalization",
    perfecttales: "Child's name, age, theme, mood, art style, values, and language",
    books: "None — same story for every child",
    winner: "perfecttales",
  },
  {
    aspect: "Variety",
    perfecttales: "Unlimited unique stories — a new one every night",
    books: "One story per book",
    winner: "perfecttales",
  },
  {
    aspect: "Illustrations",
    perfecttales: "Stunning AI-generated art, unique for every story, in 4 art styles",
    books: "Professional illustrations, fixed per book",
    winner: "tie",
  },
  {
    aspect: "Portability",
    perfecttales: "Entire library on your phone — works offline after generation",
    books: "Physical copies need shelf space, can only carry a few",
    winner: "perfecttales",
  },
  {
    aspect: "Reading development",
    perfecttales: "Vocabulary adapts to child's age, Educational mood, 55 languages",
    books: "Fixed vocabulary level, great for re-reading practice",
    winner: "tie",
  },
  {
    aspect: "Tactile experience",
    perfecttales: "Screen-based experience",
    books: "Turning pages, feeling paper — a treasured physical experience",
    winner: "books",
  },
  {
    aspect: "Screen time",
    perfecttales: "Uses a screen (3–7 minutes per story)",
    books: "No screen time",
    winner: "books",
  },
  {
    aspect: "Availability",
    perfecttales: "Instant — generate a new story in seconds, anytime",
    books: "Need to purchase, wait for delivery, or visit a library",
    winner: "perfecttales",
  },
  {
    aspect: "Languages",
    perfecttales: "55 languages — ideal for bilingual families",
    books: "Usually one language per book",
    winner: "perfecttales",
  },
  {
    aspect: "Collectability",
    perfecttales: "Save favorites digitally in the app",
    books: "Build a physical bookshelf — a beautiful family tradition",
    winner: "books",
  },
  {
    aspect: "Environmental impact",
    perfecttales: "Digital — no paper, printing, or shipping",
    books: "Paper, ink, and transportation required",
    winner: "perfecttales",
  },
];

const faqs = [
  {
    question: "Is PerfectTales a replacement for picture books?",
    answer:
      "Not exactly — it's a perfect complement. PerfectTales gives your child a new, personalized bedtime story every night at a fraction of the cost of buying books. Many parents use PerfectTales for daily stories and keep physical books for special favorites. Together, they create the richest possible reading experience.",
  },
  {
    question: "How much cheaper is PerfectTales than buying books?",
    answer:
      "Significantly cheaper. A typical children's picture book costs $10–20 for one story. PerfectTales offers unlimited unique, personalized stories for $3.99/week — that's roughly $0.14 per story. In one month of daily stories, PerfectTales costs about $16 versus $300–600 for 30 individual picture books.",
  },
  {
    question: "Can PerfectTales help my child learn to read?",
    answer:
      "Yes! PerfectTales adjusts vocabulary complexity based on your child's age (3–11), so the language grows with them. The Educational mood option focuses on teaching concepts. With 55 languages, it's also an excellent tool for bilingual families and early language exposure. Having a unique, exciting story every night motivates children to engage with reading.",
  },
  {
    question: "Is screen time before bed bad for kids?",
    answer:
      "PerfectTales stories are designed for bedtime — they're short (3, 5, or 7 minutes) and the Calming mood is specifically designed to help children wind down. The experience is similar to looking at a picture book together, just on a screen. Many parents dim the screen or use night mode. The brief, focused story time is a positive bonding experience rather than passive screen consumption.",
  },
  {
    question:
      "Why would I use PerfectTales when I can get books from the library?",
    answer:
      "Library books are wonderful, but they offer fixed stories that every child reads the same way. PerfectTales creates stories where YOUR child is the hero — personalized with their name, age-appropriate vocabulary, their favorite themes, and even life lessons you choose. Plus, you get a genuinely new story every single night without a trip to the library.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            PerfectTales
          </Link>
          <span className="mx-2">/</span>
          <span>Compare</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">PerfectTales vs. Books</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            PerfectTales vs. Picture Books
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Parents often ask: should I use a story app or stick with traditional
            picture books? The honest answer is{" "}
            <strong>both have their place</strong>. But for daily bedtime
            stories, PerfectTales offers something no bookshelf can — a brand
            new, personalized adventure every single night, at a fraction of the
            cost.
          </p>
        </header>

        {/* TL;DR */}
        <section className="bg-primary/5 border border-primary/15 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <span>📋</span> The Bottom Line
          </h2>
          <p className="text-foreground leading-relaxed">
            PerfectTales is the most cost-effective way to give your child a
            fresh, personalized bedtime story every night. At $3.99/week for
            unlimited AI-generated stories (about $0.14 per story), it costs a
            fraction of picture books ($10–20 each). Every story features your
            child as the hero, with stunning illustrations and age-appropriate
            vocabulary in 55 languages. Physical books still offer a cherished
            tactile experience — the best approach is using PerfectTales for
            daily stories and keeping physical books for special favorites.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-foreground">
                    Aspect
                  </th>
                  <th className="text-left p-3 font-semibold text-primary bg-primary/5">
                    PerfectTales
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground">
                    Picture Books
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3 font-medium text-foreground align-top">
                      {row.aspect}
                    </td>
                    <td
                      className={`p-3 align-top ${
                        row.winner === "perfecttales"
                          ? "bg-primary/5 text-foreground font-medium"
                          : "text-muted"
                      }`}
                    >
                      {row.winner === "perfecttales" && (
                        <span className="text-primary mr-1">★</span>
                      )}
                      {row.perfecttales}
                    </td>
                    <td
                      className={`p-3 align-top ${
                        row.winner === "books"
                          ? "font-medium text-foreground"
                          : "text-muted"
                      }`}
                    >
                      {row.winner === "books" && (
                        <span className="text-secondary mr-1">★</span>
                      )}
                      {row.books}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The math */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            The Cost Breakdown
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3 text-lg">
                PerfectTales Premium
              </h3>
              <div className="space-y-2 text-sm text-muted">
                <p>$3.99/week = ~$17/month</p>
                <p>30 unique stories/month = <strong className="text-primary">~$0.57/story</strong></p>
                <p>
                  (Even more stories? Still $17/month — unlimited means
                  unlimited)
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-foreground font-semibold">
                  Annual cost: ~$207 for 365+ unique personalized stories
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3 text-lg">
                Picture Books
              </h3>
              <div className="space-y-2 text-sm text-muted">
                <p>Average picture book: $15</p>
                <p>30 new books/month = <strong className="text-foreground">$450/month</strong></p>
                <p>(And each book is the same story forever)</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-foreground font-semibold">
                  Annual cost: ~$5,400 for 365 different books
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted mt-4">
            Of course, most families don&apos;t buy a new book every night — they
            re-read favorites. But PerfectTales ensures your child gets a fresh,
            exciting, personalized story every evening without the cost adding up.
          </p>
        </section>

        {/* Best of both worlds */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Best of Both Worlds
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Many parents find the ideal approach is combining PerfectTales with a
            curated collection of physical books:
          </p>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                Use <strong>PerfectTales every night</strong> for a fresh,
                personalized adventure — children love hearing a new story where
                they&apos;re the hero
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                Keep <strong>physical books for special favorites</strong> —
                titles your child wants to hear again and again, holiday gifts,
                and classics
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                Use PerfectTales&apos; <strong>Educational mood</strong> and{" "}
                <strong>55 languages</strong> for learning — then reinforce with
                physical books in those languages
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong>Travel with PerfectTales</strong> — no need to pack heavy
                books for road trips, flights, or vacations
              </span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-6 sm:p-8 mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-3">
            Give Your Child a New Story Tonight
          </h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            PerfectTales is free to try. Download it now and see why parents call
            it the best bedtime story app they&apos;ve ever used.
          </p>
          <a
            href="https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
          >
            Download PerfectTales — Free
            <svg
              className="w-4 h-4"
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
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Related Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-bedtime-story-apps-2026"
              className="text-primary hover:underline text-sm font-medium"
            >
              Best Bedtime Story Apps 2026 →
            </Link>
            <Link
              href="/brand-facts"
              className="text-primary hover:underline text-sm font-medium"
            >
              PerfectTales Brand Facts →
            </Link>
            <Link
              href="/"
              className="text-primary hover:underline text-sm font-medium"
            >
              PerfectTales Home →
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD — Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "PerfectTales vs. Picture Books — Which Is Better for Bedtime Stories?",
            description:
              "An honest comparison of PerfectTales AI bedtime stories versus traditional picture books. Cost, personalization, variety, reading development, and more.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-25",
            author: {
              "@type": "Organization",
              name: "PerfectTales",
              url: "https://perfecttales.app",
            },
            publisher: {
              "@type": "Organization",
              name: "PerfectTales",
              url: "https://perfecttales.app",
            },
            mainEntityOfPage:
              "https://perfecttales.app/compare/perfecttales-vs-books",
          }),
        }}
      />

      {/* JSON-LD — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
