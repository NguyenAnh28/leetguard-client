"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="pt-24 pb-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-4xl font-medium italic text-white dark:text-white leading-relaxed mb-8">
          "Finally locked in."
        </blockquote>
        <Link href="/why-it-matters">
          <button className="inline-flex items-center justify-center px-6 py-3 h-12 rounded-lg bg-black text-white text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/50 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/30">
            <span>Why It Matters</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
}
