"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuSection from "@/components/MenuSection";
import BeanSommelier from "@/components/BeanSommelier";
import Locations from "@/components/Locations";
import ReservationModal from "@/components/ReservationModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#e5ded4] relative selection:bg-[#c5a059] selection:text-[#0c0b0a]">
      {/* Navigation Bar */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Brand Story & Heritage */}
      <Story />

      {/* Tasting Menu Section */}
      <MenuSection />

      {/* Interactive AI Bean Sommelier */}
      <BeanSommelier />

      {/* Atelier Locations */}
      <Locations />

      {/* Footer */}
      <Footer />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </main>
  );
}
