"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        src: "/gallery/room.jpg",
        title: "Luxury Suite Interior",
    },
    {
        src: "/gallery/aframe.jpg",
        title: "Premium A-Frame Cottage",
    },
    {
        src: "/gallery/interior.jpg",
        title: "Modern Cottage Interior",
    },
    {
        src: "/gallery/aframe (2).jpg",
        title: "Forest A-Frame Retreat",
    },
    {
        src: "/gallery/room (2).jpg",
        title: "Deluxe Lake View Room",
    },
];

export default function HomeAccommodation() {
    const [current, setCurrent] = useState(0);

    const total = slides.length;

    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    const goNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, [total]);

    const goPrev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + total) % total);
    }, [total]);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(goNext, 5000);
        return () => clearInterval(timer);
    }, [goNext]);

    return (
        <section className="py-28 md:py-40 bg-transparent overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14 md:mb-20"
                >
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                        The Stay
                    </p>
                    <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">
                        Cottages Cosily Tucked Away Below <br /> The Sky-Scraping Trees
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
                        <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                        <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
                    </div>
                </motion.div>
            </div>

            {/* Carousel — 3 images visible, center highlighted */}
            <div className="relative max-w-[100vw] mx-auto">
                <div className="flex items-center justify-center gap-3 md:gap-5 px-0">

                    {/* Left (Previous) — dimmed, partially visible */}
                    <motion.div
                        key={`prev-${prevIndex}`}
                        className="relative flex-shrink-0 w-[20%] md:w-[22%] h-[280px] md:h-[420px] lg:h-[500px] overflow-hidden cursor-pointer"
                        style={{ borderRadius: "0.5rem" }}
                        onClick={goPrev}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={slides[prevIndex].src}
                            alt={slides[prevIndex].title}
                            fill
                            className="object-cover"
                            sizes="22vw"
                        />
                        {/* Dim overlay — frosted cream to blend with bg */}
                        <div className="absolute inset-0 bg-[#f8f5ef]/50 backdrop-blur-[1px]" />

                        {/* Left Arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#C1A87D] hover:text-white transition-all duration-300 z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </motion.div>

                    {/* Center (Active) — highlighted, fully visible */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`center-${current}`}
                            className="relative flex-shrink-0 w-[56%] md:w-[52%] h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden shadow-2xl z-10"
                            style={{ borderRadius: "0.5rem" }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={slides[current].src}
                                alt={slides[current].title}
                                fill
                                className="object-cover"
                                sizes="52vw"
                                priority
                            />
                            {/* Subtle bottom gradient with title */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/90">
                                    {slides[current].title}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right (Next) — dimmed, partially visible */}
                    <motion.div
                        key={`next-${nextIndex}`}
                        className="relative flex-shrink-0 w-[20%] md:w-[22%] h-[280px] md:h-[420px] lg:h-[500px] overflow-hidden cursor-pointer"
                        style={{ borderRadius: "0.5rem" }}
                        onClick={goNext}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={slides[nextIndex].src}
                            alt={slides[nextIndex].title}
                            fill
                            className="object-cover"
                            sizes="22vw"
                        />
                        {/* Dim overlay — frosted cream to blend with bg */}
                        <div className="absolute inset-0 bg-[#f8f5ef]/50 backdrop-blur-[1px]" />

                        {/* Right Arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#C1A87D] hover:text-white transition-all duration-300 z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </motion.div>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2.5 mt-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`rounded-full transition-all duration-400 ${index === current
                                ? "w-8 h-2.5 bg-[#C1A87D]"
                                : "w-2.5 h-2.5 bg-[#1a1a1a]/15 hover:bg-[#C1A87D]/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
