"use client";

import { useState } from "react";
import { X, Calendar, Clock, Users, CheckCircle2 } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("2026-09-25");
  const [time, setTime] = useState("14:30");
  const [seating, setSeating] = useState("Bar Counter");
  const [location, setLocation] = useState("Flagship Roastery & Cafe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    setName("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0b0a]/85 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="glass-panel max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border-[#c5a059]/40 relative shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#e8dfd3] hover:text-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-colors p-1 rounded-md"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            {/* Title Header */}
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] block mb-1 font-semibold">
                Table Reservation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf7f2] font-semibold">
                Reserve Your Coffee Tasting
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Location Select */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                  Cafe Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                >
                  <option value="Flagship Roastery & Cafe">Flagship Roastery & Cafe</option>
                  <option value="The Conservatory & Garden">The Conservatory & Garden</option>
                  <option value="Financial District Espresso Bar">Financial District Espresso Bar</option>
                </select>
              </div>

              {/* Grid: Guests, Date, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Guests */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="w-3.5 h-3.5 text-[#c5a059] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6+ Guests Salon</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="14:30">02:30 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:30">06:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                  Seating Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Bar Counter", "Garden Patio", "Cupping Room"].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSeating(area)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-medium border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                        seating === area
                          ? "bg-[#1d1a17] border-[#c5a059] text-[#c5a059]"
                          : "bg-[#151311] border-[#282420] text-[#e8dfd3]"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Julian Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] placeholder-[#e8dfd3]/40 focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="julian@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] placeholder-[#e8dfd3]/40 focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Dietary requirements or celebratory occasion..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151311] border border-[#282420] text-xs text-[#faf7f2] placeholder-[#e8dfd3]/40 focus:outline-none focus:border-[#c5a059] focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-[0.2em] uppercase hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-transform mt-4"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full gold-gradient-bg text-[#0c0b0a] flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(197,160,89,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] block mb-1 font-semibold">
              Reservation Confirmed
            </span>
            <h3 className="font-serif text-2xl text-[#faf7f2] font-semibold mb-2">
              We Look Forward to Welcoming You
            </h3>

            <p className="text-xs text-[#e8dfd3] max-w-sm mx-auto mb-6">
              A confirmation email has been dispatched to <span className="text-[#c5a059]">{email || "your email"}</span>.
            </p>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-[#151311] border border-[#c5a059]/30 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
              <div className="flex justify-between text-[#e8dfd3]">
                <span>Booking ID:</span>
                <span className="font-mono text-[#c5a059]">#ELX-8942</span>
              </div>
              <div className="flex justify-between text-[#e8dfd3]">
                <span>Guest Name:</span>
                <span className="text-[#faf7f2]">{name || "Valued Guest"}</span>
              </div>
              <div className="flex justify-between text-[#e8dfd3]">
                <span>Date & Time:</span>
                <span className="text-[#faf7f2]">{date} at {time}</span>
              </div>
              <div className="flex justify-between text-[#e8dfd3]">
                <span>Location & Seating:</span>
                <span className="text-[#faf7f2]">{seating} ({guests} Guests)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 rounded-full gold-gradient-bg text-[#0c0b0a] font-semibold text-xs tracking-widest uppercase hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] transition-transform"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
