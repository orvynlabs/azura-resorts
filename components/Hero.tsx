"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import HeroOverlay from "./HeroOverlay";
import Image from "next/image";

export default function Hero() {
    const ref = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax — only use translateY for scroll effect (GPU-friendly, no repaint)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const subTitleOpacity = useTransform(scrollYProgress, [0, 0.25], [0.8, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Background Image — single transform only */}
            <motion.div
                style={mounted ? { y } : undefined}
                className="absolute inset-0 w-full h-[110%] will-change-transform"
            >
                <Image
                    src="/resort_main_image.PNG"
                    alt="Azura Resort"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center animate-kenburns"
                    sizes="100vw"
                />
                {/* Fog overlay — inside the parallax container */}
                <HeroOverlay />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                {/* Small decorative text */}
                <motion.p
                    style={mounted ? { opacity: subTitleOpacity } : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[10px] md:text-xs font-montserrat z tracking-[0.5em] uppercase text-[#C1A87D] mb-6"
                >
                    The Water View Resort
                </motion.p>

                <motion.h1
                    style={mounted ? { opacity: contentOpacity } : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl lg:text-9xl font-cinzel font-normal mb-4 uppercase text-white tracking-[0.3em]"
                >
                    AZURA
                </motion.h1>

                {/* Gold decorative line */}
                <motion.div
                    style={mounted ? { opacity: contentOpacity } : undefined}
                    className="flex items-center gap-3 mb-6"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                        className="h-[1px] bg-[#C1A87D]"
                    />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="w-2 h-2 rounded-full border border-[#C1A87D]"
                    />
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                        className="h-[1px] bg-[#C1A87D]"
                    />
                </motion.div>

                <motion.div
                    style={mounted ? { opacity: subTitleOpacity } : undefined}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    <h2 className="text-sm md:text-base font-montserrat font-light tracking-[0.4em] uppercase text-white/80">
                        Where Water Meets Tranquility
                    </h2>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-12"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-[9px] font-montserrat tracking-[0.3em] font-bold  uppercase text-white">Scroll</span>
                            <div className="w-px h-8 bg-linear-to-b from-[#C1A87D]/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
