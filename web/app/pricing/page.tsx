"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  useEffect(() => {
    // Set light mode for pricing page
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black">
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
              <span className="text-black">Start for free.</span>
              <br />
              <span className="text-black">Cut the distractions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto font-normal tracking-wide leading-relaxed"
            >
              Install the extension and start focusing better today. LeetGuard
              is always free to start.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Pricing Card Section */}
      <div className="relative py-20 px-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-md"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-medium text-black mb-2">Free</h3>
                  <div className="text-4xl font-medium text-black mb-1">$0</div>
                  <div className="text-gray-600">per month</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Distraction blocker for coding sessions
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Track problems solved & time spent
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Daily streak & focus mode
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Works offline, data stays on your device
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Chrome & Edge support</span>
                  </div>
                </div>

                <button className="w-full inline-flex items-center justify-center px-8 py-4 h-14 rounded-lg bg-black text-white text-base font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">
                  <span>Install now</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
