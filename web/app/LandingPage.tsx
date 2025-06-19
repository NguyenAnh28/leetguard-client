"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}
