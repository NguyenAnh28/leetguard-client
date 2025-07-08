"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    // Set light mode for settings page
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="text-center">
            <h2 className="text-4xl font-medium text-black mb-4">
              Personal Profile
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-normal">
              Update your personal information and profile details.
            </p>
          </div>
        );
      case "security":
        return (
          <div className="text-center">
            <h2 className="text-4xl font-medium text-black mb-4">
              Security & Access
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-normal">
              Manage your account security and access permissions.
            </p>
          </div>
        );
      case "privacy":
        return (
          <div className="text-center">
            <h2 className="text-4xl font-medium text-black mb-4">
              Data & Privacy
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-normal">
              Control your data privacy and information sharing preferences.
            </p>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-medium text-black mb-4">
              Customize your experience
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-normal">
              Configure your preferences and manage your LeetGuard account
              settings.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex h-screen">
        <Sidebar activePage="settings" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-32 flex items-center px-6">
            <h1 className="text-4xl font-normal text-black">Settings</h1>
          </header>

          {/* Settings Navigation */}
          <nav className="border-b border-gray-200 px-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection("profile")}
                className={`px-3 py-2 transition-colors duration-200 ${
                  activeSection === "profile"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <span className="font-normal text-sm">Personal Profile</span>
              </button>
              <button
                onClick={() => setActiveSection("security")}
                className={`px-3 py-2 transition-colors duration-200 ${
                  activeSection === "security"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <span className="font-normal text-sm">Security & Access</span>
              </button>
              <button
                onClick={() => setActiveSection("privacy")}
                className={`px-3 py-2 transition-colors duration-200 ${
                  activeSection === "privacy"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <span className="font-normal text-sm">Data & Privacy</span>
              </button>
            </div>
          </nav>

          {/* Content Area */}
          <main className="flex-1 p-6">
            <div className="flex justify-center">{renderSectionContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
