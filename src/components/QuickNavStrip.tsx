"use client";

import { Coffee, MapPin, BookOpen, Calendar } from "lucide-react";

interface QuickNavStripProps {
  onOpenReservation: () => void;
}

export default function QuickNavStrip({ onOpenReservation }: QuickNavStripProps) {
  return (
    <div className="md:hidden sticky top-[68px] z-40 bg-[#0c0b0a]/90 backdrop-blur-md py-2.5 px-4 border-y border-[#c5a059]/20 shadow-lg">
      <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium shrink-0 pl-1">
          Jump to:
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#menu"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] text-[11px] font-medium tracking-wide uppercase transition-colors"
          >
            <Coffee className="w-3 h-3 text-[#c5a059]" />
            <span>Menu</span>
          </a>

          <a
            href="#story"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] text-[11px] font-medium tracking-wide uppercase transition-colors"
          >
            <BookOpen className="w-3 h-3 text-[#c5a059]" />
            <span>Story</span>
          </a>

          <a
            href="#locations"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:text-[#c5a059] text-[11px] font-medium tracking-wide uppercase transition-colors"
          >
            <MapPin className="w-3 h-3 text-[#c5a059]" />
            <span>Locations</span>
          </a>

          <button
            type="button"
            onClick={onOpenReservation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full gold-gradient-bg text-[#0c0b0a] text-[11px] font-semibold tracking-wide uppercase shadow-md transition-transform hover:scale-105"
          >
            <Calendar className="w-3 h-3" />
            <span>Reserve</span>
          </button>
        </div>
      </div>
    </div>
  );
}
