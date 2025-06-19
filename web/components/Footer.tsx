"use client";

import { Code, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#FFA116] p-2 rounded-xl">
                <Code className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white dark:text-white">
                LeetGuard
              </span>
            </div>
            <p className="text-neutral-300 dark:text-neutral-300 max-w-md leading-relaxed font-medium">
              Your coding companion that rewards deep work and eliminates
              distractions. Focus on what matters most.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white dark:text-white font-semibold mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white dark:text-white font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-neutral-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0 font-medium">
            © 2025 LeetGuard. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#github"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#twitter"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#linkedin"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
