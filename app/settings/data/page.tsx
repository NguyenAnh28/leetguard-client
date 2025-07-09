"use client";

import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function DataPage() {
  useEffect(() => {
    // Set light mode for settings page
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex h-screen">
        <Sidebar activePage="settings-data" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-32 flex items-center px-6">
            <h1 className="text-4xl font-normal text-black">Settings</h1>
          </header>

          {/* Settings Navigation */}
          <nav className="border-b border-gray-200 px-6">
            <div className="flex space-x-8">
              <Link
                href="/settings"
                className="px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-black"
              >
                <span className="font-normal text-sm">Personal Profile</span>
              </Link>
              <Link
                href="/settings/security"
                className="px-3 py-2 transition-colors duration-200 text-gray-600 hover:text-black"
              >
                <span className="font-normal text-sm">Security & Access</span>
              </Link>
              <Link
                href="/settings/data"
                className="px-3 py-2 transition-colors duration-200 text-black border-b-2 border-black"
              >
                <span className="font-normal text-sm">Data & Privacy</span>
              </Link>
            </div>
          </nav>

          {/* Content Area */}
          <main className="flex-1 p-6">
            {/* Privacy and Terms Boxes */}
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Privacy Policy Box */}
                <div className="bg-white border border-gray-200 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-black">
                      Privacy Policy
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Understand how we collect, use, and protect your personal information.
                  </p>
                  <div className="border-t border-gray-200 pt-4 flex justify-end">
                    <Link
                      href="/privacy"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors duration-200 border border-gray-300 px-4 py-2 hover:border-gray-400"
                    >
                      Privacy
                      <svg
                        className="w-4 h-4 ml-1 transform rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Terms of Service Box */}
                <div className="bg-white border border-gray-200 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-black">
                      Terms of Service
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Understand your rights and responsibilities when using our platform.
                  </p>
                  <div className="border-t border-gray-200 pt-4 flex justify-end">
                    <Link
                      href="/terms"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors duration-200 border border-gray-300 px-4 py-2 hover:border-gray-400"
                    >
                      Terms
                      <svg
                        className="w-4 h-4 ml-1 transform rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
