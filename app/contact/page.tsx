"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        location: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Something went wrong.");
            }

            setStatus("success");
            setFormData({ name: "", contact: "", email: "", location: "", message: "" });

            // Revert state after a few seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <main className="min-h-screen bg-[#f8f5ef]">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="relative w-full h-full">
                    <video
                        src="/gallery/contact/bg-video.mp4"
                        autoPlay
                        loop
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
                        className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-6"
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
                        <div className="h-[1px] w-16 bg-[#4C6454]" />
                        <div className="w-2 h-2 rotate-45 border border-[#4C6454]" />
                        <div className="h-[1px] w-16 bg-[#4C6454]" />
                    </motion.div>
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-8"
                    >
                        <p className="font-montserrat text-[11px] tracking-[0.2em] text-white/60">
                            <Link href="/" className="hover:text-[#668270] transition-colors">Home</Link>
                            <span className="mx-3">—</span>
                            <span className="text-white/80">Contact</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-28 md:py-36 px-6">
                <div className="max-w-[1080px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-6 font-medium">
                            We&apos;d Love to Hear From You
                        </p>
                        <h2 className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.03em] mb-10">
                            Reach a Hidden World of Tranquility
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="h-[1px] w-20 bg-[#4C6454]" />
                            <div className="w-2.5 h-2.5 rotate-45 border border-[#4C6454]" />
                            <div className="h-[1px] w-20 bg-[#4C6454]" />
                        </div>

                        <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto mb-20">
                            Located in the serene surroundings of Puttad, Meppadi, Azura is a peaceful lake-view retreat designed for families and small groups seeking privacy, comfort, and scenic beauty. Tucked away from the noise, our 20-cent property offers a fully private stay model where your group can enjoy the 180° water views in complete seclusion.
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 flex items-center justify-center border border-[#4C6454]/30 mb-6">
                                <Phone size={20} className="text-[#668270]" />
                            </div>
                            <p className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light text-center">
                                <a href="tel:+919072190088" className="hover:text-[#668270] transition-colors">+91 90721 90088</a> <br />
                                <a href="tel:+918943132890" className="hover:text-[#668270] transition-colors">+91 89431 32890</a> <br />
                                <a href="https://wa.me/918606008826" className="hover:text-[#668270] transition-colors">WA: 8606008826</a>
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
                            <div className="w-14 h-14 flex items-center justify-center border border-[#4C6454]/30 mb-6">
                                <MapPin size={20} className="text-[#668270]" />
                            </div>
                            <a
                                href="https://maps.google.com?q=Azura%20The%20Water%20View%20Resort%20Wayanad,%20Puttad%20Road,%20Meppadi,%20Kerala&ftid=0x3ba60f001b268f6f:0xc8939fc1c33a78a9&entry=gps&shh=CAE&lucs=,94259551,94297699,94284472,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light text-center hover:text-[#668270] transition-colors"
                            >
                                Azura – The Water View Resort, <br />
                                Puttad , Meppadi, Wayanad, <br />
                                Kerala, 673577, India.
                            </a>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 flex items-center justify-center border border-[#4C6454]/30 mb-6">
                                <Mail size={20} className="text-[#668270]" />
                            </div>
                            <a href="mailto:azurawayanad@gmail.com" className="font-montserrat text-[13px] text-[#1a1a1a] leading-[2] font-light text-center hover:text-[#668270] transition-colors block">
                                azurawayanad@gmail.com
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Map Section */}
            <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.3206506158174!2d76.17773378848517!3d11.58785682196572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f001b268f6f%3A0xc8939fc1c33a78a9!2sAzura%20The%20Water%20View%20Resort%20Wayanad!5e0!3m2!1sen!2sin!4v1772116807637!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Azura Resort Location"
                    className="w-full h-full"
                />

                {/* Floating Action Button for Navigation */}
                <div className="absolute top-6 right-6 z-10">
                    <a
                        href="https://maps.google.com?q=Azura%20The%20Water%20View%20Resort%20Wayanad,%20Puttad%20Road,%20Meppadi,%20Kerala&ftid=0x3ba60f001b268f6f:0xc8939fc1c33a78a9&entry=gps&shh=CAE&lucs=,94259551,94297699,94284472,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#1a1a1a] px-6 py-3 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#7a6af6] hover:text-white transition-all duration-300 shadow-2xl rounded-sm"
                    >
                        <MapPin size={14} />
                        Navigate to Resort
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
                                src="/gallery/contact/aframe.webp"
                                alt="A-frame Stay at Azura"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 border border-[#4C6454]/10" />
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-[52%] flex flex-col justify-center"
                        >
                            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-5 font-medium">
                                Write to Us
                            </p>
                            <h2 className="font-playfair-display text-2xl md:text-[2rem] leading-snug text-[#1a1a1a] tracking-[0.02em] mb-4">
                                Unwind Starts With a Message
                            </h2>

                            <div className="flex items-center gap-3 mb-12">
                                <div className="h-[1px] w-14 bg-[#4C6454]" />
                                <div className="w-2 h-2 rotate-45 border border-[#4C6454]" />
                                <div className="h-[1px] w-14 bg-[#4C6454]" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#4C6454] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Contact</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            required
                                            value={formData.contact}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#4C6454] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#4C6454] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Your city"
                                            className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#4C6454] transition-colors bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your stay preferences (Group size, Dates, BBQ/Campfire requests)..."
                                        className="w-full border-b border-[#1a1a1a]/15 py-3 focus:outline-none focus:border-[#4C6454] transition-colors bg-transparent resize-none font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/25"
                                    />
                                </div>

                                <button
                                    disabled={status === "loading" || status === "success"}
                                    className={`font-montserrat text-white px-12 py-4 uppercase tracking-[0.2em] text-[10px] font-medium transition-colors duration-300 mt-4 shadow-lg ${status === "success" ? "bg-green-600 hover:bg-green-700" :
                                        status === "loading" ? "bg-[#4C6454]/60 cursor-not-allowed" :
                                            "bg-[#4C6454] hover:bg-[#1a1a1a]"
                                        }`}
                                >
                                    {status === "loading" ? "Sending..." : status === "success" ? "Enquiry Sent ✓" : "Submit Enquiry"}
                                </button>

                                {status === "error" && (
                                    <p className="font-montserrat text-red-500 text-xs mt-4">
                                        {errorMessage}
                                    </p>
                                )}
                                {status === "success" && (
                                    <p className="font-montserrat text-[#4C6454] text-sm mt-4 font-medium">
                                        Your message has been received with care.
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}