"use client";

import { X, Phone, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";

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
  const pathname = usePathname();
  const { openModal } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center bg-black/40 backdrop-blur-2xl text-white p-6"
        >
          {/* Header */}
          <div className="w-full flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <div className="text-2xl font-playfair-display tracking-[0.2em] text-white">AZURA</div>
              <span className="text-[9px] font-montserrat tracking-[0.35em] uppercase text-[#668270]">
                The Water View Resort
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  openModal();
                }}
                className="px-6 py-2 border border-white/30 text-[10px] font-montserrat tracking-[0.2em] text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 uppercase"
              >
                Book Now
              </button>
              <button
                onClick={onClose}
                className="p-2 border border-white/20 text-white hover:border-[#4C6454] hover:text-[#668270] transition-all duration-300"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="w-full h-px bg-white/15 mb-8" />

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-7 mb-auto overflow-y-auto">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`text-[13px] font-montserrat tracking-[0.35em] font-light transition-colors duration-300 ${isActive
                      ? "text-[#668270]"
                      : "text-white/80 hover:text-[#668270]"
                      }`}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="w-full h-px bg-white/15 my-8" />

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4 mb-8 text-[12px] font-montserrat font-light">
            <a href="tel:+919072190088" className="flex items-center space-x-2 text-white/50 hover:text-[#668270] transition-colors">
              <Phone size={14} className="text-[#668270]" />
              <span>+91 90721 90088</span>
            </a>
            <a href="https://wa.me/918606008826" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/50 hover:text-[#668270] transition-colors">
              <MessageCircle size={14} className="text-[#668270]" />
              <span>WA: 8606008826</span>
            </a>
            <a href="mailto:azurawayanad@gmail.com" className="flex items-center space-x-2 text-white/50 hover:text-[#668270] transition-colors">
              <Mail size={14} className="text-[#668270]" />
              <span>azurawayanad@gmail.com</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}