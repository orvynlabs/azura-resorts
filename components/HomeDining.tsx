"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Users, TreePine, Clock } from "lucide-react";
import ScrollSection from "./ScrollSection";

export default function HomeDining() {
    return (
        <section className="py-28 md:py-36 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollSection>
                    <div className="flex flex-col lg:flex-row items-stretch gap-0">

                        {/* Left — Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full lg:w-[55%] h-[400px] md:h-[520px] lg:h-[580px] overflow-hidden rounded-3xl lg:rounded-r-none flex-shrink-0"
                        >
                            <Image
                                src="/gallery/dining.jpg"
                                alt="Outdoor Dining Pavilion at Azura"
                                fill
                                className="object-cover"
                            />
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
                            {/* Title */}
                            <h2 className="font-cinzel text-2xl md:text-[1.8rem] leading-snug text-[#2C3E50] uppercase tracking-[0.06em] mb-8">
                                The Dining Pavilion
                            </h2>

                            {/* Feature Details */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Utensils size={18} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-sm text-[#2C3E50]">
                                        Authentic Kerala & Global Cuisine
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TreePine size={18} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-sm text-[#2C3E50]">
                                        Open-Air Forest Dining with Reservoir Views
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users size={18} className="text-[#C1A87D] flex-shrink-0 mt-0.5" />
                                    <span className="font-montserrat text-sm text-[#2C3E50]">
                                        Private Dining &nbsp;
                                        <span className="text-gray-400 mx-1">|</span>
                                        &nbsp; Campfire BBQ
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={18} className="text-[#C1A87D] flex-shrink-0" />
                                    <span className="font-montserrat text-sm text-[#2C3E50]">
                                        Breakfast, Lunch & Dinner
                                    </span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gray-200 mb-8" />

                            {/* Description */}
                            <p className="font-montserrat text-gray-600 text-sm leading-[2] font-light mb-10">
                                The Dining Pavilion at Azura offers an unforgettable culinary journey, featuring locally sourced ingredients prepared by our expert chef. Dine under the open sky, surrounded by the lush greenery and the gentle sounds of the forest — a dining experience crafted for discerning travelers.
                            </p>

                            {/* Book Now Button */}
                            <Link
                                href="/contact"
                                className="font-montserrat inline-block w-fit bg-[#C1A87D] text-white px-10 py-3.5 rounded-full uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#a89268] transition-colors duration-300 shadow-lg"
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
                            className="font-montserrat text-xs tracking-[0.2em] uppercase text-[#2C3E50] border border-[#2C3E50]/30 px-8 py-3 rounded-full hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                        >
                            Learn More
                        </Link>
                        <Link
                            href="/gallery"
                            className="font-montserrat text-xs tracking-[0.2em] uppercase bg-[#C1A87D]/20 text-[#8b7a5e] border border-[#C1A87D]/30 px-8 py-3 rounded-full hover:bg-[#C1A87D] hover:text-white transition-all duration-300"
                        >
                            Gallery
                        </Link>
                    </motion.div>
                </ScrollSection>
            </div>
        </section>
    );
}
