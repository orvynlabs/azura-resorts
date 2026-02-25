"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface Place {
    title: string;
    subtitle: string;
    description: string;
    distance: string;
    image: string;
    category: string;
}

const places: Place[] = [
    // --- VIEWPOINTS ---
    {
        title: "Nellarachal View Point",
        subtitle: "Lakeside Sunset Haven",
        description: "A hidden gem near Meppadi where the Karapuzha reservoir backwaters wrap around a small peninsula. Known for its bucolic charm and golden sunset views over the water.",
        distance: "3.6 km from Azura",
        image: "/gallery/placeToVisit/nellarchal.webp",
        category: "Viewpoint",
    },
    {
        title: "Edakkal Caves",
        subtitle: "Ancient Petroglyphs",
        description: "A moderate trek leads to these prehistoric caves featuring rock engravings dating back to 6000 BC, offering a glimpse into early human civilization.",
        distance: "15 km from Azura",
        image: "/gallery/placeToVisit/edakkal-caves.webp",
        category: "Heritage",
    },
    {
        title: "900 Kandi Glass Bridge",
        subtitle: "Walk Above the Clouds",
        description: "An adrenaline-pumping architectural marvel in the middle of a deep jungle. The transparent bridge provides a 360-degree view of the tropical rainforest 100 feet below.",
        distance: "20 km from Azura",
        image: "/gallery/placeToVisit/900-kandi glass bridge.webp",
        category: "Adventure",
    },

    // --- WATERFALLS ---
    {
        title: "Kanthanpara Waterfalls",
        subtitle: "Serene & Family Friendly",
        description: "A smaller, peaceful waterfall surrounded by tea and coffee plantations. Its gentle cascades make it safer for families and children compared to larger falls.",
        distance: "10 km from Azura",
        image: "/gallery/placeToVisit/kanthanpara-waterfalls.webp",
        category: "Nature",
    },
    {
        title: "Soochipara Waterfalls",
        subtitle: "Sentinel Rock Cascades",
        description: "A spectacular three-tiered waterfall where the water crashes down into a large pool. A short trek through the tea estates leads you to this refreshing natural shower.",
        distance: "21 km from Azura",
        image: "/gallery/placeToVisit/Soochipara_Falls,_Wayanad.webp",
        category: "Nature",
    },

    // --- NATURE & ADVENTURE ---
    {
        title: "Chembra Peak",
        subtitle: "Heart-Shaped Lake Trek",
        description: "The highest peak in Wayanad. Famous for its heart-shaped lake (Hridaya Saras) near the top, offering a challenging but rewarding trek through misty grasslands.",
        distance: "15 km from Azura",
        image: "/gallery/placeToVisit/chembra_peak.webp",
        category: "Adventure",
    },
    {
        title: "Muthanga Wildlife Sanctuary",
        subtitle: "Jungle Jeep Safari",
        description: "Experience the wilderness of the Nilgiri Biosphere. Jeep safaris here offer high chances of spotting wild elephants, deer, and diverse bird species in their natural habitat.",
        distance: "31 km from Azura",
        image: "/gallery/placeToVisit/Tholpetty_Wildlife_Sanctuary_Whe.webp",
        category: "Wildlife",
    },
    {
        title: "Kuruva Island",
        subtitle: "Bamboo Rafting Experience",
        description: "A massive protected river delta on the Kabini River. Explore the interconnected uninhabited islands via bamboo rafts and walking trails through dense evergreen forests.",
        distance: "46 km from Azura",
        image: "/gallery/placeToVisit/kuruva-island.webp",
        category: "Nature",
    },
    {
        title: "En Ooru",
        subtitle: "Tribal Heritage Village",
        description: "Kerala's first tribal heritage village. It offers an immersive look into the traditions, handicrafts, and ethnic food of Wayanad's indigenous communities.",
        distance: "30 km from Azura",
        image: "/gallery/placeToVisit/en_uru_kerala_s_first_tribal_her.webp",
        category: "Heritage",
    },

    // --- LAKES & DAMS ---
    {
        title: "Karappuzha Dam",
        subtitle: "Picturesque Earth Dam",
        description: "One of the largest earth dams in India. The surrounding park and the massive reservoir offer boating facilities and a beautiful environment for evening walks.",
        distance: "9.6 km from Azura",
        image: "/gallery/placeToVisit/Karapuzha-Dam.webp",
        category: "Nature",
    },
    {
        title: "Pookode Lake",
        subtitle: "Natural Freshwater Retreat",
        description: "A natural freshwater lake nestled between evergreen forests. Perfect for pedal boating and walking along the shaded pathway circling the lake.",
        distance: "22 km from Azura",
        image: "/gallery/placeToVisit/pookode-lake.webp",
        category: "Nature",
    },
    {
        title: "Banasura Sagar Dam",
        subtitle: "Asia's Largest Earth Dam",
        description: "Known for its stunning islands formed by the reservoir's backwaters. Visitors can enjoy speed boating and trekking to the nearby Banasura Peak.",
        distance: "39 km from Azura",
        image: "/gallery/placeToVisit/banasura-sagar.webp",
        category: "Nature",
    },


];

