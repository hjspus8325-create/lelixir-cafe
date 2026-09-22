"use client";

import { useState, useEffect } from "react";
import { Coffee, Calendar, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Coffee Sommelier", href: "#sommelier" },
    { name: "Locations", href: "#locations" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0b0a]/92 backdrop-blur-lg py-3.5 border-b border-[#c5a059]/20 shadow-2xl"
          : "bg-gradient-to-b from-[#0c0b0a]/90 via-[#0c0b0a]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-lg p-1"
          aria-label="L'ÉLIXIR Specialty Roastery Homepage"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-[#151311] group-hover:border-[#c5a059] transition-colors duration-300">
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a059]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.25em] text-[#faf7f2] font-semibold block uppercase">
              L'ÉLIXIR
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-[#c5a059] block uppercase -mt-1 font-medium">
              Specialty Roastery
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm tracking-[0.15em] text-[#e8dfd3] hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-md px-1 transition-colors duration-300 uppercase font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA & Open Indicator */}
        <div className="hidden md:flex items-center gap-5">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151311] border border-[#282420] text-xs text-[#e8dfd3]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-[11px] font-medium">Open Now</span>
          </div>

          <button
            type="button"
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-[0.15em] uppercase hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-all duration-300 hover:scale-[1.02]"
            aria-label="Book a Table Reservation"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#faf7f2] hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-lg transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden glass-panel mt-3 mx-4 p-6 rounded-2xl flex flex-col gap-5 border-[#c5a059]/30 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-300"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#282420]">
            <span className="text-xs tracking-[0.2em] uppercase text-[#c5a059] font-semibold">
              Navigation
            </span>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#151311] text-[10px] text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open Cafe</span>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base tracking-[0.1em] text-[#faf7f2] hover:text-[#c5a059] uppercase transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-md"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-[0.15em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
        </div>
      )}
    </header>
  );
}
