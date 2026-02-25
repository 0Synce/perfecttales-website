const steps = [
  {
    number: "01",
    title: "Create Your Character",
    description:
      "Enter your child's name, age (3-11), and pick from 12 themes and 4 immersive worlds — dragons, mermaids, moon kingdom, and more.",
    icon: "🧒",
    accent: "primary",
  },
  {
    number: "02",
    title: "Customize the Story",
    description:
      "Choose the mood (Adventurous, Calming, Funny, or Educational), story length, art style, and values you want to teach.",
    icon: "🎛️",
    accent: "accent",
  },
  {
    number: "03",
    title: "Watch the Magic Happen",
    description:
      "AI generates a unique, illustrated bedtime story in seconds. Beautiful art and engaging text, crafted just for your little one.",
    icon: "✨",
    accent: "secondary",
  },
  {
    number: "04",
    title: "Read & Save",
    description:
      "Enjoy the story together at bedtime. Save favorites for offline reading and revisit beloved characters anytime.",
    icon: "📖",
    accent: "primary",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-background via-surface to-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-4">
            <span>🪄</span> Simple as 1-2-3-4
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            How <span className="gradient-text">PerfectTales</span> Works
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Creating a personalized bedtime story takes less than a minute. Here&apos;s how the magic unfolds.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-[2px] bg-gradient-to-r from-primary/20 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon circle */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
