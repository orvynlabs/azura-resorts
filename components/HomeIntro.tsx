"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeIntro() {
    return (
        <section className="bg-[#f8f5ef] overflow-hidden">
            {/* Top Section — Resort Intro */}
            <div className="py-28 md:py-40 px-6">
                <div className="max-w-[1080px] mx-auto text-center">
                    {/* Small gold label */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6 font-medium"
                    >
                        Welcome to Azura
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] md:leading-[1.3] text-[#1a1a1a] tracking-[0.03em] mb-10"
                    >
                        The Most Exotic and Luxurious
                        <br className="hidden md:block" /> Island Resort in Wayanad
                    </motion.h2>

                    {/* Decorative Gold Divider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        <div className="h-[1px] w-20 bg-[#C1A87D]" />
                        <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-20 bg-[#C1A87D]" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto"
                    >
                        Azura is not just a resort — it&apos;s an experience like no other. Nestled on a serene island in the heart of the Western Ghats, this five-star luxury retreat in Kerala stands as one of the most exclusive and luxurious resorts in South India. Surrounded by the majestic Banasura Sagar reservoir and embraced by mist-clad mountains, the resort offers an awe-inspiring 180-degree panoramic view that captures the essence of untouched nature.
                    </motion.p>
                </div>
            </div>

            {/* Bottom Section — Infinity Pool Feature */}
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 pb-32 md:pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[540px] w-full overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/gallery/fullview.png"
                            alt="Infinity Pool at Azura Resort overlooking Banasura Sagar"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle gold border accent */}
                        <div className="absolute inset-0 border border-[#C1A87D]/20" />
                    </motion.div>

                    {/* Right — Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                            Inspired by Nature
                        </p>

                        <h3 className="font-playfair-display text-xl md:text-[1.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.02em] mb-8">
                            Best Five Star Resorts in Wayanad
                            <span className="block mt-2 text-[#C1A87D] font-light italic">Our Infinity Pool</span>
                        </h3>

                        {/* Decorative Gold Divider */}
                        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                            <div className="h-[1px] w-14 bg-[#C1A87D]" />
                            <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                            <div className="h-[1px] w-14 bg-[#C1A87D]" />
                        </div>

                        <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-xl mx-auto lg:mx-0">
                            Our infinity pool is uniquely designed to mirror the shape of a small island located just across from the resort — clearly visible from our property. This natural inspiration guided the concept and layout, making the pool feel like a seamless extension of the lake itself. The moment you step into our infinity pool, you&apos;ll feel as if you&apos;re immersed directly in the tranquil waters of the Banasura Sagar Lake.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
