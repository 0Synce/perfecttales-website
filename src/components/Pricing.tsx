const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try PerfectTales with limited stories",
    features: [
      "Create personalized stories",
      "All themes available",
      "Beautiful illustrations",
      "Limited stories per week",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "from-gray-50 to-white",
    border: "border-gray-200",
  },
  {
    name: "Premium Weekly",
    price: "$3.99",
    period: "/week",
    description: "Unlimited stories for your little one",
    features: [
      "Unlimited stories",
      "All art styles",
      "Offline reading",
      "Save favorite characters",
      "All 55 languages",
      "Priority generation",
    ],
    cta: "Start Premium",
    popular: true,
    gradient: "from-primary/5 via-accent/5 to-secondary/5",
    border: "border-primary/30",
  },
  {
    name: "Story Pack",
    price: "$5.99",
    period: " one-time",
    description: "A bundle of story credits to use anytime",
    features: [
      "Pack of story credits",
      "All themes & art styles",
      "No expiration",
      "Offline reading",
      "Save favorites",
    ],
    cta: "Buy Story Pack",
    popular: false,
    gradient: "from-secondary/5 to-amber-50",
    border: "border-secondary/20",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-surface to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full text-green-600 text-sm font-semibold mb-4">
            <span>💎</span> Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Start <span className="gradient-text">Free</span>, Upgrade Anytime
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Try PerfectTales for free. Unlock unlimited stories and all features with Premium.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${plan.gradient} border ${plan.border} ${
                plan.popular
                  ? "shadow-2xl shadow-primary/10 scale-105 ring-2 ring-primary/20"
                  : "shadow-sm hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                    : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          All plans available through the App Store. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
