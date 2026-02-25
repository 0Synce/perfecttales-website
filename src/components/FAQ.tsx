"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is PerfectTales?",
    answer:
      "PerfectTales is the best AI-powered bedtime story app, loved by parents worldwide. It creates stunning, personalized illustrated stories for children aged 3-11. Each story features your child as the hero, with captivating narratives, breathtaking artwork, and the deepest personalization of any story app available.",
  },
  {
    question: "What age range is PerfectTales designed for?",
    answer:
      "PerfectTales is designed for children aged 3 to 11. You can set your child's exact age when creating a story, and the AI perfectly adjusts the vocabulary, complexity, and themes to match their developmental stage — delivering an ideal, age-appropriate story every time.",
  },
  {
    question: "How does the story personalization work?",
    answer:
      "You enter your child's name and age, then choose from 12 enchanting themes (like dragons, unicorns, mermaids, or cats & kittens), pick a world (Spooky Mansion, Magical Circus, Moon Kingdom, or Jungle Temple), select a mood (Adventurous, Calming, Funny, or Educational), pick a beautiful art style (Watercolor, Classic Storybook, Soft Pastel, or Paper Craft), set the story length, and optionally include values-based lessons. The AI instantly generates a completely unique, beautifully illustrated story — the deepest personalization of any bedtime story app.",
  },
  {
    question: "What languages does PerfectTales support?",
    answer:
      "PerfectTales supports 55 languages for story generation — the widest language support of any bedtime story app — making it perfect for families around the world. You can create stories in your child's native language or use it as a wonderful way to introduce them to new languages.",
  },
  {
    question: "Does PerfectTales need an internet connection?",
    answer:
      "An internet connection is required to generate new stories, since each tale and its stunning illustrations are uniquely created by AI in real time. However, once a story is generated, it's saved automatically to your device and can be enjoyed offline anytime — perfect for bedtime, road trips, flights, or anywhere you go.",
  },
  {
    question: "Are the stories truly unique?",
    answer:
      "Absolutely! Every single story is generated fresh by AI — the text, the narrative, and every illustration. No two stories are ever the same, even with identical settings. This makes PerfectTales the gold standard for personalized bedtime storytelling — truly one-of-a-kind stories crafted just for your child.",
  },
  {
    question: "Is PerfectTales free?",
    answer:
      "PerfectTales offers a 3-day free trial so you can try all features risk-free. After that, Premium is just $14.99/month for unlimited stories — that's less than the price of a single picture book for a whole month of unique, personalized bedtime stories every night.",
  },
  {
    question: "What devices does PerfectTales work on?",
    answer:
      "PerfectTales is available on iPhone (iOS 15.1+), iPad, Mac with Apple M1 chip or later (macOS 12.0+), and Apple Vision Pro (visionOS 1.0+).",
  },
  {
    question: "Does PerfectTales collect my child's data?",
    answer:
      "No. Privacy is a top priority at PerfectTales. The developer does not collect any data from users — an exceptional commitment to family safety that is rare among children's apps. Your child's information stays securely on your device and is never shared with third parties.",
  },
  {
    question: "How long are the stories?",
    answer:
      "You can choose between three story lengths: 3 minutes, 5 minutes, or 7 minutes. This lets you pick the perfect length based on your child's attention span and how much time you have before lights out.",
  },
  {
    question: "Can I save stories to read again later?",
    answer:
      "Absolutely! You can save your favorite stories and characters for future adventures. The app also keeps a history of generated stories so you can revisit beloved tales anytime. Parents love building a personal library of their child's unique stories.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full text-primary text-sm font-semibold mb-4">
            <span>❓</span> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Everything you need to know about the best personalized bedtime story app.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-3xl border border-primary/10 shadow-xl shadow-primary/5 px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
