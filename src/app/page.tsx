import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Themes from "@/components/Themes";
import Pricing from "@/components/Pricing";
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
        <Pricing />
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
                name: "Free",
                description: "Free with limited stories per week",
              },
              {
                "@type": "Offer",
                price: "3.99",
                priceCurrency: "USD",
                name: "Premium Weekly",
                description: "Unlimited personalized bedtime stories",
              },
              {
                "@type": "Offer",
                price: "5.99",
                priceCurrency: "USD",
                name: "Story Pack",
                description: "One-time bundle of story credits",
              },
            ],
            description:
              "PerfectTales creates personalized, AI-generated bedtime stories for children aged 3-11. Choose your child's name, themes, art styles, and values to create unique illustrated tales in 55 languages.",
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
              "8 story themes: Animals, Dragons, Magic, Fairy Tales, Space, Ocean, Unicorns, Robots",
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
                  text: "PerfectTales is an AI-powered bedtime story app that creates personalized, illustrated stories for children aged 3-11. Each story features your child as the main character, with their name, favorite themes, and beautiful artwork tailored just for them.",
                },
              },
              {
                "@type": "Question",
                name: "What age range is PerfectTales designed for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales is designed for children aged 3 to 11. You can set your child's exact age when creating a story, and the AI adjusts the vocabulary, complexity, and themes accordingly.",
                },
              },
              {
                "@type": "Question",
                name: "How does the story personalization work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You enter your child's name and age, then choose from various themes, select a mood, pick an art style, set the story length, and optionally include values-based lessons. The AI generates a completely unique, illustrated story in seconds.",
                },
              },
              {
                "@type": "Question",
                name: "What languages does PerfectTales support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales supports 55 languages for story generation, making it accessible to families around the world.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use PerfectTales without an internet connection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Stories are automatically saved for offline reading. Once a story is generated, you can access it anytime without Wi-Fi.",
                },
              },
              {
                "@type": "Question",
                name: "Is PerfectTales free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PerfectTales is free to download and try with limited stories per week. For unlimited stories, upgrade to Premium Weekly ($3.99/week) or purchase a Story Pack ($5.99 one-time).",
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
                  text: "No. The developer does not collect any data from users. Your child's information stays on your device and is never shared with third parties.",
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
              "PerfectTales creates personalized AI bedtime stories for children aged 3-11 with beautiful illustrations, multiple themes, and 55 languages.",
          }),
        }}
      />
    </>
  );
}
