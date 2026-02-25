const themes = [
  { emoji: "🐾", name: "Friendly Animals", bg: "from-amber-50 to-orange-50", border: "border-amber-200" },
  { emoji: "🐉", name: "Dragons", bg: "from-red-50 to-orange-50", border: "border-red-200" },
  { emoji: "🪄", name: "Magic & Spells", bg: "from-purple-50 to-pink-50", border: "border-purple-200" },
  { emoji: "🧚", name: "Fairy Tales", bg: "from-pink-50 to-rose-50", border: "border-pink-200" },
  { emoji: "🚀", name: "Space", bg: "from-blue-50 to-indigo-50", border: "border-blue-200" },
  { emoji: "🌊", name: "Ocean Adventures", bg: "from-cyan-50 to-blue-50", border: "border-cyan-200" },
  { emoji: "🦄", name: "Unicorns", bg: "from-fuchsia-50 to-purple-50", border: "border-fuchsia-200" },
  { emoji: "🤖", name: "Robots", bg: "from-slate-50 to-zinc-100", border: "border-slate-200" },
  { emoji: "🧚‍♀️", name: "Fairy Friends", bg: "from-violet-50 to-fuchsia-50", border: "border-violet-200" },
  { emoji: "🐱", name: "Cats & Kittens", bg: "from-orange-50 to-yellow-50", border: "border-orange-200" },
  { emoji: "👹", name: "Friendly Monsters", bg: "from-lime-50 to-green-50", border: "border-lime-200" },
  { emoji: "🧜‍♀️", name: "Mermaids", bg: "from-teal-50 to-cyan-50", border: "border-teal-200" },
];

const worlds = [
  {
    emoji: "👻",
    name: "Spooky Mansion",
    description: "Playful ghosts, secret passages — more silly than scary",
    bg: "from-gray-100 to-purple-50",
    border: "border-gray-300",
  },
  {
    emoji: "🎪",
    name: "Magical Circus",
    description: "Acrobats, clowns, and a glowing big top under the stars",
    bg: "from-red-50 to-yellow-50",
    border: "border-red-200",
  },
  {
    emoji: "🌙",
    name: "Moon Kingdom",
    description: "Silver castles, bouncing craters, and gentle moon creatures",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-200",
  },
  {
    emoji: "🏛️",
    name: "Jungle Temple",
    description: "Ancient temple overgrown with vines, full of puzzles",
    bg: "from-emerald-50 to-lime-50",
    border: "border-emerald-200",
  },
];

const artStyles = [
  {
    name: "Watercolor",
    description: "Soft, flowing colors that blend beautifully, creating dreamlike illustrations",
    preview: "🎨",
    gradient: "from-blue-100 via-pink-50 to-purple-100",
  },
  {
    name: "Classic Storybook",
    description: "Traditional illustration style reminiscent of beloved children's books",
    preview: "📚",
    gradient: "from-amber-50 via-orange-50 to-yellow-50",
  },
  {
    name: "Soft Pastel",
    description: "Gentle, muted tones that create a calming, soothing atmosphere",
    preview: "🌸",
    gradient: "from-pink-50 via-lavender-50 to-blue-50",
  },
  {
    name: "Paper Craft",
    description: "Charming cut-paper style that adds a tactile, handmade quality",
    preview: "✂️",
    gradient: "from-green-50 via-yellow-50 to-orange-50",
  },
];

export default function Themes() {
  return (
    <section id="themes" className="relative py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full text-secondary-light text-sm font-semibold mb-4">
            <span>🎭</span> Endless Possibilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Themes, Worlds & <span className="gradient-text">Art Styles</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Mix and match from 12 magical themes, 4 immersive worlds, and 4 beautiful art styles for a story that&apos;s truly unique.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">12 Story Themes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className={`group p-5 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {theme.emoji}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {theme.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worlds Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">4 Immersive Worlds</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {worlds.map((world) => (
              <div
                key={world.name}
                className={`group p-6 rounded-3xl bg-gradient-to-br ${world.bg} border ${world.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {world.emoji}
                </div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  {world.name}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {world.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Art Styles */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">4 Art Styles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artStyles.map((style) => (
              <div
                key={style.name}
                className={`group p-6 rounded-3xl bg-gradient-to-br ${style.gradient} border border-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {style.preview}
                </div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  {style.name}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
