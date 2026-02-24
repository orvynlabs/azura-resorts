"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blocks = [
    {
        label: "Wellness",
        title: "Ayurvedic Spa & Wellness",
        description:
            "Genuine traditional Ayurvedic rejuvenation therapies, under the supervision of qualified experts, ensure the complete well-being of the body, mind and soul. Rediscover wellness at our serene island retreat where nature and tradition come together in perfect harmony.",
        image: "/gallery/swing.jpg",
        reverse: false,
    },
    {
        label: "Nature",
        title: "Explore the Timeless Beauty of Wayanad",
        description:
            "Witness the charm of gushing waterfalls, lush green hilltops, and rugged mountains. Step into history with ancient temples and tales of the brave. Discover rare flora and fauna, and inhale the rich aroma of Wayanadan cardamom, tea, and coffee. Experience nature and heritage beyond time.",
        image: "/gallery/fullproperty.jpg",
        reverse: true,
    },
];

export default function HomeSpa() {
    return (
        <section className="bg-[#f8f5ef] py-28 md:py-36">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                        Experiences
                    </p>
                    <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">
                        Wellness & Nature
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
                        <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
                    </div>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                    {blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`flex flex-col ${block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`}
                        >
                            {/* Image Block */}
                            <div
                                className="w-full lg:w-1/2 relative h-[300px] md:h-[380px] lg:h-auto lg:min-h-[440px] overflow-hidden"
                                style={{
                                    borderRadius: block.reverse
                                        ? '0 1rem 1rem 0'
                                        : '1rem 0 0 1rem',
                                }}
                            >
                                <Image
                                    src={block.image}
                                    alt={block.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Block */}
                            <div
                                className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 lg:p-16"
                                style={{
                                    borderRadius: block.reverse
                                        ? '1rem 0 0 1rem'
                                        : '0 1rem 1rem 0',
                                }}
                            >
                                <div className="text-center max-w-[440px]">
                                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                                        {block.label}
                                    </p>
                                    <h3 className="font-playfair-display text-xl md:text-[1.6rem] lg:text-[1.8rem] leading-snug text-[#1a1a1a] mb-6 tracking-[0.02em] uppercase">
                                        {block.title}
                                    </h3>

                                    {/* Decorative Divider */}
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="h-[1px] w-14 bg-[#C1A87D]" />
                                        <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                                        <div className="h-[1px] w-14 bg-[#C1A87D]" />
                                    </div>

                                    <p className="font-montserrat text-[#5a5a5a] leading-[2] font-light text-[13px] md:text-[14px] mb-8">
                                        {block.description}
                                    </p>

                                    <Link
                                        href="/experiences"
                                        className="font-montserrat inline-block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a]/20 px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                                    >
                                        Explore More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
