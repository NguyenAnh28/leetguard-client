import { Zap, Unlock, Shield, TrendingUp, Chrome } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Problem Detection",
    description: "Automatically detects solved LeetCode problems in real-time.",
    color: "text-leet-yellow",
  },
  {
    icon: Unlock,
    title: "Instant Unlock",
    description:
      "Unlocks distracting sites only when you've earned it by solving.",
    color: "text-leet-yellow",
  },
  {
    icon: Shield,
    title: "Custom Site Blocking",
    description: "Choose which sites to block to maximize your focus.",
    color: "text-leet-yellow",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Track your coding streaks and solved problems over time.",
    color: "text-leet-yellow",
  },
  {
    icon: Chrome,
    title: "Seamless Integration",
    description: "Works smoothly as a Chrome extension with zero setup.",
    color: "text-leet-yellow",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="text-leet-yellow">stay focused</span>
          </h2>
          <p className="text-xl text-warm-gray-300 max-w-3xl mx-auto">
            LeetGuard combines smart technology with proven productivity
            principles to help you build better coding habits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-warm-gray-800/50 to-warm-gray-900/50 rounded-xl p-6 border border-warm-gray-700 hover:border-leet-yellow/50 transition-smooth"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-leet-yellow/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 bg-leet-yellow/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-leet-yellow/20 transition-smooth">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-leet-yellow transition-smooth">
                  {feature.title}
                </h3>

                <p className="text-warm-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-leet-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-warm-gray-300 hover:text-leet-yellow transition-smooth cursor-pointer group">
            <span className="font-medium">Learn more about our features</span>
            <div className="w-4 h-4 border-r-2 border-b-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
