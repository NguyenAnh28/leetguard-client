"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Shield,
  Clock,
  Settings,
  HelpCircle,
  User,
  Lock,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  activePage?:
    | "dashboard"
    | "activity"
    | "blocklist"
    | "focus"
    | "settings"
    | "settings-profile"
    | "settings-security"
    | "settings-data";
}

export default function Sidebar({ activePage = "dashboard" }: SidebarProps) {
  const [settingsExpanded, setSettingsExpanded] = useState(
    activePage === "settings" ||
      activePage === "settings-profile" ||
      activePage === "settings-security" ||
      activePage === "settings-data"
  );

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image
            src="/leetguard-logo-black.svg"
            alt="LeetGuard Logo"
            width={32}
            height={32}
          />
          <span className="text-2xl font-normal text-black">LeetGuard</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <Link
            href="/activity"
            className={`flex items-center space-x-3 px-3 py-2 text-black rounded-lg transition-colors duration-200 ${
              activePage === "activity" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Activity className="w-5 h-5" />
            <span className="font-normal text-sm">My Activity</span>
          </Link>
          <Link
            href="/blocklist"
            className={`flex items-center space-x-3 px-3 py-2 text-black rounded-lg transition-colors duration-200 ${
              activePage === "blocklist" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Shield className="w-5 h-5" />
            <span className="font-normal text-sm">Block List</span>
          </Link>
          <Link
            href="/focus"
            className={`flex items-center space-x-3 px-3 py-2 text-black rounded-lg transition-colors duration-200 ${
              activePage === "focus" ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            <Clock className="w-5 h-5" />
            <span className="font-normal text-sm">Focus Sessions</span>
          </Link>

          {/* Settings with expandable subcategories */}
          <div>
            <Link
              href="/settings"
              className={`w-full flex items-center space-x-3 px-3 py-2 text-black rounded-lg transition-colors duration-200 ${
                activePage === "settings" ||
                activePage === "settings-profile" ||
                activePage === "settings-security" ||
                activePage === "settings-data"
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="font-normal text-sm">Settings</span>
            </Link>

            {settingsExpanded && (
              <div className="ml-8 mt-2 space-y-1">
                <Link
                  href="/settings"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activePage === "settings" ||
                    activePage === "settings-profile"
                      ? "bg-gray-100 text-black"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="font-normal text-xs">Personal Profile</span>
                </Link>
                <Link
                  href="/settings/security"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activePage === "settings-security"
                      ? "bg-gray-100 text-black"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  <span className="font-normal text-xs">Security & Access</span>
                </Link>
                <Link
                  href="/settings/data"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activePage === "settings-data"
                      ? "bg-gray-100 text-black"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span className="font-normal text-xs">Data & Privacy</span>
                </Link>
                <Link
                  href="/signout"
                  className="flex items-center space-x-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-normal text-xs">Sign Out</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Help Center */}
      <div className="p-4">
        <Link
          href="#"
          className="flex items-center space-x-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-normal text-sm">Help Center</span>
        </Link>
      </div>

      {/* Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-black truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">
              john.doe@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
