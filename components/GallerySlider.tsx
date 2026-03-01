"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
    src: string;
    category: string;
    alt: string;
    span?: string;
}

const categories = ["All", "Location", "Gusts", "Villa", "tents", "Facilities", "Activities"];

const galleryImages: GalleryImage[] = [
    // Location
    { src: "/gallery/gallery/fullview.webp", category: "Location", alt: "Panoramic view of Azura Resort on the reservoir", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/view.webp", category: "Location", alt: "Aerial view of the island resort" },
    { src: "/gallery/gallery/view1.webp", category: "Location", alt: "Scenic landscape around Azura Resort" },
    { src: "/gallery/gallery/view2.webp", category: "Location", alt: "Infinity pool overlooking the lake" },

    // Villa
    { src: "/gallery/gallery/aframe1.webp", category: "Villa", alt: "Premium A-Frame cottage", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/room.webp", category: "Villa", alt: "Luxury room interior" },
    { src: "/gallery/gallery/room2.webp", category: "Villa", alt: "Luxury room interior" },
    { src: "/gallery/gallery/room3.webp", category: "Villa", alt: "Luxury room interior" },
    { src: "/gallery/gallery/room4.webp", category: "Villa", alt: "Deluxe room interior" },
    { src: "/gallery/gallery/interior.webp", category: "Villa", alt: "Cottage interior with modern amenities" },
    { src: "/gallery/gallery/interior1.webp", category: "Villa", alt: "Cottage interior with modern amenities" },

    // Facilities
    { src: "/gallery/gallery/pool.webp", category: "Facilities", alt: "Infinity pool overlooking the lake", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/dining.webp", category: "Facilities", alt: "Tent stay" },
    { src: "/gallery/gallery/swing.webp", category: "Facilities", alt: "Lakeside swing" },
    { src: "/gallery/gallery/kitchen.webp", category: "Facilities", alt: "Tent stay" },
    { src: "/gallery/gallery/grill.webp", category: "Facilities", alt: "Tent stay" },
    { src: "/gallery/gallery/kitchen1.webp", category: "Facilities", alt: "Infinity pool overlooking the lake", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/speaker.webp", category: "Facilities", alt: "Lakeside swing" },

    // tents stay
    { src: "/gallery/gallery/tent.webp", category: "tents", alt: "Infinity pool overlooking the lake", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/tent2.webp", category: "tents", alt: "Lakeside swing" },
    { src: "/gallery/gallery/tent3.webp", category: "tents", alt: "Tent stay" },

    // Gust
    { src: "/gallery/gallery/g1.webp", category: "Gusts", alt: "Infinity pool overlooking the lake", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/g2.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g3.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g4.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g5.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g6.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g7.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g8.webp", category: "Gusts", alt: "Lakeside swing" },
    { src: "/gallery/gallery/g9.webp", category: "Gusts", alt: "Lakeside swing" },

    // Activities
    { src: "/gallery/gallery/caroms.webp", category: "Activities", alt: "Evening campfire under the stars", span: "col-span-2 row-span-2" },
    { src: "/gallery/gallery/dartboard.webp", category: "Activities", alt: "Indoor games - Dartboard" },
    { src: "/gallery/gallery/campfire.webp", category: "Activities", alt: "Indoor games - Carrom board" },
    { src: "/gallery/gallery/batminton.webp", category: "Activities", alt: "Indoor games - Chess" },
    { src: "/gallery/gallery/carroms.webp", category: "Activities", alt: "Indoor games - Carrom board" },
    { src: "/gallery/gallery/chess.webp", category: "Activities", alt: "Indoor games - Chess" },
];

export default function GallerySlider({ hideHeader = false }: { hideHeader?: boolean }) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filtered = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev! + 1) % filtered.length);
        }
    }, [selectedImage, filtered.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev! - 1 + filtered.length) % filtered.length);
        }
    }, [selectedImage, filtered.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedImage === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") setSelectedImage((prev) => (prev! + 1) % filtered.length);
            if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev! - 1 + filtered.length) % filtered.length);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedImage, filtered.length]);

    return (
        <div className="bg-[#f8f5ef]">
            {/* Section Header */}
            <div className={`text-center ${hideHeader ? 'pt-0 pb-12' : 'pt-28 md:pt-36 pb-12'} px-6`}>
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-5 font-medium">
                            The Exceptional Part
                        </p>
                        <h2 className="font-playfair-display text-[1.6rem] md:text-[2.4rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-8">
                            Explore Gallery
                        </h2>

                        {/* Gold Ornamental Divider */}
                        <div className="flex items-center justify-center gap-3 mb-14">
                            <div className="h-[1px] w-20 bg-[#4C6454]" />
                            <div className="w-2.5 h-2.5 rotate-45 border border-[#4C6454]" />
                            <div className="h-[1px] w-20 bg-[#4C6454]" />
                        </div>
                    </motion.div>
                )}

                {/* Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setSelectedImage(null); }}
                            className={`
                                font-montserrat text-[10px] md:text-[11px] tracking-[0.2em] uppercase px-7 py-3 
                                border transition-all duration-300 font-medium
                                ${activeCategory === cat
                                    ? "bg-[#4C6454] border-[#4C6454] text-white"
                                    : "bg-transparent border-[#1a1a1a]/15 text-[#1a1a1a]/60 hover:border-[#4C6454] hover:text-[#668270]"
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Image Grid */}
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 pb-28 md:pb-36">
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px] grid-flow-dense"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((img, index) => (
                            <motion.div
                                key={`${img.src}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className={`
                                    relative cursor-pointer overflow-hidden group
                                    ${activeCategory === "All" && img.span ? img.span : ""}
                                `}
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                                        <div className="w-10 h-10 mx-auto border border-white/60 flex items-center justify-center mb-2">
                                            <span className="text-white text-lg font-light">+</span>
                                        </div>
                                        <p className="font-montserrat text-white/90 text-[9px] tracking-[0.3em] uppercase">
                                            {img.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Premium Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-[60] w-12 h-12 border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <X size={22} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => prevImage(e)}
                            className="absolute left-4 md:left-8 z-[60] w-12 h-12 border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[90vw] md:w-[80vw] max-w-6xl h-[75vh] md:h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filtered[selectedImage].src}
                                alt={filtered[selectedImage].alt}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Next Button */}
                        <button
                            onClick={(e) => nextImage(e)}
                            className="absolute right-4 md:right-8 z-[60] w-12 h-12 border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Bottom Info Bar */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-6">
                            <p className="font-montserrat text-white/50 text-[11px] tracking-[0.15em]">
                                {selectedImage + 1} / {filtered.length}
                            </p>
                            <div className="h-4 w-[1px] bg-white/20" />
                            <p className="font-montserrat text-white/70 text-[10px] tracking-[0.3em] uppercase">
                                {filtered[selectedImage].category}
                            </p>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 max-w-[90vw] overflow-x-auto pb-2">
                            {filtered.map((img, i) => (
                                <button
                                    key={img.src}
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(i); }}
                                    className={`
                                        relative w-14 h-10 md:w-16 md:h-12 overflow-hidden flex-shrink-0 
                                        transition-all duration-300 border-2
                                        ${i === selectedImage
                                            ? "border-[#4C6454] opacity-100 scale-105"
                                            : "border-transparent opacity-50 hover:opacity-80"
                                        }
                                    `}
                                >
                                    <Image
                                        src={img.src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
