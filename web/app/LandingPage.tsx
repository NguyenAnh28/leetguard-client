"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

function RaycastBackground() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
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
      <div className="relative min-h-screen flex items-center justify-center pt-10 px-6">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-7.5xl font-medium mb-8 leading-none py-1 tracking-super-tight"
            >
              <span className="text-white">Focus. Solve.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Unlock your day.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto font-normal tracking-wide leading-relaxed"
            >
              LeetGuard is a browser extension that blocks distractions and
              tracks your coding interview practice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-12"
            >
              <button className="inline-flex items-center justify-center px-8 py-4 h-14 rounded-lg bg-white text-black text-base font-medium hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md">
                <span>Start Your Focus Journey</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 h-14 rounded-lg bg-black text-white text-base font-medium transition-all duration-200 border border-white/20 hover:border-white/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/30">
                <Play className="w-5 h-5 mr-2" />
                <span>See How It Works</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="features">
        <Features />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
