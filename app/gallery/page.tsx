"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySlider from "@/components/GallerySlider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
    return (
        <main className="min-h-screen bg-[#f8f5ef]">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src="/gallery/fullview.png"
                    alt="Gallery - Azura Resort"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6"
                    >
                        Visual Journey
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.2em] uppercase mb-6"
                    >
                        G a l l e r y
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center justify-center gap-3"
                    >
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                        <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                    </motion.div>

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-8"
                    >
                        <p className="font-montserrat text-[11px] tracking-[0.2em] text-white/60">
                            <Link href="/" className="hover:text-[#C1A87D] transition-colors">Home</Link>
                            <span className="mx-3">—</span>
                            <span className="text-white/80">Gallery</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-28 md:py-36 px-6">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6 font-medium">
                            Through Our Lens
                        </p>
                        <h2 className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.03em] mb-10">
                            Every Frame Tells a Story <br className="hidden md:block" />
                            of Nature&apos;s Grandeur
                        </h2>

                        {/* Decorative Gold Divider */}
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                            <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                        </div>

                        <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[800px] mx-auto">
                            From the misty mornings over the reservoir to the golden glow of sunset through the forest canopy — explore Azura through a curated collection of moments. Each photograph captures the raw beauty, intimate luxury, and timeless charm of our island retreat.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <GallerySlider />

            <Footer />
        </main>
    );
}
