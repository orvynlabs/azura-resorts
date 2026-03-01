"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TreePine, Waves, MapPin, Utensils, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import HeroOverlay from "@/components/HeroOverlay";
import LiquidEffect from "@/components/LiquidEffect";
import ScrollSection from "@/components/ScrollSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useBooking } from "@/context/BookingContext";

const experiencesData = [
  {
    image: "/gallery/gallery/aframe.webp",
    tagline: "NATURE'S EMBRACE",
    title: "Suspended Living",
    subtitle: "SIGNATURE A-FRAME TENTS",
    description: "Experience the thrill of the wild with resort-grade security. Our lake-facing A-frame tents are fully rain-safe and forest-integrated, featuring premium bedding and private deck access to watch the reservoir ripples under the stars."
  },
  {
    image: "/gallery/gallery/pool.jpeg",
    tagline: "THE OASIS",
    title: "Private Plunge Pool",
    subtitle: "EXCLUSIVE LAKESIDE SANCTUARY",
    description: "Submerge into our pristine 5x3 meter private swimming pool. Designed with a gentle 5ft uniform depth, it perfectly balances relaxation and safety—reserved exclusively for your private group overlooking the Padinjarathara Reservoir."
  },
  {
    image: "/gallery/gallery/dining.jpg",
    tagline: "THE EXPERIENCE",
    title: "Culinary Pavilion",
    subtitle: "MALABAR TRADITIONAL FLAVORS",
    description: "Savour authentic, earthy meals prepared from the finest regional ingredients. From live lake fish to traditional Kerala delicacies, every dish celebrates the flavours of Wayanad — best enjoyed with the forest breeze."
  }
];

