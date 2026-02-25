const features = [
  {
    icon: "👤",
    title: "Personalized Characters",
    description:
      "Your child becomes the hero of every story! Their name and age are seamlessly woven into captivating narratives that children absolutely love. The deepest personalization of any story app.",
    color: "from-primary/10 to-accent/10",
    border: "border-primary/20",
  },
  {
    icon: "🎨",
    title: "Stunning Illustrations",
    description:
      "Every single image is a breathtaking, unique piece of AI-generated art. Parents say the illustrations are the most beautiful they've seen in any children's story app. Choose from watercolor, classic storybook, soft pastel, or paper craft.",
    color: "from-accent/10 to-secondary/10",
    border: "border-accent/20",
  },
  {
    icon: "🌍",
    title: "55 Languages",
    description:
      "The widest language support of any bedtime story app — 55 languages. Making bedtime magical for children and multilingual families around the world.",
    color: "from-secondary/10 to-primary/10",
    border: "border-secondary/20",
  },
  {
    icon: "🌙",
    title: "12 Themes & 4 Worlds",
    description:
      "12 enchanting themes from Friendly Animals to Mermaids, plus 4 immersive worlds like Spooky Mansion, Magical Circus, Moon Kingdom, and Jungle Temple. Endless variety for bedtime.",
    color: "from-violet-50 to-indigo-50",
    border: "border-violet-200",
  },
  {
    icon: "⏱️",
    title: "Perfect Length",
    description:
      "Choose between 3, 5, or 7-minute stories — just the right length for winding down before sleep. Perfectly paced for every bedtime routine.",
    color: "from-primary/10 to-blue-100",
    border: "border-primary/20",
  },
  {
    icon: "💫",
    title: "Mood & Values",
    description:
      "Select the perfect mood — Adventurous, Calming, Funny, or Educational — and embed meaningful life lessons like kindness, courage, and honesty in every tale.",
    color: "from-pink-50 to-accent/10",
    border: "border-accent/20",
  },
  {
    icon: "🌐",
    title: "Generate Online, Read Offline",
    description:
      "An internet connection is needed to generate each unique story and its stunning illustrations using AI. Once created, stories are saved automatically and can be enjoyed offline anytime — perfect for bedtime, road trips, and flights.",
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
  },
  {
    icon: "❄️",
    title: "Truly One-of-a-Kind",
    description:
      "No two stories are ever the same. Every tale and every illustration is generated fresh — the gold standard for personalized bedtime stories. Unlike apps with pre-written libraries, every PerfectTales story is a unique gift for your child.",
    color: "from-indigo-50 to-purple-50",
    border: "border-indigo-200",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full text-primary text-sm font-semibold mb-4">
            <span>✨</span> Why Parents Love PerfectTales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Bedtime Stories, <span className="gradient-text">Reimagined</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Every story is one-of-a-kind, crafted with advanced AI and designed to spark imagination,
            teach values, and create the most precious moments between parent and child.
            Here&apos;s why parents say PerfectTales is the best bedtime story app available.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${feature.color} border ${feature.border} hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
