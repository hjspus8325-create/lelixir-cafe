"use client";

import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface Recommendation {
  title: string;
  subTitle: string;
  desc: string;
  notes: string[];
  roast: string;
  grind: string;
  tip: string;
  image: string;
}

export default function BeanSommelier() {
  const [flavor, setFlavor] = useState<string | null>(null);
  const [brew, setBrew] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<string | null>(null);
  const [result, setResult] = useState<Recommendation | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const flavorOptions = [
    { id: "floral", label: "Floral & Citrus", desc: "Jasmine, Bergamot, Lemongrass" },
    { id: "chocolate", label: "Dark Cocoa & Nutty", desc: "70% Dark Chocolate, Hazelnut, Caramel" },
    { id: "berry", label: "Berry & Winey", desc: "Blackberry, Lychee, Red Wine Notes" },
    { id: "creamy", label: "Vanilla & Cream", desc: "Butterscotch, Sweet Vanilla, Milk Chocolate" },
  ];

  const brewOptions = [
    { id: "pourover", label: "Hand Pour Over (V60)", desc: "Clean body, high clarity" },
    { id: "espresso", label: "Espresso", desc: "Concentrated, rich crema" },
    { id: "colddrip", label: "Kyoto Cold Drip", desc: "Silky texture, low acidity" },
  ];

  const timeOptions = [
    { id: "morning", label: "Morning Awakening" },
    { id: "afternoon", label: "Midday Tasting Ritual" },
    { id: "evening", label: "Evening Digestif (Low Acid)" },
  ];

  const calculateRecommendation = () => {
    if (!flavor || !brew) return;

    if (flavor === "floral") {
      setResult({
        title: "Ethiopia Gesha Village 1931",
        subTitle: "Bench Maji Zone • 2,050m Altitude",
        desc: "An ethereal pour-overs brimming with white jasmine aromatics and bergamot sparkle. Prepared precisely to highlight single-variety clarity.",
        notes: ["Jasmine", "Bergamot", "Peach Blossom", "White Honey"],
        roast: "Light Nordic Roast",
        grind: "Medium-Fine (600 µm)",
        tip: "Pour 92°C water in 3 concentric spiral pulses for peak floral extraction.",
        image: "/images/artisan_pour_over.jpg",
      });
    } else if (flavor === "chocolate") {
      setResult({
        title: "Panama Hacienda La Esmeralda Reserve",
        subTitle: "Boquete Valley • 1,800m Altitude",
        desc: "Deep rich dark cocoa core balanced by caramelized almonds and a velvety round mouthfeel.",
        notes: ["Dark Cocoa", "Roasted Almond", "Brown Sugar", "Spiced Plum"],
        roast: "Medium Craft Roast",
        grind: "Fine Espresso (250 µm)",
        tip: "Extract 18g in, 36g out in 28 seconds under 9 bar pressure.",
        image: "/images/coffee_beans.jpg",
      });
    } else if (flavor === "berry") {
      setResult({
        title: "Colombia El Paraiso Thermal Shock",
        subTitle: "Cauca Region • 1,930m Altitude",
        desc: "An exotic flavor profile bursting with fresh red raspberries, lychee nectar, and delicate rose water aroma.",
        notes: ["Red Raspberry", "Lychee", "Rose Water", "Wild Honey"],
        roast: "Light-Medium Roast",
        grind: "Medium (750 µm)",
        tip: "Allow coffee to cool for 2 minutes post-brew to unlock wild fruit aromatics.",
        image: "/images/artisan_pour_over.jpg",
      });
    } else {
      setResult({
        title: "L'ÉLIXIR Obsidian Signature Blend",
        subTitle: "Guatemala & Colombia Micro-Lot",
        desc: "Smooth balanced cup with silky butterscotch tones and a Tahitian vanilla finish.",
        notes: ["Butterscotch", "Smoked Vanilla", "Toasted Pecan"],
        roast: "Medium-Dark Roast",
        grind: "Medium-Coarse (850 µm)",
        tip: "Pair with micro-foamed oat milk or enjoy neat over solid ice crystal.",
        image: "/images/hero_bg.jpg",
      });
    }
  };

  const handleReset = () => {
    setFlavor(null);
    setBrew(null);
    setTimeOfDay(null);
    setResult(null);
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="sommelier" className="py-16 sm:py-24 bg-[#0c0b0a] relative scroll-mt-36 md:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUpVariants}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-4 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coffee Finder</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf7f2] font-light leading-tight mb-4">
            Bean <span className="italic gold-gradient-text font-normal">Sommelier</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#e8dfd3] font-light">
            Answer three quick questions about your preferences to discover a personalized single-origin recommendation.
          </p>
        </motion.div>

        {/* Sommelier Wizard Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUpVariants}
          className="glass-panel p-6 sm:p-10 rounded-3xl border-[#c5a059]/30 shadow-2xl relative"
        >
          {!result ? (
            <div className="space-y-8 sm:space-y-10">
              {/* Step 1 */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059] text-[#0c0b0a] flex items-center justify-center text-[10px] font-bold">1</span>
                  Select Desired Tasting Notes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flavorOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFlavor(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                        flavor === opt.id
                          ? "bg-[#1d1a17] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]"
                          : "bg-[#151311] border-[#282420] hover:border-[#c5a059]/40"
                      }`}
                    >
                      <div className="text-sm font-semibold text-[#faf7f2]">{opt.label}</div>
                      <div className="text-xs text-[#e8dfd3]/80 mt-1 font-light">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059] text-[#0c0b0a] flex items-center justify-center text-[10px] font-bold">2</span>
                  Select Brewing Style
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {brewOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBrew(opt.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                        brew === opt.id
                          ? "bg-[#1d1a17] border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]"
                          : "bg-[#151311] border-[#282420] hover:border-[#c5a059]/40"
                      }`}
                    >
                      <div className="text-sm font-semibold text-[#faf7f2]">{opt.label}</div>
                      <div className="text-xs text-[#e8dfd3]/80 mt-1 font-light">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-4 flex items-center gap-2 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059] text-[#0c0b0a] flex items-center justify-center text-[10px] font-bold">3</span>
                  Time of Day
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTimeOfDay(opt.id)}
                      className={`p-3.5 rounded-2xl text-center border text-xs font-semibold tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                        timeOfDay === opt.id
                          ? "bg-[#1d1a17] border-[#c5a059] text-[#c5a059]"
                          : "bg-[#151311] border-[#282420] text-[#e8dfd3] hover:border-[#c5a059]/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="button"
                disabled={!flavor || !brew}
                onClick={calculateRecommendation}
                className={`w-full py-4 rounded-2xl text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                  flavor && brew
                    ? "gold-gradient-bg text-[#0c0b0a] hover:scale-[1.01] shadow-lg cursor-pointer"
                    : "bg-[#282420] text-[#e8dfd3]/40 cursor-not-allowed"
                }`}
              >
                Discover Your Recommendation
              </button>
            </div>
          ) : (
            /* Result Card */
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center justify-between pb-6 border-b border-[#282420] mb-6">
                <div className="flex items-center gap-2 text-xs text-[#c5a059] uppercase tracking-widest font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Sommelier Recommendation</span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs text-[#e8dfd3] hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-md p-1 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Result Image */}
                <div className="relative h-52 sm:h-72 rounded-2xl overflow-hidden glass-panel border-[#c5a059]/30">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-transparent to-transparent opacity-70" />
                </div>

                {/* Result Details */}
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] block mb-1 font-medium">
                    {result.subTitle}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#faf7f2] font-semibold mb-3">
                    {result.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#e8dfd3] leading-relaxed mb-5 font-light">
                    {result.desc}
                  </p>

                  {/* Flavor badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {result.notes.map((n) => (
                      <span
                        key={n}
                        className="px-3 py-1 rounded-full bg-[#1d1a17] text-[#c5a059] text-xs border border-[#c5a059]/30"
                      >
                        {n}
                      </span>
                    ))}
                  </div>

                  {/* Barista Specs */}
                  <div className="space-y-2.5 p-4 rounded-xl bg-[#151311] border border-[#282420] text-xs mb-6">
                    <div className="flex justify-between text-[#e8dfd3]">
                      <span>Roast Level:</span>
                      <span className="text-[#faf7f2] font-medium">{result.roast}</span>
                    </div>
                    <div className="flex justify-between text-[#e8dfd3]">
                      <span>Recommended Grind:</span>
                      <span className="text-[#faf7f2] font-medium">{result.grind}</span>
                    </div>
                    <div className="pt-2 border-t border-[#282420] text-[#c5a059] italic text-[11px]">
                      💡 Barista Tip: {result.tip}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
