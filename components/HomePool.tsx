"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollSection from "./ScrollSection";

export default function HomePool() {
    return (
        <section className="relative py-28 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="order-2 md:order-1"
                >
                    <div className="relative h-[500px] w-full rounded-t-full overflow-hidden shadow-2xl">
                        <Image
                            src="/gallery/pool.jpeg"
                            alt="Swimming Pool"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <div className="order-1 md:order-2 text-center md:text-left">
                    <ScrollSection delay={0.2}>
                        <h2 className="font-cinzel text-5xl md:text-8xl text-[#e8e5e0] md:absolute md:top-20 md:right-20 z-0 select-none uppercase tracking-wider">
                            Swimming
                        </h2>
                        <div className="relative z-10">
                            <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                                The Pool
                            </p>
                            <h3 className="font-cinzel text-2xl md:text-[2rem] leading-snug text-[#2C3E50] mb-6 uppercase tracking-[0.06em]">
                                Indulge in a <br /> <span className="text-[#C1A87D]">Pristine Pool</span>
                            </h3>
                            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                                <div className="h-[1px] w-10 bg-[#C1A87D]" />
                                <div className="w-2 h-2 rounded-full border border-[#C1A87D]" />
                                <div className="h-[1px] w-10 bg-[#C1A87D]" />
                            </div>
                            <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-[15px]">
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
