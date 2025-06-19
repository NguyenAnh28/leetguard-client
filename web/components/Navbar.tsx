'use client';

import { Moon, Sun, Code } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/10 dark:bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#FFA116] p-2 rounded-xl">
              <Code className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white dark:text-white">
              LeetGuard
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
            >
              Docs
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-neutral-300 hover:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600 hover:text-neutral-800" />
              )}
            </button>

            {/* Login */}
            <button className="text-neutral-300 dark:text-neutral-300 hover:text-white dark:hover:text-white hover:underline transition-colors duration-200">
              Login
            </button>

            {/* Sign Up */}
            <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 rounded-xl hover:underline transition-colors duration-200 font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}