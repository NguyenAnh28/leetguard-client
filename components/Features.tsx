"use client";

import { Zap, Shield, Unlock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Problem Detection",
    description: "Automatically detects solved LeetCode problems in real-time.",
  },
  {
    icon: Shield,
    title: "Custom Site Blocking",
    description: "Choose which sites to block to maximize your focus.",
  },
  {
    icon: Unlock,
    title: "Instant Unlock",
    description:
      "Unlock distracting sites only when you've earned it by solving.",
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-black dark:text-black mb-6">
            Built for Focused Developers
          </h2>
          <p className="text-xl text-neutral-900 dark:text-neutral-900 max-w-2xl mx-auto font-normal">
            LeetGuard combines smart detection with customizable blocking to
            create the perfect coding environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 dark:bg-white/20 backdrop-blur-sm border border-black/10 rounded-xl p-8"
              >
                <div className="bg-black p-3 rounded-xl w-fit mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-black dark:text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-900 dark:text-neutral-900 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
