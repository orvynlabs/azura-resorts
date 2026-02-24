"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cottages = [
    {
        title: "Luxury Lake View Villa",
        description:
            "Our luxury lake-view A-frame cottages spread across the forest canopy, offering panoramic views of the Banasura Sagar reservoir with a spacious balcony and premium interiors.",
        image: "/gallery/aframe.jpg",
    },
    {
        title: "Romantic Private Retreat",
        description:
            "The ultimate grandeur of a luxury romantic private retreat will make you forget the time with its elegant ambience, floor-to-ceiling glass, and breathtaking reservoir views.",
        image: "/gallery/fullview.png",
    },
    {
        title: "Premium Forest Cottage",
        description:
            "Nestled among towering trees, our premium forest cottages offer an intimate escape with modern comforts, open-air decks, and natural materials sourced from the region.",
        image: "/gallery/room.jpg",
    },
];

export default function HomeActivities() {
    return (
        <section className="py-28 md:py-40 bg-[#f8f5ef] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                        Accommodation
                    </p>
                    <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">
                        Sustainable Luxury Cottages with Unforgettable Views
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[1px] w-20 bg-[#C1A87D]" />
                        <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-20 bg-[#C1A87D]" />
                    </div>

                    <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto">
                        Spread across vast greenery, the resort features exotic cottages blending luxury and sustainability with eco-friendly design. Each cottage offers modern comforts and opens to breathtaking lake and forest views.
                    </p>
                </motion.div>

                {/* Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {cottages.map((cottage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="group text-center"
                        >
                            {/* Image */}
                            <div className="relative h-[350px] md:h-[380px] lg:h-[420px] w-full overflow-hidden mb-7">
                                <Image
                                    src={cottage.image}
                                    alt={cottage.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                {/* Subtle gold border on hover */}
                                <div className="absolute inset-0 border border-[#C1A87D]/0 group-hover:border-[#C1A87D]/30 transition-all duration-500" />
                            </div>

                            {/* Title */}
                            <h3 className="font-playfair-display text-lg md:text-xl text-[#1a1a1a] tracking-[0.02em] mb-4">
                                {cottage.title}
                            </h3>

                            {/* Small gold divider */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-[1px] w-8 bg-[#C1A87D]/50" />
                                <div className="w-1.5 h-1.5 rotate-45 border border-[#C1A87D]/50" />
                                <div className="h-[1px] w-8 bg-[#C1A87D]/50" />
                            </div>

                            {/* Description */}
                            <p className="font-montserrat text-[#5a5a5a] text-[13px] leading-[1.9] font-light px-2 mb-6">
                                {cottage.description}
                            </p>

                            {/* View Details Button */}
                            <Link
                                href="/experiences"
                                className="font-montserrat inline-block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a]/20 px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                            >
                                View Details
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
