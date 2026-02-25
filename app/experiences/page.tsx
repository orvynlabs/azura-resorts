"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ExperienceItem {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const experiences: ExperienceItem[] = [
    {
        title: "A-FRAME LAKE VIEW STAY",
        description: "Our signature A-frame cottages are architectural masterpieces designed to bring the outdoors in. Wake up to the gentle mist over the water and enjoy the luxury of a private balcony that offers an uninterrupted view of the lake, blending modern comfort with the rustic charm of the forest.",
        image: "/gallery/experiences/a-frame.webp",
    },
    {
        title: "LAKE VIEW DINING",
        description: "Experience the magic of a meal overlooking the vast Karappuzha reservoir. Our dining area is positioned to provide breathtaking water views, where the cool breeze and the sound of ripples create the perfect backdrop for a romantic dinner or a peaceful breakfast.",
        image: "/gallery/experiences/dining.webp",
        reverse: true,
    },
    {
        title: "PREMIUM LAKESIDE ROOMS",
        description: "Designed for ultimate relaxation, our rooms feature expansive glass walls that frame the stunning landscape. With plush bedding, modern amenities, and a layout that maximizes natural light, every room serves as a private sanctuary nestled in the heart of Wayanad.",
        image: "/gallery/experiences/room3.webp",
    },
    {
        title: "KIDS & FAMILY POOL",
        description: "Beyond the infinity edge, we offer a dedicated swimming area perfect for families. Safe, clean, and surrounded by greenery, it’s a great spot for a relaxed morning dip or fun splashes with the kids.",
        image: "/gallery/experiences/pool.webp",
        reverse: true,
    },
    {
        title: "ELEGANT INTERIORS",
        description: "Step into a world of refined aesthetics. Our interiors feature warm wooden textures, glassmorphism accents, and cozy lighting designed to create a soothing atmosphere that complements the natural beauty visible through our expansive glass walls.",
        image: "/gallery/experiences/interior.webp",
    },
    {
        title: "HOMELY TRADITIONAL CUISINE",
        description: "Savor the authentic soul of Kerala with our 'homely' food experience. We specialize in traditional Malabar flavors, prepared with locally sourced spices and farm-fresh ingredients. It’s not just a meal; it’s a taste of Wayanad’s heritage served with love.",
        image: "/gallery/experiences/traditional-food.webp",
        reverse: true,
    },
    {
        title: "LIVE LAKE FISH DINING",
        description: "From the water to your plate—experience the ultimate freshness with our live lake fish specialty. Pick your catch and watch as our chefs transform it into a flavorful delicacy using traditional clay pot cooking or spicy Tawa grills.",
        image: "/gallery/experiences/live-fish.webp",

    },
    {
        title: "INDOOR GAMES & CARROMS",
        description: "For those moments of friendly competition, head to our recreation zone. Enjoy a classic game of Carroms, Darts, or Board Games—perfect for rainy afternoons or winding down after a day of trekking.",
        image: "/gallery/experiences/chess.webp",
        reverse: true,
    },
    {
        title: "PRIVATE FISHING POINT",
        description: "Find your calm at our dedicated lakeside fishing point. Whether you are a seasoned angler or a beginner, the serene banks of the reservoir offer a peaceful spot to cast a line and enjoy the quiet rhythm of the water.",
        image: "/gallery/experiences/fishing.webp",

    },
    {
        title: "GRILLING & BBQ FACILITIES",
        description: "Ignite your evenings with our outdoor grilling setups. Perfect for families and groups, our BBQ facility allows you to enjoy a lakeside cookout under the open sky, featuring marinated treats grilled to perfection.",
        image: "/gallery/experiences/bbq.webp",
        reverse: true,
    },
    {
        title: "CAMPFIRE & MUSICAL NIGHTS",
        description: "As the sun sets, the magic begins. Gather around a crackling campfire for an evening of music, laughter, and storytelling. It’s the perfect way to unwind and enjoy the rhythmic sounds of the night.",
        image: "/gallery/experiences/campfire.webp",
    },
];

export default function Experiences() {
    return (
        <main className="min-h-screen bg-[#f8f5ef]">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="relative w-full h-full">
                    <video
                        src="/gallery/experiences/bg-video.mp4"
                        autoPlay
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6"
                    >
                        Discover
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.2em] uppercase mb-6"
                    >
                        E x p e r i e n c e s
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
                            <span className="text-white/80">Experiences</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6 font-medium">
                            Curated For You
                        </p>
                        <h2 className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.03em] mb-10">
                            A Trail Through Grandeur <br />
                            Featuring Unique Experiences
                        </h2>

                        {/* Decorative Gold Divider */}
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                            <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                        </div>

                        <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[800px] mx-auto">
                            At Azura, every experience is crafted to immerse you in the natural beauty and tranquility of Wayanad. From serene water views to authentic culinary journeys, every moment is thoughtfully designed to create lasting memories amidst the breathtaking beauty of our secluded peninsula retreat.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience Cards */}
            <section className="pb-16 md:pb-20 space-y-16 md:space-y-20">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Image — flush to screen edge, rounded only on inner side */}
                        <div
                            className={`
                                relative 
                                w-full lg:w-[62%] 
                                h-[260px] md:h-[340px] lg:h-[420px] 
                                overflow-hidden
                                ${item.reverse ? 'lg:ml-auto' : 'lg:mr-auto'}
                            `}
                            style={{
                                borderTopLeftRadius: item.reverse ? '1rem' : 0,
                                borderBottomLeftRadius: item.reverse ? '1rem' : 0,
                                borderTopRightRadius: item.reverse ? 0 : '1rem',
                                borderBottomRightRadius: item.reverse ? 0 : '1rem',
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Floating Content Card — overlaps image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className={`
                                relative lg:absolute
                                ${item.reverse
                                    ? 'lg:left-[6%] xl:left-[8%]'
                                    : 'lg:right-[6%] xl:right-[8%]'
                                }
                                lg:top-1/2 lg:-translate-y-1/2
                                w-[92%] md:w-[80%] lg:w-[42%]
                                mx-auto lg:mx-0
                                mt-[-2rem] lg:mt-0
                                bg-white
                                rounded-[1rem]
                                p-6 md:p-8 lg:p-10
                                shadow-[0_4px_40px_rgba(0,0,0,0.08)]
                                z-20
                            `}
                        >
                            <div className="text-center">
                                {/* Gold label */}
                                <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                                    {index === 0 ? "Infinity View" : index === 1 ? "Culinary Excellence" : index === 2 ? "Accommodation" : "Leisure & Fun"}
                                </p>

                                <h3 className="font-playfair-display text-xl md:text-[1.5rem] lg:text-[1.7rem] mb-6 text-[#1a1a1a] tracking-[0.02em] leading-snug">
                                    {item.title}
                                </h3>

                                {/* Decorative Divider */}
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="h-[1px] w-12 bg-[#C1A87D]" />
                                    <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                                    <div className="h-[1px] w-12 bg-[#C1A87D]" />
                                </div>

                                <p className="font-montserrat text-[#5a5a5a] leading-[2] text-[13px] font-light">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