export default function PlacesToVisit() {
    return (
        <main className="min-h-screen bg-[#f8f5ef] text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/placeToVisit/wayanad.webp"
                    alt="Wayanad Landscape"
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
                            Explore the Region
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.15em] uppercase mb-4"
                        >
                            Places to Visit
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
                            Wayanad, Kerala — The Green Paradise of India
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-xs tracking-[0.4em] text-[#C1A87D] uppercase mb-6 font-medium">
                            Discover Wayanad
                        </p>
                        <h2 className="font-cinzel text-2xl md:text-4xl text-[#2C3E50] mb-8 leading-relaxed">
                            Beyond the Resort, <br />
                            <span className="text-[#C1A87D]">A World Awaits</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-[#C1A87D] mx-auto mb-10" />
                        <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto">
                            Wayanad is a land of ancient caves, misty peaks, sacred temples, and cascading
                            waterfalls. From Azura, some of Kerala&apos;s most captivating landscapes are just a
                            short drive away. Let the Western Ghats be your backdrop for adventure, history,
                            and spiritual discovery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Places Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto space-y-20">
                    {places.map((place, index) => {
                        const isReversed = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`
                                    flex flex-col 
                                    lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} 
                                    items-center 
                                    gap-8 lg:gap-16
                                    group
                                `}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-[55%] relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase bg-white/90 text-[#2C3E50] px-4 py-2 rounded-full font-medium backdrop-blur-sm">
                                            {place.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`w-full lg:w-[45%] ${isReversed ? "lg:pr-8" : "lg:pl-8"}`}>
                                    <p className="font-montserrat text-xs tracking-[0.3em] text-[#C1A87D] uppercase mb-4 font-medium">
                                        {place.subtitle}
                                    </p>
                                    <h3 className="font-cinzel text-2xl md:text-4xl text-[#2C3E50] mb-6 tracking-wide">
                                        {place.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="h-[1px] w-10 bg-[#C1A87D]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1A87D]" />
                                        <div className="h-[1px] w-10 bg-[#C1A87D]" />
                                    </div>
                                    <p className="font-montserrat text-gray-600 leading-[1.9] font-light text-sm md:text-base mb-8">
                                        {place.description}
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <MapPin size={16} className="text-[#C1A87D]" />
                                            <span className="font-montserrat text-xs tracking-wider font-medium">
                                                {place.distance}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Map / CTA Section */}
            <section className="relative py-28 overflow-hidden">
                <Image
                    src="/gallery/fullview.png"
                    alt="Wayanad Panorama"
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
                            Plan Your Exploration
                        </p>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-6 tracking-wide">
                            Let Us Curate <br /> Your Itinerary
                        </h2>
                        <p className="font-montserrat text-white/70 font-light leading-loose max-w-2xl mx-auto mb-10 text-sm md:text-base">
                            Our concierge team will help plan day trips, arrange private guides,
                            and ensure you experience the very best of Wayanad during your stay.
                        </p>
                        <a
                            href="/contact"
                            className="font-montserrat inline-flex items-center gap-3 bg-[#C1A87D] text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#a89268] transition-colors duration-300 shadow-lg"
                        >
                            Get in Touch
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