function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiencesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = experiencesData[currentIndex];

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden -mt-12 md:-mt-20 z-[55] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image src={current.image} alt={current.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 max-w-[1200px] mx-auto px-6 flex items-center justify-end z-10 pointer-events-none">

        {/* Glassmorphism content box aligned to the right, simulating the reference */}
        <div className="w-full md:w-[600px] bg-white/40 backdrop-blur-xl border border-white/20 p-10 md:p-14 shadow-2xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-montserrat text-[10px] md:text-xs tracking-[0.4em] text-[#668270] uppercase mb-4 font-medium">{current.tagline}</p>
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[60px] leading-[1.1] text-white tracking-[0.02em] font-medium mb-4">{current.title}</h2>
              <p className="font-montserrat text-[10px] tracking-[0.2em] text-[#668270] uppercase mb-6 font-medium">{current.subtitle}</p>

              <div className="flex items-center gap-4 mb-8 text-white/50">
                <div className="h-[1px] w-12 bg-white/30" />
                <div className="w-2 h-2 rotate-45 border border-white/50" />
                <div className="h-[1px] w-12 bg-white/30" />
              </div>

              <p className="font-montserrat text-white/90 text-[13px] md:text-[14px] leading-[2.4] font-light">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {experiencesData.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-500 rounded-full ${idx === currentIndex ? "w-8 h-2 bg-[#4C6454]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

const reviewsData = [
  {
    "text": "\"A truly peaceful retreat with a stunning water view from the peninsula. The premium amenities and attentive service gave our group a wonderful 'homely' feeling throughout our group stay.\"",
    "name": "Ashraf KK",
    "title": "Guest"
  },
  {
    "text": "\"The caretaker hospitality here is exceptional. Between the elegantly designed rooms and totally private peninsula, the resort creates a tranquil ambiance that is absolutely perfect for a vacation.\"",
    "name": "Suresh Kumar P N",
    "title": "Guest"
  },
  {
    "text": "\"Azura is a neat and beautiful resort that delivers a full vibe! The traditional Kerala food was incredibly tasty and the entire private lake view experience was well worth it. We actually tried to extend our stay.\"",
    "name": "Sharoon PM",
    "title": "Traveler"
  },
  {
    "text": "\"The lake views here are breathtaking and the resort is very customer-friendly. The rooms are spacious and impeccably clean, and the caretaker went out of his way to be helpful. Excellent private stay!\"",
    "name": "Samved Sandeep",
    "title": "Vacationer"
  },
  {
    "text": "\"We really enjoyed this location; it is such a peaceful place with high-quality service. Everything from the private nature environment to the staff was excellent. It leaves you feeling genuinely refreshed.\"",
    "name": "Manzoor Ali",
    "title": "Guest"
  },
  {
    "text": "\"A beautiful place to stay in Wayanad. We were so impressed by the pristine water view and the hospitality. Definitely a top choice for a friends' getaway or a peaceful family home-stay experience.\"",
    "name": "Abhinaya Ammu",
    "title": "Traveler"
  }
];

function TrustSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 bg-white overflow-hidden rounded-[40px] -mt-12 md:-mt-20 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <ScrollSection>
          <div className="text-center mb-20">
            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-4 font-medium">The Trust</p>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl leading-snug text-[#1a1a1a] tracking-[0.03em] font-medium">Social Proof</h2>
          </div>
        </ScrollSection>

        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-16 md:pb-0 px-4 md:px-0">
          {reviewsData.map((review, i) => {
            const initials = review.name.split(" ").map(n => n[0]).join("");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-[85vw] md:min-w-0 snap-center h-full"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="bg-white border border-[#4C6454]/10 rounded-[40px] p-8 md:p-10 flex flex-col h-full shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(76,100,84,0.15)] hover:-translate-y-2 hover:border-[#4C6454]/30 transition-all duration-500 ease-out group"
                >
                  <div className="flex items-center gap-1.5 mb-6 text-[#1a1a1a] group-hover:text-[#668270] transition-colors duration-500">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={20} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>

                  <p className="font-montserrat text-[14px] text-[#5a5a5a] font-light leading-[2] flex-grow mb-10">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#f8f5ef] flex items-center justify-center border border-[#eaeaea] shrink-0 shadow-inner">
                      <span className="font-montserrat text-[12px] font-medium text-[#668270]">{initials}</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat text-[14px] font-medium text-[#1a1a1a] tracking-wide">{review.name}</h4>
                      <p className="font-montserrat text-[11px] text-[#5a5a5a] mt-1 uppercase tracking-widest">{review.title}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroSubTitleOpacity = useTransform(scrollYProgress, [0, 0.25], [0.8, 0]);

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <main className="min-h-screen bg-[#f8f5ef] overflow-hidden">
        <Navbar />

        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div style={mounted ? { y: heroY } : undefined} className="absolute inset-0 w-full h-[110%] will-change-transform">
            <Image src="/resort_main_image.PNG" alt="Azura Resort" fill priority unoptimized quality={100} className="object-cover object-center animate-kenburns" style={{ filter: "brightness(1.1) contrast(1.1) saturate(1.15)" }} sizes="100vw" />
            <HeroOverlay />
          </motion.div>
          <LiquidEffect />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
            <motion.p style={mounted ? { opacity: heroSubTitleOpacity } : undefined} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.7, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-[10px] md:text-xs font-montserrat tracking-[0.5em] uppercase text-[#668270] mb-6">
              The Water View Resort
            </motion.p>
            <motion.h1 style={mounted ? { opacity: heroContentOpacity } : undefined} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-5xl md:text-8xl lg:text-9xl font-cinzel font-normal mb-4 uppercase text-white tracking-[0.1em] md:tracking-[0.3em]">
              AZURA
            </motion.h1>
            <motion.div style={mounted ? { opacity: heroContentOpacity } : undefined} className="flex items-center gap-3 mb-6">
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }} className="h-[1px] bg-[#4C6454]" />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-2 h-2 rounded-full border border-[#4C6454]" />
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }} className="h-[1px] bg-[#4C6454]" />
            </motion.div>
            <motion.div style={mounted ? { opacity: heroSubTitleOpacity } : undefined} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center gap-4">
              <h2 className="text-sm md:text-base font-montserrat font-light tracking-[0.4em] uppercase text-white/80">Where Water Meets Tranquility</h2>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-12">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
                  <span className="text-[9px] font-montserrat tracking-[0.3em] font-bold uppercase text-white">Scroll</span>
                  <div className="w-px h-8 bg-linear-to-b from-[#4C6454]/50 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

        {/* Sticky Book Now Floating Bar */}
        <div className="sticky top-28 z-50 mx-auto w-fit px-6 flex justify-center -mt-8 pointer-events-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-full border border-white px-6 md:px-8 py-3 flex items-center gap-4 md:gap-8 hover:bg-white transition-colors duration-500">
            <span className="font-montserrat text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#1a1a1a]">Floating in Nature</span>
            <button onClick={openModal} className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white bg-[#4C6454] px-6 py-2.5 rounded-full hover:bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-all duration-500">Book Now</button>
          </motion.div>
        </div>

        {/* Section 1: Welcome to Azura */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden bg-[#f8f5ef] rounded-t-[40px] -mt-12 md:-mt-20 z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1200px] mx-auto text-center">
            <ScrollSection>
              <p className="font-montserrat text-[10px] tracking-[0.5em] text-[#668270] uppercase mb-6 md:mb-10 block font-medium">Welcome to Azura</p>
              <h2 className="font-cinzel text-[1.8rem] md:text-[3rem] lg:text-[4rem] leading-[1.1] text-[#1a1a1a] tracking-[0.02em] font-normal max-w-2xl mx-auto">
                The Most Exotic and Peaceful<br className="hidden md:block" /> Lake View Resort in Wayanad
              </h2>

              {/* Minimalist Diamond Divider */}
              <div className="flex items-center justify-center gap-4 mb-10 mt-10 text-[#668270]/40">
                <div className="h-[1px] w-16 md:w-28 bg-[#4C6454]/30" />
                <div className="w-2.5 h-2.5 rotate-45 border-[1.5px] border-[#4C6454]/70" />
                <div className="h-[1px] w-16 md:w-28 bg-[#4C6454]/30" />
              </div>

              <div className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] lg:leading-[2.5] font-light max-w-2xl mx-auto text-justify md:text-center mb-8 md:mb-0">
                <p className="mb-6">Azura is not just a resort — it's an experience like no other. Spread across a 20-cent private peninsula in Meppadi, Wayanad, this nature-friendly retreat stands as one of the most exclusive and peaceful resorts in South India.</p>
                <p className="mb-6">Azura follows a strict &quot;One Group at a Time&quot; policy, providing absolute exclusivity and complete privacy for families and groups of up to 12 guests.</p>
                <p>Surrounded by the majestic Banasura Sagar reservoir and embraced by mist-clad mountains, the resort offers an awe-inspiring 180-degree panoramic view that captures the essence of untouched nature.</p>
              </div>
            </ScrollSection>
          </div>
        </section>

        {/* Section 2: Accommodation */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 bg-white rounded-[40px] -mt-12 md:-mt-20 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1200px] mx-auto">


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
              {[
                {
                  title: "Signature A-Frame Stay",
                  img: "/gallery/gallery/aframe.webp",
                  desc: "Rain-safe, forest-integrated living. Experience the thrill of the wild with premium glass-front interiors and private deck access."
                },
                {
                  title: "Premium Lake View Rooms",
                  img: "/gallery/gallery/room.jpg",
                  desc: "Elegant Non-AC bedrooms featuring Queen-size beds and 180° reservoir panoramic views, placing water right outside your window."
                },
                {
                  title: "Lakeside Sanctuary",
                  img: "/gallery/gallery/fullview.png",
                  desc: "A private peninsula retreat where nature becomes your front yard. Absolute seclusion bordered by water on three sides, exclusively yours to explore."
                }
              ].map((room, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col text-center group cursor-pointer"
                >
                  <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden mb-8">
                    <Image src={room.img} alt={room.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>

                  <h3 className="font-cinzel text-[26px] font-semibold text-[#1a1a1a] mb-5">{room.title}</h3>

                  <div className="flex justify-center mb-6">
                    <div className="w-1.5 h-1.5 rotate-45 border border-[#4C6454]/50" />
                  </div>

                  <p className="font-montserrat text-[13px] text-[#5a5a5a] font-light leading-[2] mb-10 px-2 lg:px-4 flex-grow">{room.desc}</p>

                  <div className="mt-auto pb-4">
                    <button className="font-montserrat text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#dfdfdf] bg-transparent px-8 py-3 min-h-[48px] inline-flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-500">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: The Blue Oasis (Pool) */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 bg-[#f8f5ef] rounded-[40px] -mt-12 md:-mt-20 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/2 relative perspective-1000">
              <div className="relative h-[500px] md:h-[650px] w-full rounded-[40px] overflow-hidden shadow-2xl group transition-transform duration-1000 ease-out z-10 hover:-translate-y-4">
                <Image loading="lazy" src="/gallery/gallery/pool.jpeg" alt="Private Pool" fill className="object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(193,168,125,0.4) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 border border-white/40 rounded-[40px] m-4 pointer-events-none transition-all duration-1000 group-hover:scale-[1.03]" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="w-full md:w-1/2">
              <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-4 font-medium">The Blue Oasis</p>
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1a1a1a] tracking-[0.03em] font-medium mb-6">Private Plunge Pool</h2>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-[1px] w-14 bg-[#4C6454]" />
                <div className="w-2 h-2 rotate-45 border border-[#4C6454]" />
              </div>
              <p className="font-montserrat text-[#5a5a5a] text-[15px] md:text-[16px] leading-[2.2] font-light mb-10">
                Submerge into our pristine 5x3 meter STRICTLY PRIVATE swimming pool. Designed with a gentle 5ft uniform depth, it perfectly balances relaxation and safety. Reserved exclusively for your group, it overlooks the magnificent Padinjarathara Reservoir. Let gravity fade away.
              </p>
              <div className="inline-block bg-white/60 backdrop-blur-xl border border-white rounded-[40px] p-6 px-10 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group">
                <p className="font-montserrat text-xs md:text-[13px] uppercase tracking-widest text-[#1a1a1a] flex items-center gap-4"><Waves size={20} className="text-[#668270] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" /> <span className="pt-0.5">5x3m Dimensions</span> <span className="text-[#668270] mx-2">|</span> <span className="pt-0.5">5ft Depth</span></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: The Culinary Deck (Dining) */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 bg-white overflow-hidden rounded-[40px] -mt-12 md:-mt-20 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1200px] mx-auto">
            <ScrollSection>
              <div className="text-center mb-20">
                <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-4 font-medium">The Culinary Deck</p>
                <h2 className="font-cinzel text-4xl md:text-6xl leading-snug text-[#1a1a1a] tracking-[0.03em] font-medium">Flavors That Float</h2>
              </div>
            </ScrollSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-2 bg-[#f8f5ef] rounded-[40px] p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden shadow-2xl hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 ease-out group">
                <h3 className="font-cinzel text-3xl md:text-4xl mb-6 relative z-10 text-[#2D5A27] font-semibold">Homely Traditional Cuisine</h3>
                <p className="font-montserrat text-[15px] text-[#5a5a5a] font-light leading-[2.1] max-w-lg relative z-10">Authentic Malabar flavors and earthy Kerala meals. Prepared with local love, best enjoyed with the forest breeze and pristine water views.</p>
                <Utensils size={240} className="absolute -right-20 -bottom-20 text-[#668270]/5 stroke-[0.3] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-1000 ease-out" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="bg-[#2D5A27] text-white rounded-[40px] p-12 lg:p-14 flex flex-col justify-center shadow-2xl hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4C6454]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none" />
                <h3 className="font-cinzel text-3xl mb-6 text-[#f8f5ef] relative z-10 font-medium">Live Lake Fish</h3>
                <p className="font-montserrat text-[15px] text-white/80 font-light leading-[2.1] relative z-10">Catch and dine fresh from the reservoir point. Our signature experience prepared fresh on the deck.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-3 h-[450px] lg:h-[600px] rounded-[40px] overflow-hidden relative shadow-2xl hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out group">
                <Image loading="lazy" src="/gallery/gallery/dining.jpg" alt="Culinary Deck" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-12 left-12 right-12 md:left-16 md:right-16 md:bottom-16 flex flex-col md:flex-row justify-between items-start md:items-end">
                  <div>
                    <p className="font-montserrat text-[10px] md:text-xs tracking-[0.4em] text-white/80 uppercase mb-4">Campfire Nights</p>
                    <p className="font-cinzel text-3xl md:text-5xl text-white tracking-wide leading-snug font-medium">Grilling & BBQ <br className="hidden md:block" /> Facilities.</p>
                  </div>
                  <TreePine size={56} className="text-[#f8f5ef]/50 hidden md:block" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-32 px-6 md:px-12 bg-[#f8f5ef] rounded-[40px] -mt-12 md:-mt-20 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <ScrollSection>
            <div className="text-center">
              <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-4 font-medium">The Experiences</p>
              <h2 className="font-cinzel text-4xl md:text-6xl leading-snug text-[#1a1a1a] tracking-[0.03em] font-medium">Featuring Unique Experiences</h2>
            </div>
          </ScrollSection>
        </section>

        {/* Section 5: The Experience Carousel */}
        <ExperienceCarousel />

        {/* Section 6: The Trust (Guest Reviews) */}
        <TrustSection />

        {/* Section 7: The Wayanad Journey (Map) */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 bg-[#f8f5ef] rounded-[40px] -mt-12 md:-mt-20 z-[70] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1200px] mx-auto text-center mb-16">
            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#668270] uppercase mb-4 font-medium">The Journey</p>
            <h2 className="font-cinzel text-4xl md:text-5xl leading-snug text-[#1a1a1a] tracking-[0.03em] font-medium">Your Pathway</h2>
          </div>
          <div className="max-w-[1200px] mx-auto h-[500px] md:h-[650px] rounded-[40px] overflow-hidden relative shadow-2xl group border-[8px] border-white z-10 transition-transform duration-700 hover:-translate-y-4">
            <Image loading="lazy" src="/gallery/gallery/fullview.png" alt="Map View" fill className="object-cover saturate-50 hover:saturate-100 mix-blend-multiply opacity-80 group-hover:scale-[1.03] transition-all duration-1000 ease-out" />
            <div className="absolute inset-0 bg-[#324536]/10 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="bg-white/85 backdrop-blur-2xl px-12 py-10 rounded-[40px] text-center shadow-2xl border border-white hover:y-[-5px] transition-transform duration-500 pointer-events-auto">
                <div className="w-20 h-20 rounded-full bg-[#f8f5ef] flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <MapPin size={32} className="text-[#668270]" />
                </div>
                <h3 className="font-cinzel text-4xl text-[#1a1a1a] mb-2 font-medium">Discover Azura</h3>
                <p className="font-montserrat text-[14px] text-[#5a5a5a] mb-8 tracking-widest uppercase font-medium">Puttad • Meppadi • Wayanad</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] font-medium bg-[#1a1a1a] text-white px-10 py-4 rounded-full hover:bg-[#4C6454] hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out">
                  Navigate Here
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
