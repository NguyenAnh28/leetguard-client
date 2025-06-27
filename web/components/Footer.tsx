"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  return (
    <footer
      className={`border-t ${
        isDark ? "border-white/10" : "border-gray-200"
      } py-16 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/leetguard-logo-black.svg"
                alt="LeetGuard Logo"
                width={32}
                height={32}
              />
              <span
                className={`text-lg font-normal ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                LeetGuard
              </span>
            </div>
            <p
              className={`${
                isDark ? "text-neutral-300" : "text-gray-600"
              } max-w-md leading-relaxed font-light text-sm`}
            >
              Your coding companion that rewards deep work and eliminates
              distractions. Focus on what matters most.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3
              className={`${
                isDark ? "text-white" : "text-black"
              } font-medium mb-4`}
            >
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3
              className={`${
                isDark ? "text-white" : "text-black"
              } font-medium mb-4`}
            >
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`${
                    isDark
                      ? "text-neutral-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } hover:underline transition-colors duration-200 text-sm`}
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <p
            className={`${
              isDark ? "text-neutral-400" : "text-gray-500"
            } text-sm mb-4 md:mb-0 font-light`}
          >
            © 2025 LeetGuard. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#linkedin"
              className={`${
                isDark
                  ? "text-neutral-400 hover:text-white"
                  : "text-gray-500 hover:text-black"
              } transition-colors duration-200 text-sm`}
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
