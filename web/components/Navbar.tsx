"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-warm-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/leetguard-logo.svg"
                  alt="LeetGuard Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-white font-semibold text-xl">
                LeetGuard
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-warm-gray-300 hover:text-white transition-smooth btn-hover-underline"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-warm-gray-300 hover:text-white transition-smooth btn-hover-underline"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-warm-gray-300 hover:text-white transition-smooth btn-hover-underline"
            >
              Docs
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-warm-gray-300 hover:text-white transition-smooth btn-hover-underline">
              Login
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg border border-warm-gray-700 hover:border-leet-yellow transition-smooth btn-hover-underline">
              Sign Up ↗
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-warm-gray-300 hover:text-white transition-smooth"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-warm-gray-800">
              <a
                href="#features"
                className="block px-3 py-2 text-warm-gray-300 hover:text-white transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-warm-gray-300 hover:text-white transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="block px-3 py-2 text-warm-gray-300 hover:text-white transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left px-3 py-2 text-warm-gray-300 hover:text-white transition-smooth">
                  Login
                </button>
                <button className="block w-full text-left px-3 py-2 bg-black text-white rounded-lg border border-warm-gray-700 hover:border-leet-yellow transition-smooth">
                  Sign Up ↗
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
