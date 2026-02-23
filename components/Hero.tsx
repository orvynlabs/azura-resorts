"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroOverlay from "./HeroOverlay";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ["0.2em", "0.5em"]);
    const subTitleOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Scroll Scale */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 w-full h-full"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/resort_main_image.PNG')",
                    }}
                >
                    {/* Animated Clouds/Stars Overlay */}
                    <HeroOverlay />
                </div>
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">

                <motion.h1
                    style={{ opacity, letterSpacing }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-montserrat font-bold mb-2 uppercase"
                >
                    AZURA
                </motion.h1>

                {/* Loading Line Animation */}
                {/* Loading Line Animation */}
                <motion.div
                    style={{ opacity, width: 0 }}
                    animate={{ width: "220px" }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    className="h-[1px] bg-white mb-6"
                />

                <motion.div
                    style={{ opacity: subTitleOpacity }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center gap-2 mb-8"
                >
                    <h2 className="text-sm md:text-lg font-bricolage-grotesque font-medium tracking-[0.4em] uppercase">
                        Where Water Meets Tranquility
                    </h2>
                </motion.div>
            </div>

        </div>
    );
}
