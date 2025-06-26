"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Image
              src="/leetguard-logo-black.svg"
              alt="LeetGuard Logo"
              width={32}
              height={32}
            />
            <span className="text-2xl font-normal text-white">LeetGuard</span>
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-white hover:text-white hover:underline transition-colors duration-200 text-base font-normal"
            >
              Features
            </a>
            <a
              href="#testimonial"
              className="text-white hover:text-white hover:underline transition-colors duration-200 text-base font-normal"
            >
              Testimonial
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button className="text-white hover:text-white hover:underline transition-colors duration-200 text-base font-normal mr-4">
              Login
            </button>

            {/* Sign Up */}
            <button className="inline-flex items-center justify-center px-3 py-3 h-10 rounded-lg bg-black text-white text-base font-medium transition-all duration-200 border border-white/20 hover:border-white/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/30">
              <span>Sign Up</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
