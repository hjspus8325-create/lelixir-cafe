"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Sparkles, Navigation, CheckCircle } from "lucide-react";
import Image from "next/image";

interface Location {
  id: string;
  name: string;
  tag: string;
  address: string;
  hours: string;
  phone: string;
  amenities: string[];
  image: string;
  mapCoordinates: string;
}

const LOCATIONS: Location[] = [
  {
    id: "flagship",
    name: "Flagship Roastery & Cafe",
    tag: "Roastery & Tasting Room",
    address: "742 Haute Avenue, Roastery District",
    hours: "Mon – Sun: 07:30 AM – 09:00 PM",
    phone: "+1 (555) 019-8234",
    amenities: ["Probat Drum Roaster", "Custom Espresso Bar", "Private Cupping Room", "Valet Parking"],
    image: "/images/hero_bg.jpg",
    mapCoordinates: "37.7749,-122.4194",
  },
  {
    id: "garden",
    name: "The Conservatory & Garden",
    tag: "Garden Courtyard",
    address: "108 Botanical Lane, Glasshouse Courtyard",
    hours: "Tue – Sun: 08:00 AM – 08:00 PM",
    phone: "+1 (555) 019-8892",
    amenities: ["Outdoor Glass Solarium", "Hand-Drip Bar", "Fresh Bakery Counter", "Patio Seating"],
    image: "/images/artisan_pour_over.jpg",
    mapCoordinates: "37.7833,-122.4167",
  },
  {
    id: "downtown",
    name: "Financial District Espresso Bar",
    tag: "Espresso Bar",
    address: "450 Financial Center Way, Plaza Level",
    hours: "Mon – Fri: 06:30 AM – 06:00 PM",
    phone: "+1 (555) 019-9921",
    amenities: ["Kyoto Cold Drip Towers", "Pre-Order Collection", "Standing Bar Counter"],
    image: "/images/coffee_beans.jpg",
    mapCoordinates: "37.7900,-122.4000",
  },
];

export default function Locations() {
  const [selectedLoc, setSelectedLoc] = useState<Location>(LOCATIONS[0]);

  return (
    <section id="locations" className="py-20 sm:py-24 bg-[#0c0b0a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase block mb-3">
            Our Locations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf7f2] font-light leading-tight mb-4">
            Visit Our <span className="italic gold-gradient-text font-normal">Cafes</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#e8dfd3] font-light">
            Designed as calm, welcoming spaces to pause and enjoy exceptional coffee.
          </p>
        </div>

        {/* Multi-Location Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelectedLoc(loc)}
              className={`glass-panel p-6 rounded-3xl cursor-pointer text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                selectedLoc.id === loc.id
                  ? "border-[#c5a059] bg-[#1a1715] shadow-[0_0_25px_rgba(197,160,89,0.2)]"
                  : "border-[#282420] hover:border-[#c5a059]/40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                  {loc.tag}
                </span>
                {selectedLoc.id === loc.id && (
                  <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
                )}
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#faf7f2] font-semibold mb-3">
                {loc.name}
              </h3>

              <div className="space-y-2 text-xs text-[#e8dfd3]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Location Feature Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#c5a059]/30 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Image */}
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden glass-panel border-[#282420]">
            <Image
              src={selectedLoc.image}
              alt={selectedLoc.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-transparent to-transparent opacity-60" />

            {/* Status overlay */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full glass-panel border-[#c5a059]/40 flex items-center gap-2 text-xs text-[#faf7f2]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">Open Today</span>
            </div>
          </div>

          {/* Details & Amenities */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] block mb-2 font-medium">
              Location Details
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#faf7f2] font-semibold mb-4">
              {selectedLoc.name}
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#e8dfd3] mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{selectedLoc.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{selectedLoc.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{selectedLoc.phone}</span>
              </div>
            </div>

            {/* Amenities list */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#c5a059] mb-3 font-semibold">
                Cafe Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedLoc.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#faf7f2]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(selectedLoc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-widest uppercase hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-transform"
              aria-label={`Get directions to ${selectedLoc.name}`}
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
