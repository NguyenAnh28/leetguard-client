"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  useEffect(() => {
    // Set light mode for dashboard page
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex h-screen">
        <Sidebar activePage="dashboard" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-32 border-b border-gray-200 flex items-center px-6">
            <h1 className="text-4xl font-normal text-black">Dashboard</h1>
          </header>

          {/* Content Area */}
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-medium text-black mb-4">
                  Welcome to your dashboard
                </h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-normal">
                  Track your progress, manage your focus sessions, and stay
                  productive with LeetGuard.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
