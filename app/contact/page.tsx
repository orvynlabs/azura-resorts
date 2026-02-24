"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#f8f5ef]">
            <Navbar />

            {/* Hero Section — "Enquiry" heading with breadcrumb */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src="/gallery/fullview.png"
                    alt="Azura Contact"
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
                        Get in Touch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.2em] uppercase mb-6"
                    >
                        E n q u i r y
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center gap-3"
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
                            <span className="text-white/80">Contact</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Section — "Reach a Hidden World of Tranquility" */}
            <section className="py-28 md:py-36 px-6">
                <div className="max-w-[1080px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6 font-medium">
                            We&apos;d Love to Hear From You
                        </p>
                        <h2 className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.03em] mb-10">
                            Reach a Hidden World of Tranquility
                        </h2>

                        {/* Decorative Gold Divider */}
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                            <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
                            <div className="h-[1px] w-20 bg-[#C1A87D]" />
                        </div>

                        <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto mb-20">
                            Tucked deep within the forests of Wayanad, Azura is a secluded paradise located on a serene peninsula overlooking the Padinjarathara reservoir. The journey to this breathtaking destination involves a peaceful drive along a scenic road, revealing glimpses of untouched wilderness. Upon arrival, guests are greeted by a panoramic view of the tranquil lake and dense forest.
                        </p>
                    </motion.div>

                    {/* Contact Info Cards — 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 flex items-center justify-center border border-[#C1A87D]/30 mb-6">
                                <Phone size={20} className="text-[#C1A87D]" />
                            </div>
                            <p className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light">
                                1800 891 3090 <br />
                                +91 9778413702
                            </p>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 flex items-center justify-center border border-[#C1A87D]/30 mb-6">
                                <MapPin size={20} className="text-[#C1A87D]" />
                            </div>
                            <p className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light">
                                Azura Resort, <br />
                                Padinjarathara, Wayanad, <br />
                                Kerala, 673575, India.
                            </p>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 flex items-center justify-center border border-[#C1A87D]/30 mb-6">
                                <Mail size={20} className="text-[#C1A87D]" />
                            </div>
                            <p className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light">
                                reservations@azuraresort.in
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Map Section */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.4!2d76.05!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f6e!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Azura Resort Location"
                    className="w-full h-full"
                />
                {/* Overlay with location button */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f5ef] to-transparent pointer-events-none" />
                <div className="absolute top-6 right-6 z-10">
                    <a
                        href="https://maps.google.com/?q=Padinjarathara,+Wayanad,+Kerala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-montserrat bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-6 py-3 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#C1A87D] hover:text-white transition-all duration-300 shadow-lg"
                    >
                        <MapPin size={14} />
                        Open in Maps
                        <ExternalLink size={12} className="opacity-60" />
                    </a>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-28 md:py-36 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-[48%] h-[400px] lg:h-auto lg:min-h-[600px] relative overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src="/gallery/interior.jpg"
                                alt="Unwind at Azura"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 border border-[#C1A87D]/10" />
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-[52%] flex flex-col justify-center"
                        >
                            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">
                                Write to Us
                            </p>
                            <h2 className="font-playfair-display text-2xl md:text-[2rem] leading-snug text-[#1a1a1a] tracking-[0.02em] mb-4">
                                Unwind Starts With a Message
                            </h2>

                            {/* Decorative Divider */}
                            <div className="flex items-center gap-3 mb-12">
                                <div className="h-[1px] w-14 bg-[#C1A87D]" />
                                <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                                <div className="h-[1px] w-14 bg-[#C1A87D]" />
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Contact</label>
                                        <input
                                            type="text"
                                            placeholder="Phone number"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Location</label>
                                        <input
                                            type="text"
                                            placeholder="Your city"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your stay preferences..."
                                        className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#C1A87D] transition-colors bg-transparent resize-none font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                    />
                                </div>

                                <button className="font-montserrat bg-[#C1A87D] text-white px-12 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#a89268] transition-colors duration-300 mt-4 shadow-lg">
                                    Submit Enquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
