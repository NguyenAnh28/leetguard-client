"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chrome, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import NavbarLight from "@/components/NavbarLight";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    {
      type: "logo",
      content: "LeetGuard",
      logo: true,
    },
    {
      type: "text",
      content: "The internet is loud.",
    },
    {
      type: "text",
      content: "Every second counts.",
    },
    {
      type: "text",
      content: "Focus on what matters.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  const currentText = texts[currentIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        {currentText.logo && (
          <Image
            src="/leetguard-logo-circle.png"
            alt="LeetGuard Logo"
            width={80}
            height={80}
            className="mr-6"
          />
        )}
        <h2 className="text-6xl font-light text-black drop-shadow-lg">
          {currentText.content}
        </h2>
      </motion.div>
    </AnimatePresence>
  );
}

export default function LandingPage() {
  useEffect(() => {
    // Set light mode by default
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black">
      <NavbarLight />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-10 px-6">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mt-48">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-7.5xl font-medium mb-8 leading-none py-1 tracking-super-tight"
            >
              <span className="text-black">Focus. Solve.</span>
              <br />
              <span className="text-black">Unlock your day.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-neutral-900 mb-8 max-w-2xl mx-auto font-normal tracking-wide leading-relaxed"
            >
              LeetGuard is a browser extension that blocks distractions and
              tracks your coding interview practice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-12"
            >
              <button className="inline-flex items-center justify-center px-6 py-3 h-12 rounded-lg bg-black text-white text-sm font-medium transition-all duration-200 border border-black/20 hover:border-black/50 hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-black/30">
                <span>Start Your Focus Journey</span>
                <Chrome className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Product Demo Image - Part of hero section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex justify-center relative"
            >
              <div
                className="overflow-hidden relative"
                style={{ height: "400px", width: "90vw", maxWidth: "1400px" }}
              >
                <Image
                  src="/beach.gif"
                  alt="Product Demo"
                  width={1400}
                  height={800}
                  className="object-cover w-full h-full"
                  style={{ marginTop: "-100px", marginBottom: "-100px" }}
                />
                {/* Animated text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center"
                    style={{ transform: "translateY(-50px)" }}
                  >
                    <AnimatedText />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="features">
        <Features />
      </div>

      {/* Separator Line */}
      <div id="why-important" className="w-full flex justify-center py-8">
        <div className="w-24 h-px"></div>
      </div>

      <div>
        <Quote />
      </div>
      <Footer />
    </div>
  );
}
