import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'ÉLIXIR | Single-Origin Coffee Roastery & Cafe",
  description: "Experience single-origin coffees, pour-overs, and handcrafted French pastries in a refined setting.",
  keywords: ["cafe", "roastery", "specialty coffee", "pour over", "single origin", "l'elixir"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0b0a] text-[#e5ded4] selection:bg-[#c5a059] selection:text-[#0c0b0a]">
        {children}
      </body>
    </html>
  );
}
