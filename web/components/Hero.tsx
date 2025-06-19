import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Logo and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/leetguard-logo.svg"
                    alt="LeetGuard Logo"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Focus. <span className="text-leet-yellow">Solve.</span>{" "}
                    <br />
                    Unlock your day with{" "}
                    <span className="text-leet-yellow">LeetGuard.</span>
                  </h1>
                </div>
              </div>

              <p className="text-xl text-warm-gray-300 leading-relaxed max-w-2xl">
                Your coding buddy that rewards you with breaks only when you've
                earned them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg border border-warm-gray-700 hover:border-leet-yellow transition-smooth flex items-center justify-center space-x-2 group">
                <span className="font-medium">Start Your Focus Journey</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="bg-transparent text-warm-gray-300 px-8 py-4 rounded-lg border border-warm-gray-600 hover:border-warm-gray-400 transition-smooth flex items-center justify-center space-x-2 group">
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">See How It Works</span>
              </button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-warm-gray-800 to-warm-gray-900 rounded-2xl p-8 border border-warm-gray-700">
              {/* Abstract coding illustration placeholder */}
              <div className="space-y-4">
                {/* Code blocks */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-leet-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-warm-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-warm-gray-600 rounded-full"></div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 bg-warm-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-warm-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-warm-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-warm-gray-700 rounded w-2/3"></div>
                </div>

                {/* Progress indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-warm-gray-400 mb-2">
                    <span>Progress</span>
                    <span className="text-leet-yellow">75%</span>
                  </div>
                  <div className="w-full bg-warm-gray-700 rounded-full h-2">
                    <div
                      className="bg-leet-yellow h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                {/* Unlock indicator */}
                <div className="mt-4 flex items-center space-x-2 text-sm text-warm-gray-400">
                  <div className="w-2 h-2 bg-leet-yellow rounded-full animate-pulse"></div>
                  <span>Unlock available in 2 problems</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-leet-yellow/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-leet-yellow/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-leet-yellow/40 rounded-full"></div>
            </div>

            {/* Background glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-leet-yellow/10 to-transparent rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
