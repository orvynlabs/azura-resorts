"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceItem {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const experiences: ExperienceItem[] = [
    {
        title: "THE DINING PAVILION",
        description: "When on holiday, guests seek to immerse themselves in nature's beauty and savor authentic, earthy meals. Azura's dining pavilion fulfills this by serving dishes made from the finest regional ingredients, rich in local flavors. Our expert chef and team delight foodie travelers with a diverse menu featuring both Indian and global delicacies, ensuring a memorable dining experience.",
        image: "/gallery/dining.jpg",
    },
    {
        title: "WATER VIEW INFINITY",
        description: "Inspired by the tranquil waters of the Padinjarathara reservoir, our view blends seamlessly into the natural surroundings, offering uninterrupted panoramas of the serene landscape. Designed to mirror the lake's charm, it creates the illusion of floating in nature itself — an unforgettable experience at Wayanad's finest luxury escape.",
        image: "/gallery/fullview.png",
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
        <main className="min-h-screen bg-[#FDFBF7] text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/fullproperty.jpg"
                    alt="Azura Experiences"
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
                            Discover
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.15em] mb-4"
                        >
                            EXPERIENCES
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-[1px] bg-[#C1A87D] mx-auto mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="font-montserrat text-white/70 text-sm md:text-base font-light tracking-wide"
                        >
                            A Tailored Journey Through Grandeur
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 text-xs font-montserrat tracking-[0.3em] uppercase text-gray-400 mb-10">
                        <a href="/" className="hover:text-[#C1A87D] transition-colors">Home</a>
                        <span className="text-[#C1A87D]">|</span>
                        <span className="text-[#2C3E50]">Facilities</span>
                    </div>
                    <h2 className="font-cinzel text-2xl md:text-[2.2rem] leading-snug mb-8 tracking-[0.06em] uppercase text-[#2C3E50]">
                        A Trail Through Grandeur <br />
                        Featuring Premium Amenities
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                        <div className="w-3 h-3 rounded-full border border-[#C1A87D]" />
                        <div className="h-[1px] w-16 bg-[#C1A87D]" />
                    </div>

                    <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto">
                        At Azura, every facility reflects unmatched elegance and excellence. From premium amenities to personalized service, every detail is thoughtfully crafted to elevate your stay. Experience luxury redefined — where the comforts of a world-class retreat meet the breathtaking beauty of Wayanad.
                    </p>
                </motion.div>
            </section>

            {/* Experience Cards */}
            <section className="pb-32 space-y-28 md:space-y-40">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Image — flush to edge, rounded only on inner side */}
                        <div
                            className={`
                                relative 
                                w-full lg:w-[65%] 
                                h-[350px] md:h-[450px] lg:h-[520px] 
                                overflow-hidden shadow-xl
                                ${item.reverse ? 'lg:ml-auto' : 'lg:mr-auto'}
                            `}
                            style={{
                                borderTopLeftRadius: item.reverse ? '1.5rem' : 0,
                                borderBottomLeftRadius: item.reverse ? '1.5rem' : 0,
                                borderTopRightRadius: item.reverse ? 0 : '1.5rem',
                                borderBottomRightRadius: item.reverse ? 0 : '1.5rem',
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Floating Content Card — overlaps image from corner */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className={`
                                relative lg:absolute
                                ${item.reverse
                                    ? 'lg:left-[8%] xl:left-[10%]'
                                    : 'lg:right-[8%] xl:right-[10%]'
                                }
                                lg:bottom-[-2.5rem]
                                w-[90%] md:w-[75%] lg:w-[40%]
                                mx-auto lg:mx-0
                                mt-[-3rem] lg:mt-0
                                bg-white
                                rounded-2xl
                                p-8 md:p-10 lg:p-12
                                shadow-xl
                                z-20
                            `}
                        >
                            <div className="text-center">
                                <h3 className="font-cinzel text-xl md:text-2xl mb-5 text-[#2C3E50] tracking-[0.05em] uppercase leading-snug">
                                    {item.title}
                                </h3>

                                {/* Decorative Divider */}
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="h-[1px] w-10 bg-[#C1A87D]" />
                                    <div className="w-2 h-2 rounded-full border border-[#C1A87D]" />
                                    <div className="h-[1px] w-10 bg-[#C1A87D]" />
                                </div>

                                <p className="font-montserrat text-gray-600 leading-[1.9] text-sm font-light">
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
