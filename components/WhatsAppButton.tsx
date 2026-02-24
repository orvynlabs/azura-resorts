"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Show after a slight delay for a smooth entrance
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    href="https://wa.me/919778413702?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20Azura%20Resort"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                    <MessageCircle size={22} strokeWidth={2} />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
