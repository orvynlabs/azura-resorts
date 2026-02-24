"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Users, TreePine, Clock } from "lucide-react";
import ScrollSection from "./ScrollSection";

export default function HomeDining() {
    return (
        <section className="py-28 md:py-40 bg-[#f8f5ef]">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                <ScrollSection>
                    <div className="flex flex-col lg:flex-row items-stretch gap-0">

                        {/* Left — Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full lg:w-[55%] h-[400px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-3xl lg:rounded-r-none flex-shrink-0"
                        >
                            <Image
                                src="/gallery/dining.jpg"
                                alt="Outdoor Dining Pavilion at Azura"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle border accent */}
                            <div className="absolute inset-0 border border-[#C1A87D]/10" />
                        </motion.div>

                        {/* Right — Content Card with arch top-right */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-[45%] bg-white flex flex-col justify-center px-8 md:px-12 lg:px-14 py-12 lg:py-16"
                            style={{
                                borderTopRightRadius: "6rem",
                                borderBottomRightRadius: "1.5rem",
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                            }}
                        >
                            {/* Gold label */}
                            <p className="font-montserrat text-[10px] tracking-[0.5em] text-[#C1A87D] uppercase mb-4 font-medium">
                                Dining
                            </p>

                            {/* Title */}
                            <h2 className="font-playfair-display text-2xl md:text-[1.8rem] leading-snug text-[#1a1a1a] tracking-[0.02em] mb-8">
                                The Dining Pavilion
                            </h2>

                            {/* Feature Details */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Utensils size={16} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-[13px] text-[#3a3a3a]">
                                        Authentic Kerala & Global Cuisine
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TreePine size={16} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-[13px] text-[#3a3a3a]">
                                        Open-Air Forest Dining with Reservoir Views
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users size={16} className="text-[#C1A87D] flex-shrink-0 mt-0.5" />
                                    <span className="font-montserrat text-[13px] text-[#3a3a3a]">
                                        Private Dining &nbsp;
                                        <span className="text-[#C1A87D] mx-1">|</span>
                                        &nbsp; Campfire BBQ
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-[13px] text-[#3a3a3a]">
                                        Breakfast, Lunch & Dinner
                                    </span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-[#C1A87D]/20 mb-8" />

                            {/* Description */}
                            <p className="font-montserrat text-[#5a5a5a] text-[13px] leading-[2.1] font-light mb-10">
                                The Dining Pavilion at Azura offers an unforgettable culinary journey, featuring locally sourced ingredients prepared by our expert chef. Dine under the open sky, surrounded by the lush greenery and the gentle sounds of the forest — a dining experience crafted for discerning travelers.
                            </p>

                            {/* Book Now Button */}
                            <Link
                                href="/contact"
                                className="font-montserrat inline-block w-fit bg-[#C1A87D] text-white px-10 py-3.5 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#a89268] transition-colors duration-300 shadow-lg"
                            >
                                Book Now
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bottom Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex items-center gap-4 mt-10 pl-2"
                    >
                        <Link
                            href="/experiences"
                            className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a]/20 px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                        >
                            Learn More
                        </Link>
                        <Link
                            href="/gallery"
                            className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#C1A87D] border border-[#C1A87D]/30 px-8 py-3 hover:bg-[#C1A87D] hover:text-white transition-all duration-300"
                        >
                            Gallery
                        </Link>
                    </motion.div>
                </ScrollSection>
            </div>
        </section>
    );
}
