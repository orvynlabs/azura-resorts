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
        <section className="py-28 md:py-36 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-cinzel text-2xl md:text-[2.2rem] leading-snug text-[#2C3E50] tracking-[0.06em] uppercase mb-6">
                        Sustainable Luxury Cottages with Unforgettable Views
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                        <div className="w-3 h-3 rounded-full border border-[#C1A87D]" />
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                    </div>

                    <p className="font-montserrat text-gray-600 text-sm md:text-[15px] leading-[2] font-light max-w-5xl mx-auto">
                        Spread across vast greenery, the resort features exotic cottages blending luxury and sustainability with eco-friendly design. Each cottage offers modern comforts and opens to breathtaking lake and forest views. Spacious balconies provide a serene space to relax. As the finest luxury resort in Wayanad, it promises unmatched comfort, elegant design, and an unforgettable retreat in perfect harmony with nature.
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
                            <div className="relative h-[350px] md:h-[380px] lg:h-[420px] w-full overflow-hidden rounded-t-[2rem] mb-6">
                                <Image
                                    src={cottage.image}
                                    alt={cottage.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                            </div>

                            {/* Title */}
                            <h3 className="font-cinzel text-lg md:text-xl text-[#2C3E50] tracking-[0.04em] uppercase mb-4">
                                {cottage.title}
                            </h3>

                            {/* Description */}
                            <p className="font-montserrat text-gray-600 text-sm leading-[1.8] font-light px-2 mb-6">
                                {cottage.description}
                            </p>

                            {/* View Details Button */}
                            <Link
                                href="/experiences"
                                className="font-montserrat inline-block text-xs tracking-[0.2em] uppercase text-[#2C3E50] border border-[#2C3E50]/30 px-8 py-3 rounded-full hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
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
