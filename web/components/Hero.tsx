"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white dark:text-white">Focus. Solve.</span>
          <br />
          <span className="text-[#FFA116]">Unlock your day</span>
          <br />
          <span className="text-white dark:text-white">with LeetGuard.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-neutral-300 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Your coding companion that rewards deep work and eliminates
          distractions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:underline transition-colors duration-200 flex items-center space-x-2">
            <span>Start Your Focus Journey</span>
          </button>
          <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:underline transition-colors duration-200 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>See How It Works</span>
          </button>
        </div>

        {/* Visual Mock-up */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Progress Indicator */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                  <div className="bg-[#FFA116] h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-white text-sm">Problem Progress</p>
              </div>

              {/* Blocked Sites */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-400 text-2xl">🔒</span>
                  <span className="text-white text-sm">Blocked</span>
                </div>
                <p className="text-white text-sm">5 sites locked</p>
              </div>

              {/* Next Unlock */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#FFA116] text-2xl">⚡</span>
                  <span className="text-white text-sm">Next unlock</span>
                </div>
                <p className="text-white text-sm">1 problem away</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
