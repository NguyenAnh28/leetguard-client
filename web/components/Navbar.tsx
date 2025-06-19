"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/leetguard-logo-black.svg"
              alt="LeetGuard Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-white">LeetGuard</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200 text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200 text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200 text-sm font-medium"
            >
              Docs
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200 text-sm font-medium">
              Login
            </button>

            {/* Sign Up */}
            <button className="bg-black text-white px-6 py-2 rounded-xl hover:underline transition-colors duration-200 text-sm font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
