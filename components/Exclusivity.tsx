"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Exclusivity() {
    return (
        <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#f8f5ef]">
            <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                        One Group at a Time
                    </p>

                    <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">
                        Pure Exclusivity
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                        <div className="h-[1px] w-14 bg-[#C1A87D]" />
                        <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-14 bg-[#C1A87D]" />
                    </div>

                    <p className="font-montserrat text-[#5a5a5a] leading-[2.1] mb-10 font-light text-[13px] md:text-[15px] max-w-xl mx-auto lg:mx-0">
                        Escape to a world where privacy is paramount. Azura offers a sanctuary solely for you and your loved ones.
                        Unlike crowded resorts, our property is dedicated to a single group at a time, ensuring that every moment,
                        every view, and every amenity is exclusively yours.
                    </p>

                    <div className="space-y-5 text-left mx-auto max-w-md lg:mx-0">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Complete Privacy</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Personalized Service</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Tailored Experiences</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[560px] w-full"
                >
                    <div className="absolute inset-0 rounded-t-[10rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/gallery/aframe.jpg"
                            alt="Azura Exclusivity"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {/* Subtle gold border accent */}
                        <div className="absolute inset-0 border border-[#C1A87D]/15 rounded-t-[10rem]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
