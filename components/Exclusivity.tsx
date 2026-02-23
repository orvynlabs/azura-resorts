"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Exclusivity() {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <h2 className="font-cinzel text-3xl md:text-5xl mb-6 tracking-wide">
                        Pure Exclusivity
                    </h2>
                    <div className="h-[1px] w-24 bg-[#C1A87D] mb-8 mx-auto lg:mx-0" />

                    <p className="font-montserrat text-gray-300 leading-loose mb-8 font-light text-lg">
                        Escape to a world where privacy is paramount. Azura offers a sanctuary solely for you and your loved ones.
                        Unlike crowded resorts, our property is dedicated to a single group at a time, ensuring that every moment,
                        every view, and every amenity is exclusively yours.
                    </p>

                    <div className="space-y-4 text-left mx-auto max-w-md lg:mx-0">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-white/90">Complete Privacy</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-white/90">Personalized Service</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#C1A87D]" />
                            <span className="font-montserrat text-white/90">Tailored Experiences</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[600px] w-full"
                >
                    <div className="absolute inset-0 rounded-t-[10rem] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/gallery/aframe.jpg"
                            alt="Azura Exclusivity"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
