"use client";

import { useState } from "react";
import Image from "next/image";
import { Droplet, Sun, Flame, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"sourcing" | "roasting" | "craft">("sourcing");
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const tabContent = {
    sourcing: {
      title: "Ethical Direct-Trade Sourcing",
      desc: "We forge long-term relationships with smallholder family estates in Yirgacheffe, Huila, and Boquete. Every harvest is hand-picked at peak ripeness to preserve distinct terroir characteristics.",
      features: [
        "100% Traceable Single-Estate Harvests",
        "High-altitude lots selected for clarity and sweetness",
        "Regenerative organic farming practices",
      ],
      image: "/images/coffee_beans.jpg",
    },
    roasting: {
      title: "Individual Roast Profiling",
      desc: "We tailor individual roast profiles for every micro-lot, preserving floral aromatics and delicate fruit notes while maintaining clarity and balance.",
      features: [
        "Light-to-Medium roast profiles for origin clarity",
        "Real-time thermal airflow tracking",
        "Rested for 7–14 days after roasting for optimal development",
      ],
      image: "/images/artisan_pour_over.jpg",
    },
    craft: {
      title: "Remineralized Water & Extraction",
      desc: "Our baristas use custom remineralized water at 120 ppm, tailored to each coffee's density and roast profile for a balanced extraction.",
      features: [
        "Reverse-osmosis filtration with custom mineral mix",
        "Refractometer-based TDS measurements for consistent extraction",
        "Custom Japanese ceramic drippers",
      ],
      image: "/images/signature_pastry.jpg",
    },
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
    <section id="story" className="py-16 sm:py-24 bg-[#0c0b0a] relative overflow-hidden scroll-mt-36 md:scroll-mt-28">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#c5a059]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUpVariants}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase block mb-3">
            Our Heritage & Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf7f2] font-light leading-tight">
            Direct Sourcing & <span className="italic gold-gradient-text font-normal">Thoughtful Roasting</span>
          </h2>
        </motion.div>

        {/* Tab Selection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUpVariants}
          className="flex justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-14 flex-wrap"
        >
          {(["sourcing", "roasting", "craft"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                activeTab === tab
                  ? "gold-gradient-bg text-[#0c0b0a] shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                  : "glass-panel border-[#282420] text-[#e8dfd3] hover:text-[#c5a059]"
              }`}
            >
              {tab === "sourcing" && "Direct Sourcing"}
              {tab === "roasting" && "Micro Roasting"}
              {tab === "craft" && "Water & Craft"}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Content Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUpVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Text Box */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#c5a059]/20 relative">
            <div className="w-12 h-12 rounded-2xl bg-[#151311] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-6">
              {activeTab === "sourcing" && <Sun className="w-6 h-6" />}
              {activeTab === "roasting" && <Flame className="w-6 h-6" />}
              {activeTab === "craft" && <Droplet className="w-6 h-6" />}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#faf7f2] mb-4 font-semibold">
              {tabContent[activeTab].title}
            </h3>

            <p className="text-sm sm:text-base text-[#e8dfd3] leading-relaxed mb-6 font-light">
              {tabContent[activeTab].desc}
            </p>

            {/* Mobile collapsible view */}
            <div className={`sm:block ${isExpandedMobile ? "block" : "hidden sm:block"}`}>
              <ul className="space-y-3 mb-8">
                {tabContent[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#faf7f2]">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <div className="pt-6 border-t border-[#282420] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#151311] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-sm shrink-0">
                  ÉR
                </div>
                <div>
                  <p className="text-xs italic text-[#e8dfd3]">
                    "Coffee is not merely a beverage; it is an expression of geography, soil, and human care."
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-[#c5a059] uppercase tracking-wider block mt-0.5 font-medium">
                    Émile Rivoire — Head Roaster
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Read More Toggle Button */}
            <button
              type="button"
              onClick={() => setIsExpandedMobile(!isExpandedMobile)}
              className="sm:hidden w-full mt-2 pt-3 border-t border-[#282420] text-xs text-[#c5a059] flex items-center justify-center gap-1.5 font-medium uppercase tracking-wider"
            >
              <span>{isExpandedMobile ? "Show Less" : "Read Full Story"}</span>
              {isExpandedMobile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Visual Card */}
          <div className="relative h-64 sm:h-[480px] rounded-3xl overflow-hidden glass-panel border-[#c5a059]/20 group">
            <Image
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-transparent to-transparent opacity-80" />

            {/* Overlay Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 glass-panel rounded-2xl border-[#c5a059]/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] block font-medium">
                  Roasting Standard
                </span>
                <span className="text-xs sm:text-sm font-serif text-[#faf7f2] font-semibold">
                  Zero Artificial Flavors or Additives
                </span>
              </div>
              <Sparkles className="w-5 h-5 text-[#c5a059] shrink-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
