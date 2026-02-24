"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollSection from "./ScrollSection";

export default function HomePool() {
    return (
        <section className="relative py-28 md:py-40 bg-transparent overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="order-2 md:order-1"
                >
                    <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden shadow-2xl">
                        <Image
                            src="/gallery/pool.jpeg"
                            alt="Swimming Pool"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle gold border accent */}
                        <div className="absolute inset-0 border border-[#C1A87D]/15" />
                    </div>
                </motion.div>

                <div className="order-1 md:order-2 text-center md:text-left">
                    <ScrollSection delay={0.2}>
                        <h2 className="font-playfair-display text-5xl md:text-7xl text-[#1a1a1a]/[0.04] md:absolute md:top-16 md:right-16 z-0 select-none uppercase tracking-wider">
                            Swimming
                        </h2>
                        <div className="relative z-10">
                            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                                The Pool
                            </p>
                            <h3 className="font-playfair-display text-2xl md:text-[2rem] leading-snug text-[#1a1a1a] mb-8 tracking-[0.02em]">
                                Indulge in a <br /> <span className="text-[#C1A87D] font-light italic">Pristine Pool</span>
                            </h3>
                            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                                <div className="h-[1px] w-14 bg-[#C1A87D]/50" />
                                <div className="w-2 h-2 rotate-45 border border-[#C1A87D]/50" />
                                <div className="h-[1px] w-14 bg-[#C1A87D]/50" />
                            </div>
                            <p className="font-montserrat text-[#5a5a5a] leading-[2.1] font-light text-[13px] md:text-[15px]">
                                Immerse yourself in luxury and hygiene. Dive into the crystal clear waters of our
                                infinity pool, surrounded by the symphony of nature. It is the perfect spot
                                to wash away your stress and embrace tranquility.
                            </p>
                        </div>
                    </ScrollSection>
                </div>
            </div>
        </section>
    );
}
