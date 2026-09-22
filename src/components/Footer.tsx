"use client";

import { useState } from "react";
import { Coffee, ArrowRight, Globe, Share2, Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#080706] border-t border-[#282420] pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-[#151311]">
                <Coffee className="w-4 h-4 text-[#c5a059]" />
              </div>
              <span className="font-serif text-xl tracking-[0.25em] text-[#faf7f2] font-semibold uppercase">
                L'ÉLIXIR
              </span>
            </div>

            <p className="text-xs text-[#e8dfd3] leading-relaxed font-light">
              A specialty roastery and cafe dedicated to rare single-origin coffees, pour-overs, and French patisserie.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] hover:border-[#c5a059] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                aria-label="L'ÉLIXIR Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] hover:border-[#c5a059] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                aria-label="Share Portfolio"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] hover:border-[#c5a059] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                aria-label="Contact Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#e8dfd3]">
              <li>
                <a href="#story" className="hover:text-[#c5a059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">
                  Our Heritage & Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#c5a059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">
                  Single-Origin Tasting Menu
                </a>
              </li>
              <li>
                <a href="#sommelier" className="hover:text-[#c5a059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">
                  Coffee Sommelier
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#c5a059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">
                  Locations & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase mb-4">
              Cafe Hours
            </h4>
            <div className="space-y-2 text-xs text-[#e8dfd3]">
              <div className="flex justify-between border-b border-[#1c1916] pb-1.5">
                <span>Mon – Thu</span>
                <span className="text-[#faf7f2]">07:30 AM – 09:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1916] pb-1.5">
                <span>Fri – Sat</span>
                <span className="text-[#faf7f2]">07:30 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1916] pb-1.5">
                <span>Sunday</span>
                <span className="text-[#faf7f2]">08:00 AM – 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter Gazette */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase mb-4">
              The Roastery Newsletter
            </h4>
            <p className="text-xs text-[#e8dfd3] mb-4 font-light">
              Receive invitations to private cuppings, micro-lot releases, and limited reserve drops.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 p-3 rounded-xl bg-[#151311] border border-emerald-500/30 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You have been added to the guest list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] placeholder-[#e8dfd3]/40 focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg gold-gradient-bg text-[#0c0b0a] flex items-center justify-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-transform"
                  aria-label="Subscribe to Roastery Newsletter"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#1c1916] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8dfd3]/70 font-light">
          <p>© {new Date().getFullYear()} L'ÉLIXIR Roastery & Cafe. Concept project — fictional brand and location.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">Terms of Service</a>
            <a href="#" className="hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-sm">Cupping Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
