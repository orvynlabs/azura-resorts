"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trees, Mountain, Waves, Shield, Fish, Utensils, Link, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "One Group at a Time",
    description: "Absolute exclusivity for families and groups of up to 12 guests on our private peninsula.",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Reservoir Views",
    description: "Uninterrupted 180° panoramic views of the serene Padinjarathara reservoir from every room.",
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Signature A-Frames",
    description: "Architectural rain-safe A-frame glamping tents and premium lake-facing bedrooms.",
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Private Pool",
    description: "A dedicated 5x3 meter swimming pool (5ft depth) reserved exclusively for your group.",
  },
  {
    icon: <Fish className="w-8 h-8" />,
    title: "Live Lake Fishing",
    description: "A private fishing point on the banks with a unique 'catch-and-dine' fresh fish experience.",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Homely Cuisine",
    description: "Authentic Malabar traditional meals prepared fresh with local Wayanad spices.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-black">
      <Navbar />

      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="relative w-full h-full">
          <video
            src="/gallery/about/bg-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 text-xs md:text-sm font-montserrat tracking-[0.4em] uppercase mb-6"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.15em] uppercase mb-4"
            >
              About Azura
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-[1px] bg-[#4C6454] mx-auto"
            />
          </div>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-xs tracking-[0.4em] text-[#668270] uppercase mb-8 font-medium">
              Welcome to
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl text-[#2C3E50] mb-8 leading-snug">
              A Sanctuary Where <br />
              <span className="text-[#668270]">Water Meets Tranquility</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#4C6454] mx-auto mb-10" />
            <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto">
              Located in the tranquil village of Puttad, Meppadi, Azura is a secluded paradise
              perched on a serene peninsula overlooking the Padinjarathara reservoir. Spread across 20 cents of lush
              private land, our resort is more than a destination — it is an exclusive retreat
              designed for families and groups who seek solitude and an intimate connection with the water.
            </p>
            <p className="font-montserrat text-gray-600 leading-[2] font-light text-sm md:text-base max-w-3xl mx-auto mt-6">
              Following a unique &quot;One Group at a Time&quot; model, Azura reflects the philosophy that true peace
              lies in privacy — in the gentle sound of reservoir ripples, the mist over the hills, and the feeling of
              having an entire peninsula all to yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Image Parallax Break */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/gallery/about/fullview.webp"
            alt="Azura Property Overview"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-cinzel text-white text-2xl md:text-4xl tracking-[0.15em] text-center px-4"
          >
            &ldquo;Exclusively Yours in Wayanad&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-6 bg-[#f8f5ef]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-montserrat text-xs tracking-[0.4em] text-[#668270] uppercase mb-4 font-medium">
              What Makes Us Special
            </p>
            <h2 className="font-playfair-display text-[1.8rem] md:text-[2.6rem] text-[#1a1a1a] tracking-[0.02em]">
              The Azura Experience
            </h2>
            <div className="w-16 h-[1px] bg-[#4C6454] mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#4C6454]/30 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#4C6454]/10 flex items-center justify-center text-[#668270] group-hover:bg-[#4C6454] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-playfair-display text-[1.2rem] text-[#1a1a1a] tracking-[0.02em] mb-3">
                  {item.title}
                </h3>
                <p className="font-montserrat text-gray-500 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Story Section */}
      <section className="py-24 px-6 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/gallery/aframe.jpg"
              alt="Azura A-Frame Cottage"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-xs tracking-[0.4em] text-[#668270] uppercase mb-6 font-medium">
              Our Philosophy
            </p>
            <h2 className="font-playfair-display text-[1.8rem] md:text-[2.6rem] text-[#1a1a1a] mb-8 leading-[1.2] tracking-[0.02em]">
              Architecture Inspired <br /> by the Lake
            </h2>
            <p className="font-montserrat text-gray-600 leading-[2] font-light mb-6">
              Every structure at Azura has been conceived to harmonize with the water view. Our signature
              A-frame cottages and rain-safe tents are designed to let nature in — through
              floor-to-ceiling glass, open-air decks, and minimal environmental impact.
            </p>
            <p className="font-montserrat text-gray-600 leading-[2] font-light mb-8">
              We believe that true peace lies in total seclusion. By hosting only one group at a time,
              we allow your experience to be shaped entirely by your family, your friends, and the
              serenity of the reservoir.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#4C6454]" />
              <span className="font-montserrat text-[#668270] text-xs tracking-[0.3em] uppercase font-medium">
                Secluded Nature Design
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/gallery/swing.jpg"
          alt="Azura Swing"
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
            <p className="font-montserrat text-xs tracking-[0.4em] text-[#668270] uppercase mb-6 font-medium">
              Begin Your Journey
            </p>
            <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-8 leading-snug tracking-wide">
              Your Private Escape Awaits
            </h2>
            <p className="font-montserrat text-white/80 font-light leading-loose max-w-2xl mx-auto mb-12">
              Whether you seek a family reunion, a celebratory getaway with friends, or simply a
              private place to reconnect with the water — Azura is where your story begins.
            </p>
            <a
              href="/contact"
              className="font-montserrat inline-flex items-center gap-3 bg-[#4C6454] text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#4C6454] transition-colors duration-300 shadow-lg"
            >
              Plan Your Visit
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}