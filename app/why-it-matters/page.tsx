"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Clock, Brain, Zap, Shield } from "lucide-react";
import Link from "next/link";
import NavbarDark from "@/components/NavbarDark";
import Footer from "@/components/Footer";

function RaycastBackground() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}

export default function WhyItMattersPage() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <RaycastBackground />

      <NavbarDark />

      {/* Hero Section */}
      <div className="relative px-6 pb-16 pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-medium mb-12 leading-none py-1 tracking-super-tight"
            >
              <span className="text-white">Why Focus Matters</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF8C00] via-[#FF4500] to-[#DC143C] bg-clip-text text-transparent">
                More Than Ever
              </span>
            </motion.h1>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto font-normal tracking-wide leading-relaxed"
            >
              In the fast-paced world of software engineering and job hunting,
              distractions are your biggest productivity killers. Between social
              media notifications, endless tabs, and constant messaging, the
              average developer loses hours every day to interruptions — time
              that could be spent coding, learning, or preparing for that next
              big opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12"
            >
              <p className="text-lg text-neutral-200 italic">
                "Research shows that it takes over 20 minutes to fully regain
                focus after a distraction.* This fragmented attention not only
                slows progress but also increases frustration, stress, and
                burnout — especially when preparing for technical interviews or
                managing complex projects."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Cost of Distraction Section */}
      <div className="px-6 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-white">
              The Cost of Distraction
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <Clock className="w-12 h-12 text-[#4F8CFF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Lost Productivity
              </h3>
              <p className="text-neutral-300">
                Developers waste up to 2 hours daily switching between tasks and
                recovering focus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <Brain className="w-12 h-12 text-[#6FE7DD] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Decreased Learning
              </h3>
              <p className="text-neutral-300">
                Interruptions impair your ability to absorb new coding concepts
                and problem-solving strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <Zap className="w-12 h-12 text-[#FFC371] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Higher Stress
              </h3>
              <p className="text-neutral-300">
                Constantly battling distractions leads to mental fatigue and
                burnout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-[#FF6B6B] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Missed Opportunities
              </h3>
              <p className="text-neutral-300">
                A single lost moment could mean a missed bug, a botched
                interview question, or a delayed project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LeetGuard's Mission Section */}
      <div className="px-6 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-white">
              LeetGuard's Mission
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              LeetGuard exists to help you take control back. By blocking
              distracting sites and apps during your focused sessions, LeetGuard
              creates a protected environment where you can:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#4F8CFF] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Sharpen your coding skills
                  </h3>
                  <p className="text-neutral-300">Without interruptions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#6FE7DD] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Prepare for interviews
                  </h3>
                  <p className="text-neutral-300">With sustained focus</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#FFC371] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Boost productivity
                  </h3>
                  <p className="text-neutral-300">And confidence</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Maintain balance
                  </h3>
                  <p className="text-neutral-300">
                    Healthier work-life balance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="px-6 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-white">
              Join Us in Defending Focus
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Every line of code, every solved problem, and every interview prep
              session matters. With LeetGuard, you're not just blocking
              distractions — you're investing in your growth, career, and peace
              of mind.
            </p>
            <p className="text-2xl font-semibold text-white mb-12">
              Together, let's build a future where focus wins.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-sm text-neutral-400">
                * Source: An insightful ChatGPT conversation and a sprinkle of
                coder magic, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
