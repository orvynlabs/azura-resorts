"use client";

import { X, Phone, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "EXPERIENCES", href: "/experiences" },
  { name: "GALLERY", href: "/gallery" },
  { name: "PLACES TO VISIT", href: "/places-to-visit" },
  { name: "CONTACT", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center bg-black/95 text-white p-6"
        >
          {/* Header */}
          <div className="w-full flex justify-between items-center mb-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-cinzel tracking-[0.2em] border-b border-white pb-1 mb-1">AZURA</div>
              <span className="text-[10px] font-montserrat tracking-[0.3em] uppercase">The Water View Resort</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>

            <button className="px-6 py-2 border border-white rounded-full text-sm font-montserrat tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
              BOOK NOW
            </button>
          </div>

          <div className="w-full h-px bg-white/20 mb-8" />

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 mb-auto overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-montserrat tracking-[0.3em] font-light hover:text-[#C1A87D] transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="w-full h-px bg-white/20 my-8" />

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4 mb-8 text-sm font-montserrat font-light">
            <a href="tel:18008913090" className="flex items-center space-x-2 hover:text-[#C1A87D] transition-colors">
              <Phone size={16} />
              <span>1800 891 3090</span>
            </a>
            <a href="https://wa.me/919778413702" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle size={16} />
              <span>+91 97784 13702</span>
            </a>
            <a href="mailto:reservations@azuraresort.in" className="flex items-center space-x-2 hover:text-[#C1A87D] transition-colors">
              <Mail size={16} />
              <span>reservations@azuraresort.in</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
