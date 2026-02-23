"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
    src: string;
    category: string;
    alt: string;
    span?: string; // for varying grid sizes
}

const categories = ["All", "Location", "Villas", "Facilities", "Activities", "Culinary"];

const galleryImages: GalleryImage[] = [
    // Location
    { src: "/gallery/fullview.png", category: "Location", alt: "Panoramic view of Azura Resort on the reservoir", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/gallery/fullproperty.jpg", category: "Location", alt: "Full property aerial view of Azura", span: "col-span-1 row-span-1" },
    { src: "/gallery/swing (2).jpg", category: "Location", alt: "Scenic landscape around Azura Resort" },
    { src: "/gallery/IMG_20241130_183317_312.jpg", category: "Location", alt: "Misty morning at the reservoir" },
    { src: "/gallery/IMG_20241130_183406_380.webp", category: "Location", alt: "Aerial view of the island resort" },

    // Villas
    { src: "/gallery/aframe.jpg", category: "Villas", alt: "Premium A-Frame cottage", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/gallery/room.jpg", category: "Villas", alt: "Luxury room interior" },
    { src: "/gallery/interior.jpg", category: "Villas", alt: "Cottage interior with modern amenities" },
    { src: "/gallery/aframe (2).jpg", category: "Villas", alt: "A-Frame cottage exterior view" },
    { src: "/gallery/aframe (3).jpg", category: "Villas", alt: "A-Frame cottage nestled in forest" },
    { src: "/gallery/room (2).jpg", category: "Villas", alt: "Deluxe room interior" },

    // Facilities
    { src: "/gallery/pool.jpeg", category: "Facilities", alt: "Infinity pool overlooking the lake" },
    { src: "/gallery/dartboard.jpg", category: "Facilities", alt: "Indoor games - Dartboard" },
    { src: "/gallery/carroms.jpg", category: "Facilities", alt: "Indoor games - Carrom board" },
    { src: "/gallery/chess (2).jpg", category: "Facilities", alt: "Indoor games - Chess" },
    { src: "/gallery/swing.jpg", category: "Facilities", alt: "Lakeside swing" },

    // Activities
    { src: "/gallery/campfire.jpg", category: "Activities", alt: "Evening campfire under the stars", span: "col-span-1 md:col-span-2 row-span-2" },

    // Culinary
    { src: "/gallery/dining.jpg", category: "Culinary", alt: "Outdoor dining pavilion", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/gallery/dining (3).jpg", category: "Culinary", alt: "Authentic Kerala cuisine" },
];

export default function GallerySlider() {
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
        <div className="bg-[#FDFBF7]">
            {/* Section Header */}
            <div className="text-center pt-24 pb-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                        The Exceptional Part
                    </p>
                    <h2 className="font-cinzel text-2xl md:text-[2.2rem] leading-snug text-[#2C3E50] uppercase tracking-[0.06em] mb-6">
                        Explore Gallery
                    </h2>

                    {/* Gold Ornamental Divider */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                        <div className="w-3 h-3 rounded-full border border-[#C1A87D]" />
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                    </div>
                </motion.div>

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
                                font-montserrat text-[11px] md:text-xs tracking-[0.2em] uppercase px-6 py-2.5 
                                rounded-full border transition-all duration-300 font-medium
                                ${activeCategory === cat
                                    ? "bg-[#C1A87D] border-[#C1A87D] text-white shadow-md"
                                    : "bg-transparent border-[#C1A87D]/40 text-[#2C3E50] hover:border-[#C1A87D] hover:text-[#C1A87D]"
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Image Grid */}
            <div className="px-1 md:px-2 pb-24">
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((img, index) => (
                            <motion.div
                                key={img.src}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className={`
                                    relative cursor-pointer overflow-hidden group
                                    ${activeCategory === "All" && img.span ? img.span : ""}
                                `}
                                style={{ aspectRatio: activeCategory === "All" && img.span?.includes("row-span-2") ? undefined : "4/3" }}
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                                        <div className="w-10 h-10 mx-auto rounded-full border-2 border-white/80 flex items-center justify-center mb-2">
                                            <span className="text-white text-lg font-light">+</span>
                                        </div>
                                        <p className="font-montserrat text-white/90 text-[10px] tracking-[0.2em] uppercase">
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
                            className="absolute top-6 right-6 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <X size={24} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => prevImage(e)}
                            className="absolute left-4 md:left-8 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <ChevronLeft size={28} />
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
                            className="absolute right-4 md:right-8 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Bottom Info Bar */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-6">
                            <p className="font-montserrat text-white/50 text-xs tracking-[0.15em]">
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
                                        relative w-14 h-10 md:w-16 md:h-12 rounded-sm overflow-hidden flex-shrink-0 
                                        transition-all duration-300 border-2
                                        ${i === selectedImage
                                            ? "border-[#C1A87D] opacity-100 scale-105"
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
