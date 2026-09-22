"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Sparkles, X, Coffee, Award, Info } from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  category: "espresso" | "drip" | "pastry" | "elixir";
  price: string;
  origin?: string;
  roastLevel?: number; // 1-5
  flavorNotes: string[];
  description: string;
  pairing?: string;
  elevation?: string;
  process?: string;
  image: string;
  signature?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "gesha-village",
    name: "Ethiopia Gesha Village Reserve",
    category: "drip",
    price: "$14",
    origin: "Bench Maji, Ethiopia",
    roastLevel: 2,
    flavorNotes: ["Jasmine", "Bergamot", "Peach Blossom", "White Honey"],
    description: "Gesha 1931 variety grown at 2,050 meters. Hand-brewed with a Japanese ceramic dripper for a clean, floral cup.",
    pairing: "Pistachio Rose Financier",
    elevation: "2,050m",
    process: "Anaerobic Natural",
    image: "/images/artisan_pour_over.jpg",
    signature: true,
  },
  {
    id: "panama-geisha-espresso",
    name: "Panama Hacienda La Esmeralda",
    category: "espresso",
    price: "$16",
    origin: "Boquete, Panama",
    roastLevel: 2,
    flavorNotes: ["Meyer Lemon", "Wild Jasmine", "Papaya", "Cane Sugar"],
    description: "Extracted as a double shot on brass portafilters. Elegant acidity with a velvety, lingering finish.",
    pairing: "Vanilla Bean Canelé",
    elevation: "1,800m",
    process: "Washed",
    image: "/images/hero_bg.jpg",
    signature: true,
  },
  {
    id: "velvet-obsidian-latte",
    name: "Obsidian Smoked Vanilla Latte",
    category: "espresso",
    price: "$9.50",
    origin: "Blend: Colombia & Guatemala",
    roastLevel: 3,
    flavorNotes: ["Smoked Vanilla", "Dark Chocolate", "Toasted Almond"],
    description: "Espresso with house-made Tahitian vanilla syrup and steamed oat milk.",
    pairing: "Pain au Chocolat",
    elevation: "1,600m",
    process: "Custom Blend",
    image: "/images/coffee_beans.jpg",
    signature: false,
  },
  {
    id: "golden-saffron-elixir",
    name: "Golden Saffron Cardamom Cold Brew",
    category: "elixir",
    price: "$11",
    origin: "Yirgacheffe, Ethiopia",
    roastLevel: 2,
    flavorNotes: ["Persian Saffron", "Cardamom", "Orange Blossom", "Raw Honey"],
    description: "24-hour cold brew infused with Kashmiri saffron threads, cardamom, and sparkling tonic foam.",
    pairing: "Cardamom Orange Madeleine",
    elevation: "1,950m",
    process: "Slow Cold Extraction",
    image: "/images/hero_bg.jpg",
    signature: true,
  },
  {
    id: "pain-au-chocolat-gold",
    name: "24K Gold Leaf Pain au Chocolat",
    category: "pastry",
    price: "$12",
    flavorNotes: ["Valrhona 70% Dark Chocolate", "Normandy Butter", "Flaky Layers"],
    description: "Baked daily using imported French AOP butter and Valrhona 70% dark chocolate callets, finished with gold leaf flakes.",
    pairing: "Panama Geisha Espresso",
    image: "/images/signature_pastry.jpg",
    signature: true,
  },
  {
    id: "colombia-el-paraiso",
    name: "Colombia El Paraiso Thermal Shock",
    category: "drip",
    price: "$15",
    origin: "Cauca, Colombia",
    roastLevel: 2,
    flavorNotes: ["Lychee", "Red Raspberry", "Rose Water", "Bubblegum"],
    description: "Castillo variety subjected to double anaerobic fermentation with thermal shock processing. Exceptionally aromatic.",
    pairing: "Raspberry Almond Tart",
    elevation: "1,930m",
    process: "Thermal Shock Anaerobic",
    image: "/images/artisan_pour_over.jpg",
    signature: true,
  },
  {
    id: "kyoto-drip-cold-brew",
    name: "Kyoto Slow-Drip Dutch Coffee",
    category: "elixir",
    price: "$10",
    origin: "Sumatra Mandheling",
    roastLevel: 4,
    flavorNotes: ["Dark Cocoa", "Cedar", "Pipe Tobacco", "Molasses"],
    description: "Extracted drop by drop over 12 hours using a traditional Dutch cold drip tower. Rich body with low acidity.",
    pairing: "Dark Chocolate Truffle",
    elevation: "1,400m",
    process: "Dutch Tower Cold Drip",
    image: "/images/coffee_beans.jpg",
    signature: false,
  },
  {
    id: "truffle-croissant",
    name: "Savory Truffle & Gruyère Croissant",
    category: "pastry",
    price: "$13.50",
    flavorNotes: ["Black Winter Truffle", "Aged Gruyère", "Smoked Sea Salt"],
    description: "Laminated croissant dough filled with shaved black truffle butter and aged Swiss Gruyère cheese.",
    pairing: "Kyoto Slow-Drip Dutch Coffee",
    image: "/images/signature_pastry.jpg",
    signature: false,
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "espresso" | "drip" | "pastry" | "elixir">("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "drip", label: "Single-Origin Drip" },
    { id: "espresso", label: "Espresso Drinks" },
    { id: "elixir", label: "Cold Brew & Elixirs" },
    { id: "pastry", label: "PATISSERIE" },
  ] as const;

  const allFlavorNotes = Array.from(
    new Set(MENU_ITEMS.flatMap((item) => item.flavorNotes))
  ).slice(0, 10);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesTag = !selectedTag || item.flavorNotes.includes(selectedTag);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.origin && item.origin.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#0c0b0a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase block mb-3">
            Tasting Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf7f2] font-light leading-tight mb-4">
            Coffees & <span className="italic gold-gradient-text font-normal">Patisserie</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#e8dfd3] font-light">
            Every offering is prepared to order using in-house roasted micro-lot coffees and butter from Normandy.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-6 mb-10 sm:mb-12">
          {/* Categories Tabs */}
          <div className="flex justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs tracking-[0.15em] uppercase font-semibold whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                  activeCategory === cat.id
                    ? "gold-gradient-bg text-[#0c0b0a] shadow-[0_0_18px_rgba(197,160,89,0.3)]"
                    : "glass-panel border-[#282420] text-[#e8dfd3] hover:text-[#c5a059]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Flavor Note Tags */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border-[#c5a059]/20">
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee or tasting note..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] placeholder-[#e8dfd3]/50 focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                aria-label="Search menu items by coffee name or flavor"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#e8dfd3] hover:text-[#faf7f2] p-1"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Flavor Note Filter Badges */}
            <div className="flex items-center gap-2 flex-wrap overflow-x-auto w-full md:w-auto">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a059] flex items-center gap-1 shrink-0 font-medium">
                <Filter className="w-3 h-3" /> FILTER BY TASTING NOTE:
              </span>

              {selectedTag && (
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className="px-2.5 py-1 rounded-full bg-[#c5a059] text-[#0c0b0a] text-[11px] font-bold flex items-center gap-1 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                >
                  <span>{selectedTag}</span>
                  <X className="w-3 h-3" />
                </button>
              )}

              {allFlavorNotes.map((note) => (
                <button
                  key={note}
                  type="button"
                  onClick={() => setSelectedTag(selectedTag === note ? null : note)}
                  className={`px-3 py-1 rounded-full text-[11px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                    selectedTag === note
                      ? "bg-[#c5a059] text-[#0c0b0a] font-semibold"
                      : "bg-[#151311] border border-[#282420] text-[#e8dfd3] hover:border-[#c5a059]/40 hover:text-[#c5a059]"
                  }`}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl border-[#282420]">
            <Coffee className="w-10 h-10 text-[#c5a059]/40 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#faf7f2] mb-1">No Offerings Found</h3>
            <p className="text-xs text-[#e8dfd3]">Try adjusting your search query or tasting note filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSelectedTag(null);
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full gold-gradient-bg text-[#0c0b0a] text-xs font-semibold uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group border-[#c5a059]/20"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent opacity-90" />

                    {/* Badge */}
                    {item.signature && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full gold-gradient-bg text-[#0c0b0a] font-semibold text-[10px] tracking-widest uppercase flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        <span>Signature</span>
                      </div>
                    )}

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0c0b0a]/85 backdrop-blur-md border border-[#c5a059]/30 text-sm font-serif text-[#faf7f2] font-semibold">
                      {item.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    {item.origin && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block mb-1 font-medium">
                        {item.origin}
                      </span>
                    )}

                    <h3 className="font-serif text-lg sm:text-xl text-[#faf7f2] font-semibold mb-2 group-hover:text-[#c5a059] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#e8dfd3] leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.description}
                    </p>

                    {/* Flavor Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="px-2.5 py-0.5 rounded-md bg-[#1d1a17] text-[#e8dfd3] text-[10px] border border-[#282420]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="w-full py-2.5 rounded-xl glass-panel border-[#c5a059]/30 text-xs font-semibold tracking-wider text-[#faf7f2] hover:text-[#c5a059] hover:border-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-all flex items-center justify-center gap-2 uppercase"
                    aria-label={`View tasting notes for ${item.name}`}
                  >
                    <Info className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>View Tasting Notes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Item Detail Modal */}
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Tasting Notes: ${selectedItem.name}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0b0a]/85 backdrop-blur-md animate-in fade-in duration-300"
          >
            <div className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border-[#c5a059]/40 relative shadow-2xl animate-in zoom-in-95 duration-300">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0c0b0a]/80 border border-[#c5a059]/40 text-[#faf7f2] flex items-center justify-center hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-colors"
                aria-label="Close Tasting Notes Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-56 md:h-auto min-h-[220px]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent opacity-60" />
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {selectedItem.origin && (
                      <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] block mb-1 font-medium">
                        {selectedItem.origin}
                      </span>
                    )}

                    <h3 className="font-serif text-xl sm:text-2xl text-[#faf7f2] font-semibold mb-2">
                      {selectedItem.name}
                    </h3>

                    <div className="text-lg sm:text-xl font-serif text-[#c5a059] font-bold mb-3">
                      {selectedItem.price}
                    </div>

                    <p className="text-xs text-[#e8dfd3] leading-relaxed mb-5 font-light">
                      {selectedItem.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#1d1a17] border border-[#282420] mb-5 text-xs">
                      {selectedItem.process && (
                        <div>
                          <span className="text-[10px] text-[#c5a059] uppercase block font-medium">Process</span>
                          <span className="text-[#faf7f2]">{selectedItem.process}</span>
                        </div>
                      )}

                      {selectedItem.elevation && (
                        <div>
                          <span className="text-[10px] text-[#c5a059] uppercase block font-medium">Elevation</span>
                          <span className="text-[#faf7f2]">{selectedItem.elevation}</span>
                        </div>
                      )}

                      {selectedItem.roastLevel && (
                        <div className="col-span-2">
                          <span className="text-[10px] text-[#c5a059] uppercase block mb-1 font-medium">
                            Roast Profile (Level {selectedItem.roastLevel}/5)
                          </span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((lvl) => (
                              <div
                                key={lvl}
                                className={`h-1.5 flex-1 rounded-full ${
                                  lvl <= (selectedItem.roastLevel || 0)
                                    ? "bg-[#c5a059]"
                                    : "bg-[#282420]"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pairing */}
                    {selectedItem.pairing && (
                      <div className="p-3 rounded-xl bg-[#1d1a17]/60 border border-[#c5a059]/20 flex items-center gap-3">
                        <Award className="w-4 h-4 text-[#c5a059] shrink-0" />
                        <div className="text-xs">
                          <span className="text-[10px] text-[#c5a059] uppercase block font-medium">Recommended Pairing</span>
                          <span className="text-[#faf7f2] font-serif">{selectedItem.pairing}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="w-full mt-6 py-3 rounded-xl gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-widest uppercase hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-transform"
                  >
                    Close Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
