"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] text-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/fullview.png"
                    alt="Azura Contact"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white/80 text-xs md:text-sm font-montserrat tracking-[0.4em] uppercase mb-6 text-center"
                        >
                            Get in Touch
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.15em] uppercase text-center mb-4"
                        >
                            Contact
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-[1px] bg-[#C1A87D] mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Intro / Contact Info Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs font-montserrat tracking-[0.4em] text-[#C1A87D] uppercase mb-6 font-medium">
                        We&apos;d Love to Hear From You
                    </p>
                    <h2 className="font-cinzel text-2xl md:text-3xl mb-8 tracking-wide uppercase text-[#2C3E50]">
                        Reach a Hidden World of Tranquility
                    </h2>

                    <div className="w-24 h-[1px] bg-[#C1A87D] mx-auto mb-10" />

                    <p className="font-montserrat text-gray-600 leading-[2] font-light max-w-4xl mx-auto mb-16 text-sm md:text-base">
                        Tucked deep within the forests of Wayanad, Azura is a secluded paradise located on a serene peninsula overlooking the Padinjarathara reservoir. The journey to this breathtaking destination involves a peaceful drive along a scenic road, revealing glimpses of untouched wilderness. Upon arrival, guests are greeted by a panoramic view of the tranquil lake and dense forest.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#C1A87D] flex items-center justify-center text-white mb-6 shadow-lg">
                            <Phone size={24} />
                        </div>
                        <p className="font-montserrat text-[#2C3E50] font-medium text-sm md:text-base">
                            1800 891 3090 <br />
                            +91 9778413702
                        </p>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#C1A87D] flex items-center justify-center text-white mb-6 shadow-lg">
                            <MapPin size={24} />
                        </div>
                        <p className="font-montserrat text-[#2C3E50] font-medium text-sm md:text-base px-4">
                            Azura Resort, <br />
                            Padinjarathara, Wayanad, <br />
                            Kerala, 673575, India.
                        </p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#C1A87D] flex items-center justify-center text-white mb-6 shadow-lg">
                            <Mail size={24} />
                        </div>
                        <p className="font-montserrat text-[#2C3E50] font-medium text-sm md:text-base">
                            reservations@azuraresort.in
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Location Map Section (Image + Button) */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden group">
                <Image
                    src="/gallery/fullproperty.jpg"
                    alt="Azura Location"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="font-montserrat bg-white text-[#2C3E50] px-8 py-3 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#C1A87D] hover:text-white transition-colors duration-300 shadow-md">
                        View Location Map
                    </button>
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden rounded-3xl shadow-xl">
                        <Image
                            src="/gallery/interior.jpg"
                            alt="Unwind at Azura"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 lg:pl-10">
                        <p className="text-xs font-montserrat tracking-[0.4em] text-[#C1A87D] uppercase mb-4 font-medium">
                            Write to Us
                        </p>
                        <h2 className="font-cinzel text-2xl md:text-3xl mb-12 text-[#2C3E50] uppercase tracking-wide">
                            Unwind Starts With A Message
                        </h2>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">Contact</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">Email</label>
                                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">Location</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-500">Message</label>
                                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent resize-none font-montserrat"></textarea>
                            </div>

                            <button className="font-montserrat bg-[#C1A87D] text-white px-10 py-3 rounded-full uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#a89268] transition-colors duration-300 mt-4 shadow-lg">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
