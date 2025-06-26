"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
        isDark ? "bg-black" : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/leetguard-logo-black.svg"
              alt="LeetGuard Logo"
              width={32}
              height={32}
            />
            <span
              className={`text-2xl font-normal ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              LeetGuard
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={isPricingPage ? "/#features" : "#features"}
              className={`${
                isDark
                  ? "text-white hover:text-white"
                  : "text-black hover:text-black"
              } hover:underline transition-colors duration-200 text-sm font-normal`}
            >
              How It Works
            </Link>
            <Link
              href={isPricingPage ? "/#why-important" : "#why-important"}
              className={`${
                isDark
                  ? "text-white hover:text-white"
                  : "text-black hover:text-black"
              } hover:underline transition-colors duration-200 text-sm font-normal`}
            >
              Why It's Important
            </Link>
            <Link
              href="/pricing"
              className={`${
                isDark
                  ? "text-white hover:text-white"
                  : "text-black hover:text-black"
              } hover:underline transition-colors duration-200 text-sm font-normal`}
            >
              Pricing
            </Link>
            <Link
              href={isPricingPage ? "/#careers" : "#careers"}
              className={`${
                isDark
                  ? "text-white hover:text-white"
                  : "text-black hover:text-black"
              } hover:underline transition-colors duration-200 text-sm font-normal`}
            >
              Careers
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button
              className={`${
                isDark
                  ? "text-white hover:text-white"
                  : "text-black hover:text-black"
              } hover:underline transition-colors duration-200 text-sm font-normal mr-4`}
            >
              Login
            </button>

            {/* Sign Up */}
            <button
              className={`inline-flex items-center justify-center px-2 py-2 h-8 rounded-lg ${
                isDark
                  ? "bg-black text-white border-white/20 hover:border-white/50 hover:shadow-white/30"
                  : "bg-black text-white border-gray-300 hover:border-gray-400 hover:shadow-gray-300"
              } text-sm font-medium transition-all duration-200 border hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
            >
              <span>Sign Up</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
