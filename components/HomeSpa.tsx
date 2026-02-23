"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollSection from "./ScrollSection";

export default function HomeSpa() {
    return (
        <section className="py-28 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-right">
                    <ScrollSection>
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                            Wellness
                        </p>
                        <h2 className="font-cinzel text-2xl md:text-[2.2rem] leading-snug text-[#2C3E50] mb-6 uppercase tracking-[0.06em]">
                            Ayurvedic <br /> Spa
                        </h2>
                        <div className="flex items-center gap-3 mb-6 justify-center md:justify-end">
                            <div className="h-[1px] w-10 bg-[#C1A87D]" />
                            <div className="w-2 h-2 rounded-full border border-[#C1A87D]" />
                            <div className="h-[1px] w-10 bg-[#C1A87D]" />
                        </div>
                        <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-[15px]">
                            Genuine traditional Ayurvedic rejuvenation therapies, under the supervision of qualified experts,
                            ensure the complete well-being of the body, mind and soul.
                        </p>
                        <button className="mt-8 px-8 py-3 bg-[#C1A87D] text-white font-montserrat tracking-[0.2em] text-xs uppercase hover:bg-[#a89268] transition-colors rounded-full font-medium shadow-lg">
                            View Treatments
                        </button>
                    </ScrollSection>
                </div>

                <div className="flex-1 relative">
                    {/* Organic Shape Mask */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative w-full h-[400px] overflow-hidden"
                        style={{
                            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                        }}
                    >
                        <Image
                            src="/gallery/swing.jpg"
                            alt="Spa"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
