"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySlider from "@/components/GallerySlider";
import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/gallery/fullview.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white/80 text-xs md:text-sm font-montserrat tracking-[0.4em] uppercase mb-6"
                    >
                        Visual Journey
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-cinzel text-white mb-6 tracking-[0.15em] uppercase"
                    >
                        Gallery
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80px" }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-[1px] bg-[#C1A87D] mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="font-montserrat text-white/70 text-sm md:text-base font-light tracking-wide"
                    >
                        Wander through images that capture the light, the textures, and the timeless beauty of Wayanad&apos;s most refined escape.
                    </motion.p>
                </div>
            </div>

            {/* Gallery Section */}
            <GallerySlider />

            <Footer />
        </main>
    );
}
