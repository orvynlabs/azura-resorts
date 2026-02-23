"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeIntro() {
    return (
        <section className="bg-[#FDFBF7] overflow-hidden">
            {/* Top Section — Resort Intro */}
            <div className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cinzel text-2xl md:text-[2.5rem] leading-snug md:leading-[1.3] text-[#2C3E50] tracking-[0.08em] uppercase mb-8"
                    >
                        The Most Exotic and Luxurious 5 Star Island Resorts
                        <br className="hidden md:block" /> in Wayanad, Kerala, South India
                    </motion.h2>

                    {/* Decorative Gold Divider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                        <div className="w-3 h-3 rounded-full border border-[#C1A87D]" />
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-montserrat text-gray-600 text-sm md:text-[15px] leading-[2] font-light max-w-4xl mx-auto"
                    >
                        Azura is not just a resort — it&apos;s an experience like no other. Nestled on a serene island in the heart of the Western Ghats, this five-star luxury retreat in Kerala stands as one of the most exclusive and luxurious resorts in South India. Surrounded by the majestic Banasura Sagar reservoir and embraced by mist-clad mountains, the resort offers an awe-inspiring 180-degree panoramic view that captures the essence of untouched nature. Guests enjoy a unique experience driving 3 km inside the forest along a mud road, adding to the adventure and connection with nature.
                    </motion.p>
                </div>
            </div>

            {/* Bottom Section — Infinity Pool Feature */}
            <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-36">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[520px] w-full overflow-hidden rounded-sm shadow-2xl"
                    >
                        <Image
                            src="/gallery/fullview.png"
                            alt="Infinity Pool at Azura Resort overlooking Banasura Sagar"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right — Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-center"
                    >
                        <h3 className="font-cinzel text-xl md:text-[1.7rem] leading-snug md:leading-[1.4] text-[#2C3E50] tracking-[0.06em] uppercase mb-8">
                            Best Five Star Resorts in Wayanad — Inspired by Nature
                            <span className="block mt-2 text-[#C1A87D]">Our Infinity Pool</span>
                        </h3>

                        {/* Decorative Gold Divider */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-[#C1A87D]" />
                            <div className="w-2.5 h-2.5 rounded-full border border-[#C1A87D]" />
                            <div className="h-[1px] w-12 bg-[#C1A87D]" />
                        </div>

                        <p className="font-montserrat text-gray-600 text-sm md:text-[15px] leading-[2] font-light max-w-xl mx-auto lg:mx-auto">
                            Our infinity pool is uniquely designed to mirror the shape of a small island located just across from the resort — clearly visible from our property. This natural inspiration guided the concept and layout, making the pool feel like a seamless extension of the lake itself. The moment you step into our infinity pool, you&apos;ll feel as if you&apos;re immersed directly in the tranquil waters of the Banasura Sagar Lake.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
