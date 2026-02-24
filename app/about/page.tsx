"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trees, Mountain, Waves, Shield, Sparkles, Heart } from "lucide-react";

const highlights = [
    {
        icon: <Trees className="w-8 h-8" />,
        title: "66 Acres of Forest",
        description: "Nestled within a lush, dense forest canopy that brings you closer to nature.",
    },
    {
        icon: <Mountain className="w-8 h-8" />,
        title: "Reservoir Views",
        description: "Wake up to breathtaking panoramic views of the serene Padinjarathara reservoir.",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Private & Exclusive",
        description: "An exclusive, adults-only experience designed for ultimate privacy and tranquility.",
    },
    {
        icon: <Waves className="w-8 h-8" />,
        title: "Infinity Pool",
        description: "A stunning infinity pool that seamlessly blends into the breathtaking reservoir landscape.",
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Luxury Amenities",
        description: "Premium accommodations with world-class amenities, curated for discerning travelers.",
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Ayurvedic Wellness",
        description: "Traditional Kerala Ayurvedic therapies conducted by certified wellness experts.",
    },
];

export default function About() {
    return (
        <main className="min-h-screen bg-[#f8f5ef] text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/fullview.png"
                    alt="Azura Resort Panoramic View"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white/80 text-xs md:text-sm font-montserrat tracking-[0.4em] uppercase mb-6"
                        >
                            Our Story
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.15em] uppercase mb-4"
                        >
                            About Azura
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-[1px] bg-[#C1A87D] mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-8 font-medium">
                            Welcome to
                        </p>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-[#2C3E50] mb-8 leading-snug">
                            A Sanctuary Where <br />
                            <span className="text-[#C1A87D]">Water Meets Tranquility</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-[#C1A87D] mx-auto mb-10" />
                        <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto">
                            Tucked deep within the forests of Wayanad, Kerala, Azura is a secluded paradise
                            perched on a serene peninsula overlooking the Padinjarathara reservoir. Spread across 66 acres of lush
                            greenery, our resort is more than a destination — it is a journey into the heart of nature,
                            designed for those who seek solitude, luxury, and an intimate connection with the wild.
                        </p>
                        <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto mt-6">
                            Every corner of Azura reflects the philosophy that true luxury lies in simplicity — in the rustle
                            of leaves, the reflection of the sky on still water, and the feeling of being completely,
                            beautifully present.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Full-Width Image Parallax Break */}
            <section className="relative h-[50vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/gallery/fullproperty.jpg"
                        alt="Azura Property Overview"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-cinzel text-white text-2xl md:text-4xl tracking-[0.15em] text-center px-4"
                    >
                        &ldquo;Where Every Moment is a Memory&rdquo;
                    </motion.p>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="py-24 px-6 bg-[#f8f5ef]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                            What Makes Us Special
                        </p>
                        <h2 className="font-cinzel text-3xl md:text-4xl text-[#2C3E50] tracking-wide">
                            The Azura Experience
                        </h2>
                        <div className="w-16 h-[1px] bg-[#C1A87D] mx-auto mt-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#C1A87D]/30 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C1A87D]/10 flex items-center justify-center text-[#C1A87D] group-hover:bg-[#C1A87D] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="font-cinzel text-lg text-[#2C3E50] tracking-wide mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-montserrat text-gray-500 text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Side-by-Side Story Section */}
            <section className="py-24 px-6 bg-[#f8f5ef]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/gallery/aframe.jpg"
                            alt="Azura A-Frame Cottage"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-6 font-medium">
                            Our Philosophy
                        </p>
                        <h2 className="font-cinzel text-3xl md:text-4xl text-[#2C3E50] mb-8 leading-relaxed">
                            Architecture Inspired <br /> by Nature
                        </h2>
                        <p className="font-montserrat text-gray-600 leading-[2] font-light mb-6">
                            Every structure at Azura has been conceived to harmonize with the land. Our signature
                            A-frame cottages, nestled beneath towering trees, are designed to let nature in — through
                            floor-to-ceiling glass, open-air decks, and natural materials sourced from the region.
                        </p>
                        <p className="font-montserrat text-gray-600 leading-[2] font-light mb-8">
                            We believe that the best architecture disappears into its surroundings, allowing the
                            experience to be shaped by the forest, the water, and the sky. That is the promise
                            of every stay at Azura.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-[#C1A87D]" />
                            <span className="font-montserrat text-[#C1A87D] text-xs tracking-[0.3em] uppercase font-medium">
                                Eco-Conscious Design
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision / CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <Image
                    src="/gallery/swing.jpg"
                    alt="Azura Swing"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-6 font-medium">
                            Begin Your Journey
                        </p>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-8 leading-snug tracking-wide">
                            Your Escape Awaits
                        </h2>
                        <p className="font-montserrat text-white/80 font-light leading-loose max-w-2xl mx-auto mb-12">
                            Whether you seek a romantic getaway, a reflective solitary retreat, or simply a
                            place to reconnect with nature — Azura is where your story begins.
                        </p>
                        <a
                            href="/contact"
                            className="font-montserrat inline-block bg-[#C1A87D] text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#a89268] transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Plan Your Visit
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
