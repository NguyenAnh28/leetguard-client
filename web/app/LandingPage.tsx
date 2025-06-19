"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

function RaycastBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/80" />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#ff8a0080 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Orange glow elements */}
      <div
        className="absolute -top-[40%] left-[20%] h-[70vh] w-[70vh] rounded-full bg-orange-500/20 blur-[120px]"
        style={{
          animation: "glow1 8s ease-in-out infinite reverse",
        }}
      />

      <div
        className="absolute -bottom-[30%] right-[10%] h-[80vh] w-[80vh] rounded-full bg-orange-400/20 blur-[120px]"
        style={{
          animation: "glow2 10s ease-in-out infinite reverse",
        }}
      />

      {/* Smaller accent glow */}
      <div
        className="absolute top-[30%] right-[30%] h-[30vh] w-[30vh] rounded-full bg-yellow-500/30 blur-[80px]"
        style={{
          animation: "glow3 6s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}

export default function LandingPage() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <RaycastBackground />

      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full text-base font-normal tracking-wide bg-black/30 text-white backdrop-blur-md border border-white/20 mb-4">
                <Sparkles className="w-5 h-5 mr-2.5" />
                Focus. Solve. Unlock your day
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-[1.3] md:leading-[1.2] py-1 tracking-super-tight"
            >
              <span className="text-white">Focus. Solve.</span>
              <br />
              <span className="text-[#FFA116]">Unlock your day</span>
              <br />
              <span className="text-white">with LeetGuard.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
            >
              Your coding companion that rewards deep work and eliminates
              distractions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button className="inline-flex items-center justify-center px-6 py-3 h-12 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md">
                <span>Start Your Focus Journey</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 h-12 rounded-lg bg-black text-white text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/30">
                <Play className="w-4 h-4 mr-2" />
                <span>See How It Works</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}
