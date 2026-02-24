"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Places to Visit", href: "/places-to-visit" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/20 backdrop-blur-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white group">
            <h1 className="text-2xl font-cinzel tracking-[0.25em] font-semibold">AZURA</h1>
            <span className="text-[9px] font-montserrat tracking-[0.35em] uppercase block text-[#C1A87D] group-hover:text-white transition-colors duration-300">
              The Water View Resort
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[11px] font-montserrat tracking-[0.2em] uppercase transition-colors duration-300 ${isActive
                      ? "text-[#C1A87D]"
                      : "text-white/70 hover:text-[#C1A87D]"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C1A87D]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden md:block text-[10px] font-montserrat font-medium tracking-[0.2em] text-white uppercase border border-white/30 px-7 py-2.5 hover:bg-white/10 hover:border-white/50 transition-all duration-400"
            >
              Book Now
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-[#C1A87D] transition-colors flex items-center gap-2 group lg:hidden"
              aria-label="Open Menu"
            >
              <AlignJustify size={26} strokeWidth={1.2} />
            </button>
          </div>
        </div>

        {/* Subtle bottom line when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        )}
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
