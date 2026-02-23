"use client";

import { motion } from "framer-motion";
import { Waves, Flame, Armchair, Coffee } from "lucide-react";

const amenities = [
    {
        title: "Private Swimming Pool",
        description: "Dive into serenity with your own private pool, overlooking the tranquil waters.",
        icon: Waves,
    },
    {
        title: "Lake-View Balcony",
        description: "Sip your morning coffee or evening wine with breathtaking panoramic views.",
        icon: Armchair,
    },
    {
        title: "Campfire & BBQ",
        description: "Gather around the warmth of a fire under the starlit sky with a gourmet BBQ.",
        icon: Flame,
    },
    {
        title: "Gourmet Dining",
        description: "Authentic, earthy meals prepared with fresh, local ingredients.",
        icon: Coffee,
    }
];

export default function Amenities() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-cinzel text-3xl md:text-5xl mb-6 tracking-wide">
                        Curated Amenities
                    </h2>
                    <p className="font-montserrat text-gray-400 max-w-2xl mx-auto font-light">
                        Designed for comfort, crafted for luxury. Enjoy a suite of premium amenities at your fingertips.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 p-4 bg-[#C1A87D]/10 rounded-full w-fit group-hover:bg-[#C1A87D]/20 transition-colors">
                                <item.icon className="w-8 h-8 text-[#C1A87D]" />
                            </div>
                            <h3 className="font-cinzel text-xl mb-3 text-white">
                                {item.title}
                            </h3>
                            <p className="font-montserrat text-gray-400 text-sm leading-relaxed font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
