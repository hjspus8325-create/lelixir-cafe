"use client";

import { Sparkles, ArrowRight, Compass, Award, Flame } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="L'ÉLIXIR Cafe Interior"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/75 to-[#0c0b0a]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0b0a_90%)]" />
      </div>

      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#c5a059]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border-[#c5a059]/30 text-[10px] sm:text-xs text-[#c5a059] tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8 shadow-xl flex-wrap">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c5a059] shrink-0" />
          <span className="font-medium">Single-Origin Reserve</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a059] hidden sm:inline-block" />
          <span className="text-[#faf7f2]/90 font-light">Ethiopia Gesha Village 1931</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#faf7f2] tracking-wide leading-[1.18] sm:leading-[1.15] max-w-4xl mb-5 sm:mb-6">
          Crafting Exceptional Flavor in <span className="italic font-normal gold-gradient-text">Every Pour</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#e8dfd3] max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 tracking-wide">
          A refined destination for rare single-origin coffees, precision pour-overs, and handcrafted French patisserie. Created for those who appreciate exceptional coffee.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-6 mb-12 sm:mb-16 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-[0.18em] uppercase hover:shadow-[0_0_30px_rgba(197,160,89,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5"
            aria-label="Explore Tasting Menu"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full glass-panel border-[#c5a059]/40 text-[#faf7f2] hover:text-[#c5a059] font-semibold text-xs tracking-[0.18em] uppercase hover:border-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-all duration-300 flex items-center justify-center gap-2.5"
            aria-label="Reserve a Table"
          >
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Highlights Stat Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-3xl pt-8 sm:pt-10 border-t border-[#282420]">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Compass className="w-4 h-4" />
              <span className="font-serif text-2xl font-semibold text-[#faf7f2]">100%</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#e8dfd3]/90 uppercase tracking-widest font-light text-center">
              100% DIRECT-TRADE, SINGLE-ORIGIN COFFEE
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Award className="w-4 h-4" />
              <span className="font-serif text-2xl font-semibold text-[#faf7f2]">92+</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#e8dfd3]/90 uppercase tracking-widest font-light text-center">
              92+ CUPPING SCORE
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Flame className="w-4 h-4" />
              <span className="font-serif text-2xl font-semibold text-[#faf7f2]">Probat</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#e8dfd3]/90 uppercase tracking-widest font-light text-center">
              PROBAT DRUM ROASTING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
