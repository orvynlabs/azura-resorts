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
        title: "WATER VIEW INFINITY",
        description: "Inspired by the tranquil waters of the Padinjarathara reservoir, our view blends seamlessly into the natural surroundings, offering uninterrupted panoramas of the serene landscape. Designed to mirror the lake's charm, it creates the illusion of floating in nature itself — an unforgettable experience at Wayanad's finest luxury escape.",
        image: "/gallery/fullview.png",
    },
    {
        title: "THE DINING PAVILION",
        description: "When on holiday, guests seek to immerse themselves in nature's beauty and savor authentic, earthy meals. Azura's dining pavilion fulfills this by serving dishes made from the finest regional ingredients, rich in local flavors. Our expert chef and team delight foodie travelers with a diverse menu featuring both Indian and global delicacies, ensuring a memorable dining experience.",
        image: "/gallery/dining.jpg",
        reverse: true,
    },
    {
        title: "PREMIUM ACCOMMODATIONS",
        description: "Experience luxury redefined — where the comforts of a world-class retreat meet the breathtaking beauty of nature. Our signature A-frame cottages and premium rooms, nested among tall trees, offer unmatched elegance. From premium amenities to personalized service, every detail is thoughtfully crafted to elevate your stay.",
        image: "/gallery/room.jpg",
    },
    {
        title: "RECREATION & ACTIVITIES",
        description: "From cozy campfires under the stars to engaging indoor games like carroms and darts, Azura offers a variety of ways to unwind and connect. Whether you seek the thrill of a game or the warmth of a fire, our recreational spaces are designed for joy and relaxation.",
        image: "/gallery/campfire.jpg",
        reverse: true,
    },
];

export default function Experiences() {
    return (
        <main className="min-h-screen bg-[#f8f5ef]">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/fullproperty.jpg"
                    alt="Azura Experiences"
                    fill
                    className="object-cover"
                    priority
                />
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
            <section className="py-28 md:py-36 px-6">
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
            <section className="pb-28 md:pb-36 space-y-24 md:space-y-32">
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
                                h-[320px] md:h-[420px] lg:h-[520px] 
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
                                p-8 md:p-10 lg:p-14
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
