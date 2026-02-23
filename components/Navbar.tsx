"use client";

import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/10 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white group">
            <h1 className="text-2xl font-cinzel tracking-[0.2em] font-bold">AZURA</h1>
            <span className="text-[10px] font-montserrat tracking-[0.3em] uppercase block opacity-80 group-hover:opacity-100 transition-opacity">
              The Water View Resort
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button
              className="hidden md:block text-xs font-montserrat font-medium tracking-[0.2em] text-white uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Your Stay
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-white/80 transition-colors flex items-center gap-2 group"
              aria-label="Open Menu"
            >
              <span className="hidden md:block text-xs font-montserrat font-medium tracking-[0.2em] uppercase group-hover:opacity-70 transition-opacity">Menu</span>
              <AlignJustify size={28} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
