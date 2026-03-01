"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageCircle,
    Instagram,
    Mail,
    Send,
    MessageSquare,
    X,
    MessageCircleReply,
    Pointer
} from "lucide-react";

export default function WhatsAppButton() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const socialLinks = [
        {
            name: "Messenger",
            icon: <MessageSquare size={20} />,
            href: "https://m.me/azuraresort",
            delay: 0.25,
        },
        {
            name: "Instagram",
            icon: <Instagram size={20} />,
            href: "https://www.instagram.com/azuraresorts_wynd",
            delay: 0.2,
        },
        {
            name: "SMS",
            icon: <MessageCircleReply size={20} />,
            href: "sms:+918606008826",
            delay: 0.15,
        },
        {
            name: "Email",
            icon: <Mail size={20} />,
            href: "mailto:azurawayanad@gmail.com",
            delay: 0.1,
        },
        {
            name: "Telegram",
            icon: <Send size={20} className="-ml-0.5" />,
            href: "https://t.me/+918606008826",
            delay: 0.05,
        },
        {
            name: "WhatsApp",
            icon: <MessageCircle size={22} />,
            href: "https://wa.me/918606008826?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20Azura%20Resort",
            delay: 0,
        },
    ];

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-3"
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                transition={{
                                    duration: 0.2,
                                    delay: link.delay,
                                    ease: "easeOut"
                                }}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 relative group bg-white text-[#4C6454] border border-[#4C6454]/10 hover:bg-[#4C6454] hover:text-white`}
                                aria-label={link.name}
                            >
                                {link.icon}

                                {/* Tooltip */}
                                <span className="absolute left-14 bg-[#1a1a1a] text-white text-[10px] font-montserrat uppercase tracking-[0.1em] px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    {link.name}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 relative z-10 ${isOpen ? "bg-[#1a1a1a] shadow-black/30" : "bg-[#4C6454] shadow-[0_10px_20px_rgba(76,100,84,0.3)]"
                    }`}
                aria-label="Toggle Contact Menu"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                        initial={false}
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            opacity: isOpen ? 0 : 1,
                            scale: isOpen ? 0.5 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute"
                    >
                        <MessageCircle size={26} className="text-white" strokeWidth={1.5} />
                    </motion.div>

                    <motion.div
                        initial={false}
                        animate={{
                            rotate: isOpen ? 0 : -180,
                            opacity: isOpen ? 1 : 0,
                            scale: isOpen ? 1 : 0.5
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute flex items-center justify-center"
                    >
                        <X size={26} className="text-white" strokeWidth={1.5} />
                        <Pointer size={14} className="text-white absolute -bottom-1 -right-1 fill-white" />
                    </motion.div>

                    {/* Ping animation when closed */}
                    {!isOpen && (
                        <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-20" />
                    )}
                </div>
            </motion.button>
        </div>
    );
}
