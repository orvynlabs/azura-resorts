"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
    image: string;
    subtitle: string;
    title: string;
    tagline: string;
    description: string;
}

const slides: Slide[] = [
    {
        image: "/gallery/fullview.png",
        subtitle: "The Destination",
        title: "Best Luxury Resort in Wayanad",
        tagline: "An Exclusive Island Retreat in Kerala",
        description:
            "Nestled on a serene island with breathtaking views of the lake and forest, Azura offers an unparalleled escape into nature. Surrounded by the Banasura Sagar reservoir and embraced by the Western Ghats, the resort captures the essence of untouched wilderness — making every moment an unforgettable memory.",
    },
    {
        image: "/gallery/aframe.jpg",
        subtitle: "The Stay",
        title: "Premium A-Frame Cottages",
        tagline: "Where Architecture Meets the Forest",
        description:
            "Our signature A-frame cottages are thoughtfully nestled among towering trees, designed to let nature in through floor-to-ceiling glass and open-air decks. Each cottage offers complete privacy, panoramic reservoir views, and the soothing sounds of the forest — luxury redefined in the heart of Wayanad.",
    },
    {
        image: "/gallery/dining.jpg",
        subtitle: "The Experience",
        title: "Curated Dining by the Lake",
        tagline: "Authentic Flavours of Kerala",
        description:
            "Savour authentic, earthy meals prepared from the finest regional ingredients at our open-air dining pavilion. From traditional Kerala delicacies to global favourites, our expert chef crafts dishes that celebrate the flavours of the land — best enjoyed with the forest breeze and reservoir views.",
    },
    {
        image: "/gallery/campfire.jpg",
        subtitle: "The Moments",
        title: "Campfire Under the Stars",
        tagline: "Evenings by the Fire in Wayanad",
        description:
            "As the sun sets behind the mountains, gather around a crackling campfire beneath a canopy of stars. The glow of the fire, the sounds of the forest, and the cool mountain air create an atmosphere of warmth and togetherness — the perfect end to a day at Azura.",
    },
];

export default function HomeDestination() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToSlide = useCallback(
        (index: number) => {
            setDirection(index > current ? 1 : -1);
            setCurrent(index);
        },
        [current]
    );

    // Auto-play  
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const imageVariants = {
        enter: (dir: number) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, scale: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -60 : 60 }),
    };

    const contentVariants = {
        enter: { opacity: 0, y: 40 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    };

    return (
        <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-black">
            {/* Background Images */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={current}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority={current === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
                </motion.div>
            </AnimatePresence>

            {/* Content Card — Floating on Right */}
            <div className="absolute inset-0 flex items-center justify-end z-10 px-6 md:px-16 lg:px-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/90 backdrop-blur-md w-full max-w-xl p-10 md:p-14 shadow-2xl rounded-sm"
                    >
                        {/* Subtitle */}
                        <p className="font-montserrat text-[11px] tracking-[0.4em] text-[#C1A87D] uppercase mb-5 font-medium">
                            {slides[current].subtitle}
                        </p>

                        {/* Title */}
                        <h2 className="font-cinzel text-2xl md:text-[2rem] leading-snug text-[#2C3E50] uppercase tracking-[0.05em] mb-3">
                            {slides[current].title}
                        </h2>

                        {/* Tagline */}
                        <p className="font-cinzel text-sm md:text-base text-[#C1A87D] uppercase tracking-[0.08em] mb-6">
                            {slides[current].tagline}
                        </p>

                        {/* Decorative Divider */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-10 bg-[#C1A87D]" />
                            <div className="w-2 h-2 rounded-full border border-[#C1A87D]" />
                            <div className="h-[1px] w-10 bg-[#C1A87D]" />
                        </div>

                        {/* Description */}
                        <p className="font-montserrat text-gray-600 text-sm leading-[1.9] font-light">
                            {slides[current].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full transition-all duration-500 ${index === current
                                ? "w-10 h-3 bg-[#C1A87D]"
                                : "w-3 h-3 bg-white/60 hover:bg-white/90"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-20">
                <motion.div
                    key={current}
                    className="h-full bg-[#C1A87D]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                />
            </div>
        </section>
    );
}
