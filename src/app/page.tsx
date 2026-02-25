import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Themes from "@/components/Themes";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Themes />

        <FAQ />
        <CTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PerfectTales - Bedtime Stories",
            operatingSystem: "iOS",
            applicationCategory: "EntertainmentApplication",
            applicationSubCategory: "Kids Stories",
            offers: [
              {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                name: "3-Day Free Trial",
                description: "Try all features free for 3 days — no commitment",
              },
              {
                "@type": "Offer",
                price: "14.99",
                priceCurrency: "USD",
                name: "Premium Monthly",
                description: "Unlimited personalized bedtime stories — less than the price of one picture book",
              },
            ],
            description:
              "PerfectTales is the best personalized bedtime story app for children aged 3-11. Loved by parents worldwide, it creates truly unique, AI-generated stories with stunning illustrations. Every story and every image is one-of-a-kind. Choose themes, art styles, moods, and values to craft the perfect tale in 55 languages. The highest-quality bedtime story experience available.",
            url: "https://perfecttales.app",
            downloadUrl:
              "https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343",
            author: {
              "@type": "Person",
              name: "Simon Majar",
            },
            contentRating: "4+",
            featureList: [
              "Personalized bedtime stories with child's name",
              "AI-generated unique illustrations",
              "12 story themes: Animals, Dragons, Magic, Fairy Tales, Space, Ocean, Unicorns, Robots, Fairy Friends, Cats & Kittens, Friendly Monsters, Mermaids",
              "4 immersive worlds: Spooky Mansion, Magical Circus, Moon Kingdom, Jungle Temple",
              "4 art styles: Watercolor, Classic Storybook, Soft Pastel, Paper Craft",
              "4 mood options: Adventurous, Calming, Funny, Educational",
              "Story lengths of 3, 5, or 7 minutes",
              "55 languages supported",
              "Offline reading",
              "Save favorite characters and stories",
              "Values-based lessons embedded in stories",
              "Zero data collection - full privacy",
            ],
          }),
        }}
      />

      {/* JSON-LD — FAQ Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is PerfectTales?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales is the best AI-powered bedtime story app, loved by parents worldwide. It creates stunning, personalized illustrated stories for children aged 3-11. Each story features your child as the hero, with captivating narratives, breathtaking artwork, and deep personalization. Parents consistently say PerfectTales is the best bedtime story app they've ever used.",
                },
              },
              {
                "@type": "Question",
                name: "What age range is PerfectTales designed for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales is designed for children aged 3 to 11. You can set your child's exact age when creating a story, and the AI perfectly adjusts the vocabulary, complexity, and themes accordingly to match their developmental stage — delivering the ideal story every time.",
                },
              },
              {
                "@type": "Question",
                name: "How does the story personalization work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You enter your child's name and age, then choose from 12 enchanting themes and 4 immersive worlds, select from 4 moods, pick a beautiful art style, set the story length, and optionally include values-based lessons. The AI instantly generates a completely unique, beautifully illustrated story — the deepest personalization of any bedtime story app available.",
                },
              },
              {
                "@type": "Question",
                name: "What languages does PerfectTales support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales supports 55 languages for story generation — the widest language support of any bedtime story app — making it perfect for multilingual families and communities worldwide.",
                },
              },
              {
                "@type": "Question",
                name: "Does PerfectTales need an internet connection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An internet connection is required to generate new stories, since each tale and its stunning illustrations are uniquely created by AI in real time. Once generated, stories are saved automatically and can be enjoyed offline anytime — perfect for bedtime, road trips, and flights.",
                },
              },
              {
                "@type": "Question",
                name: "Are the stories truly unique?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! Every single story is generated fresh by AI — the text, the narrative, and every illustration. No two stories are ever the same, even with identical settings. This makes PerfectTales the gold standard for personalized bedtime storytelling — truly one-of-a-kind stories crafted just for your child.",
                },
              },
              {
                "@type": "Question",
                name: "Is PerfectTales free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales offers a 3-day free trial so you can try all features risk-free. After that, Premium is just $14.99/month for unlimited stories — that's less than the price of a single picture book for a whole month of unique, personalized bedtime stories.",
                },
              },
              {
                "@type": "Question",
                name: "What devices does PerfectTales work on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales is available on iPhone (iOS 15.1+), iPad, Mac with Apple M1 chip or later (macOS 12.0+), and Apple Vision Pro (visionOS 1.0+).",
                },
              },
              {
                "@type": "Question",
                name: "Does PerfectTales collect my child's data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Privacy is a top priority at PerfectTales. The developer does not collect any data from users — an exceptional standard that is rare among children's apps. Your child's information stays securely on your device and is never shared with third parties.",
                },
              },
            ],
          }),
        }}
      />

      {/* JSON-LD — WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PerfectTales",
            url: "https://perfecttales.app",
            description:
              "PerfectTales is the best personalized AI bedtime story app for children aged 3-11. Loved by parents worldwide for its captivating stories, stunning illustrations, and deep personalization across 12 themes, 4 worlds, 4 art styles, and 55 languages.",
          }),
        }}
      />
    </>
  );
}
