"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Users, TreePine, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import HeroOverlay from "@/components/HeroOverlay";
import LiquidEffect from "@/components/LiquidEffect";
import ScrollSection from "@/components/ScrollSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const accommodationSlides = [
  { src: "/gallery/gallery/room.jpg", title: "Luxury Suite Interior" },
  { src: "/gallery/gallery/aframe.webp", title: "Premium A-Frame Cottage" },
  { src: "/gallery/gallery/interior.jpg", title: "Modern Cottage Interior" },
  { src: "/gallery/gallery/aframe.webp", title: "Forest A-Frame Retreat" },
  { src: "/gallery/gallery/room (3).jpg", title: "Deluxe Lake View Room" },
];

const destinationSlides = [
  {
    image: "/gallery/gallery/fullview.png",
    subtitle: "The Destination",
    title: "Best Luxury Resort in Wayanad",
    tagline: "An Exclusive Island Retreat in Kerala",
    description: "Nestled on a serene island with breathtaking views of the lake and forest, Azura offers an unparalleled escape into nature. Surrounded by the Banasura Sagar reservoir and embraced by the Western Ghats, the resort captures the essence of untouched wilderness — making every moment an unforgettable memory.",
  },
  {
    image: "/gallery/gallery/aframe.webp",
    subtitle: "The Stay",
    title: "Premium A-Frame Cottages",
    tagline: "Where Architecture Meets the Forest",
    description: "Our signature A-frame cottages are thoughtfully nestled among towering trees, designed to let nature in through floor-to-ceiling glass and open-air decks. Each cottage offers complete privacy, panoramic reservoir views, and the soothing sounds of the forest — luxury redefined in the heart of Wayanad.",
  },
  {
    image: "/gallery/gallery/dining.jpg",
    subtitle: "The Experience",
    title: "Curated Dining by the Lake",
    tagline: "Authentic Flavours of Kerala",
    description: "Savour authentic, earthy meals prepared from the finest regional ingredients at our open-air dining pavilion. From traditional Kerala delicacies to global favourites, our expert chef crafts dishes that celebrate the flavours of the land — best enjoyed with the forest breeze and reservoir views.",
  },
  {
    image: "/gallery/experiences/campfire.webp",
    subtitle: "The Moments",
    title: "Campfire Under the Stars",
    tagline: "Evenings by the Fire in Wayanad",
    description: "As the sun sets behind the mountains, gather around a crackling campfire beneath a canopy of stars. The glow of the fire, the sounds of the forest, and the cool mountain air create an atmosphere of warmth and togetherness — the perfect end to a day at Azura.",
  },
];

const cottages = [
  {
    title: "Luxury Lake View Villa",
    description: "Our luxury lake-view A-frame cottages spread across the forest canopy, offering panoramic views of the Banasura Sagar reservoir with a spacious balcony and premium interiors.",
    image: "/gallery/gallery/aframe.webp",
  },
  {
    title: "Romantic Private Retreat",
    description: "The ultimate grandeur of a luxury romantic private retreat will make you forget the time with its elegant ambience, floor-to-ceiling glass, and breathtaking reservoir views.",
    image: "/gallery/gallery/fullview.png",
  },
  {
    title: "Premium Forest Cottage",
    description: "Nestled among towering trees, our premium forest cottages offer an intimate escape with modern comforts, open-air decks, and natural materials sourced from the region.",
    image: "/gallery/gallery/room.jpg",
  },
];

const spaBlocks = [
  {
    label: "Wellness",
    title: "Ayurvedic Spa & Wellness",
    description: "Genuine traditional Ayurvedic rejuvenation therapies, under the supervision of qualified experts, ensure the complete well-being of the body, mind and soul. Rediscover wellness at our serene island retreat where nature and tradition come together in perfect harmony.",
    image: "/gallery/gallery/swing (2).jpg",
    reverse: false,
  },
  {
    label: "Nature",
    title: "Explore the Timeless Beauty of Wayanad",
    description: "Witness the charm of gushing waterfalls, lush green hilltops, and rugged mountains. Step into history with ancient temples and tales of the brave. Discover rare flora and fauna, and inhale the rich aroma of Wayanadan cardamom, tea, and coffee. Experience nature and heritage beyond time.",
    image: "/gallery/gallery/fullview.png",
    reverse: true,
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const [accCurrent, setAccCurrent] = useState(0);
  const accTotal = accommodationSlides.length;
  const accPrevIndex = (accCurrent - 1 + accTotal) % accTotal;
  const accNextIndex = (accCurrent + 1) % accTotal;

  const [destCurrent, setDestCurrent] = useState(0);
  const [destDirection, setDestDirection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroSubTitleOpacity = useTransform(scrollYProgress, [0, 0.25], [0.8, 0]);

  const nextAcc = useCallback(() => setAccCurrent((prev) => (prev + 1) % accTotal), [accTotal]);
  const prevAcc = useCallback(() => setAccCurrent((prev) => (prev - 1 + accTotal) % accTotal), [accTotal]);

  const goToDestSlide = useCallback((index: number) => {
    setDestDirection(index > destCurrent ? 1 : -1);
    setDestCurrent(index);
  }, [destCurrent]);

  useEffect(() => {
    const timer1 = setInterval(nextAcc, 5000);
    const timer2 = setInterval(() => {
      setDestDirection(1);
      setDestCurrent((prev) => (prev + 1) % destinationSlides.length);
    }, 6000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [nextAcc]);


  const destImageVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -60 : 60 }),
  };

  const destContentVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={mounted ? { y: heroY } : undefined} className="absolute inset-0 w-full h-[110%] will-change-transform">
          <Image src="/resort_main_image.PNG" alt="Azura Resort" fill priority unoptimized quality={100} className="object-cover object-center animate-kenburns" style={{ filter: "brightness(1.1) contrast(1.1) saturate(1.15)" }} sizes="100vw" />
          <HeroOverlay />
        </motion.div>
        <LiquidEffect />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.p style={mounted ? { opacity: heroSubTitleOpacity } : undefined} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.7, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-[10px] md:text-xs font-montserrat tracking-[0.5em] uppercase text-[#C1A87D] mb-6">
            The Water View Resort
          </motion.p>
          <motion.h1 style={mounted ? { opacity: heroContentOpacity } : undefined} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-5xl md:text-8xl lg:text-9xl font-cinzel font-normal mb-4 uppercase text-white tracking-[0.3em]">
            AZURA
          </motion.h1>
          <motion.div style={mounted ? { opacity: heroContentOpacity } : undefined} className="flex items-center gap-3 mb-6">
            <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }} className="h-[1px] bg-[#C1A87D]" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.5 }} className="w-2 h-2 rounded-full border border-[#C1A87D]" />
            <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }} className="h-[1px] bg-[#C1A87D]" />
          </motion.div>
          <motion.div style={mounted ? { opacity: heroSubTitleOpacity } : undefined} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col items-center gap-4">
            <h2 className="text-sm md:text-base font-montserrat font-light tracking-[0.4em] uppercase text-white/80">Where Water Meets Tranquility</h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.5, duration: 1 }} className="mt-12">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
                <span className="text-[9px] font-montserrat tracking-[0.3em] font-bold uppercase text-white">Scroll</span>
                <div className="w-px h-8 bg-linear-to-b from-[#C1A87D]/50 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] overflow-hidden">
        <div className="py-28 md:py-40 px-6">
          <div className="max-w-[1080px] mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-6 font-medium">Welcome to Azura</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-playfair-display text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.35] md:leading-[1.3] text-[#1a1a1a] tracking-[0.03em] mb-10">The Most Exotic and Luxurious<br className="hidden md:block" /> Island Resort in Wayanad</motion.h2>
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="flex items-center justify-center gap-3 mb-10">
              <div className="h-[1px] w-20 bg-[#C1A87D]" />
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
              <div className="h-[1px] w-20 bg-[#C1A87D]" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto">
              Azura is not just a resort — it&apos;s an experience like no other. Nestled on a serene island in the heart of the Western Ghats, this five-star luxury retreat in Kerala stands as one of the most exclusive and luxurious resorts in South India. Surrounded by the majestic Banasura Sagar reservoir and embraced by mist-clad mountains, the resort offers an awe-inspiring 180-degree panoramic view that captures the essence of untouched nature.
            </motion.p>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pb-32 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[540px] w-full overflow-hidden shadow-2xl">
              <Image src="/gallery/gallery/fullview.png" alt="Infinity Pool at Azura Resort overlooking Banasura Sagar" fill className="object-cover" />
              <div className="absolute inset-0 border border-[#C1A87D]/20" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center lg:text-left">
              <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">Inspired by Nature</p>
              <h3 className="font-playfair-display text-xl md:text-[1.8rem] leading-[1.35] text-[#1a1a1a] tracking-[0.02em] mb-8">Best Five Star Resorts in Wayanad<span className="block mt-2 text-[#C1A87D] font-light italic">Our Infinity Pool</span></h3>
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <div className="h-[1px] w-14 bg-[#C1A87D]" />
                <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
                <div className="h-[1px] w-14 bg-[#C1A87D]" />
              </div>
              <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-xl mx-auto lg:mx-0">
                Our infinity pool is uniquely designed to mirror the shape of a small island located just across from the resort — clearly visible from our property. This natural inspiration guided the concept and layout, making the pool feel like a seamless extension of the lake itself. The moment you step into our infinity pool, you&apos;ll feel as if you&apos;re immersed directly in the tranquil waters of the Banasura Sagar Lake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-[#f8f5ef]">
        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">One Group at a Time</p>
            <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">Pure Exclusivity</h2>
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="h-[1px] w-14 bg-[#C1A87D]" />
              <div className="w-2 h-2 rotate-45 border border-[#C1A87D]" />
              <div className="h-[1px] w-14 bg-[#C1A87D]" />
            </div>
            <p className="font-montserrat text-[#5a5a5a] leading-[2.1] mb-10 font-light text-[13px] md:text-[15px] max-w-xl mx-auto lg:mx-0">
              Escape to a world where privacy is paramount. Azura offers a sanctuary solely for you and your loved ones. Unlike crowded resorts, our property is dedicated to a single group at a time, ensuring that every moment, every view, and every amenity is exclusively yours.
            </p>
            <div className="space-y-5 text-left mx-auto max-w-md lg:mx-0">
              <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#C1A87D]" /><span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Complete Privacy</span></div>
              <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#C1A87D]" /><span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Personalized Service</span></div>
              <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#C1A87D]" /><span className="font-montserrat text-[#3a3a3a] text-[13px] md:text-[14px] font-light">Tailored Experiences</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[560px] w-full">
            <div className="absolute inset-0 rounded-t-[10rem] overflow-hidden shadow-2xl">
              <Image src="/gallery/gallery/aframe.webp" alt="Azura Exclusivity" fill className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 border border-[#C1A87D]/15 rounded-t-[10rem]" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-transparent overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14 md:mb-20">
            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">The Stay</p>
            <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">Cottages Cosily Tucked Away Below <br /> The Sky-Scraping Trees</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
              <div className="h-[1px] w-20 bg-[#C1A87D]/50" />
            </div>
          </motion.div>
        </div>
        <div className="relative max-w-[100vw] mx-auto">
          <div className="flex items-center justify-center gap-3 md:gap-5 px-0">
            <motion.div key={`prev-${accPrevIndex}`} className="relative flex-shrink-0 w-[20%] md:w-[22%] h-[280px] md:h-[420px] lg:h-[500px] overflow-hidden cursor-pointer" style={{ borderRadius: "0.5rem" }} onClick={prevAcc} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src={accommodationSlides[accPrevIndex].src} alt={accommodationSlides[accPrevIndex].title} fill className="object-cover" sizes="22vw" />
              <div className="absolute inset-0 bg-[#f8f5ef]/50 backdrop-blur-[1px]" />
              <button onClick={(e) => { e.stopPropagation(); prevAcc(); }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#C1A87D] hover:text-white transition-all duration-300 z-10" aria-label="Previous slide"><ChevronLeft size={20} /></button>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div key={`center-${accCurrent}`} className="relative flex-shrink-0 w-[56%] md:w-[52%] h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden shadow-2xl z-10" style={{ borderRadius: "0.5rem" }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>
                <Image src={accommodationSlides[accCurrent].src} alt={accommodationSlides[accCurrent].title} fill className="object-cover" sizes="52vw" priority />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center"><p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/90">{accommodationSlides[accCurrent].title}</p></div>
              </motion.div>
            </AnimatePresence>
            <motion.div key={`next-${accNextIndex}`} className="relative flex-shrink-0 w-[20%] md:w-[22%] h-[280px] md:h-[420px] lg:h-[500px] overflow-hidden cursor-pointer" style={{ borderRadius: "0.5rem" }} onClick={nextAcc} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src={accommodationSlides[accNextIndex].src} alt={accommodationSlides[accNextIndex].title} fill className="object-cover" sizes="22vw" />
              <div className="absolute inset-0 bg-[#f8f5ef]/50 backdrop-blur-[1px]" />
              <button onClick={(e) => { e.stopPropagation(); nextAcc(); }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#C1A87D] hover:text-white transition-all duration-300 z-10" aria-label="Next slide"><ChevronRight size={20} /></button>
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {accommodationSlides.map((_, index) => (
              <button key={index} onClick={() => setAccCurrent(index)} className={`rounded-full transition-all duration-400 ${index === accCurrent ? "w-8 h-2.5 bg-[#C1A87D]" : "w-2.5 h-2.5 bg-[#1a1a1a]/15 hover:bg-[#C1A87D]/50"}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[#f8f5ef]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <ScrollSection>
            <div className="flex flex-col lg:flex-row items-stretch gap-0">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full lg:w-[55%] h-[400px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-3xl lg:rounded-r-none flex-shrink-0">
                <Image src="/gallery/gallery/dining.jpg" alt="Outdoor Dining Pavilion at Azura" fill className="object-cover" />
                <div className="absolute inset-0 border border-[#C1A87D]/10" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-[45%] bg-white flex flex-col justify-center px-8 md:px-12 lg:px-14 py-12 lg:py-16" style={{ borderTopRightRadius: "6rem", borderBottomRightRadius: "1.5rem", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <p className="font-montserrat text-[10px] tracking-[0.5em] text-[#C1A87D] uppercase mb-4 font-medium">Dining</p>
                <h2 className="font-playfair-display text-2xl md:text-[1.8rem] leading-snug text-[#1a1a1a] tracking-[0.02em] mb-8">The Dining Pavilion</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3"><Utensils size={16} className="text-[#C1A87D] flex-shrink-0" /><span className="font-montserrat text-[13px] text-[#3a3a3a]">Authentic Kerala & Global Cuisine</span></div>
                  <div className="flex items-center gap-3"><TreePine size={16} className="text-[#C1A87D] flex-shrink-0" /><span className="font-montserrat text-[13px] text-[#3a3a3a]">Open-Air Forest Dining with Reservoir Views</span></div>
                  <div className="flex items-start gap-3"><Users size={16} className="text-[#C1A87D] flex-shrink-0 mt-0.5" /><span className="font-montserrat text-[13px] text-[#3a3a3a]">Private Dining &nbsp;<span className="text-[#C1A87D] mx-1">|</span>&nbsp; Campfire BBQ</span></div>
                  <div className="flex items-center gap-3"><Clock size={16} className="text-[#C1A87D] flex-shrink-0" /><span className="font-montserrat text-[13px] text-[#3a3a3a]">Breakfast, Lunch & Dinner</span></div>
                </div>
                <div className="w-full h-[1px] bg-[#C1A87D]/20 mb-8" />
                <p className="font-montserrat text-[#5a5a5a] text-[13px] leading-[2.1] font-light mb-10">The Dining Pavilion at Azura offers an unforgettable culinary journey, featuring locally sourced ingredients prepared by our expert chef. Dine under the open sky, surrounded by the lush greenery and the gentle sounds of the forest — a dining experience crafted for discerning travelers.</p>
                <Link href="/contact" className="font-montserrat inline-block w-fit bg-[#C1A87D] text-white px-10 py-3.5 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-[#a89268] transition-colors duration-300 shadow-lg">Book Now</Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="flex items-center gap-4 mt-10 pl-2">
              <Link href="/experiences" className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a]/20 px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">Learn More</Link>
              <Link href="/gallery" className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#C1A87D] border border-[#C1A87D]/30 px-8 py-3 hover:bg-[#C1A87D] hover:text-white transition-all duration-300">Gallery</Link>
            </motion.div>
          </ScrollSection>
        </div>
      </section>

      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={destDirection} mode="popLayout">
          <motion.div key={destCurrent} custom={destDirection} variants={destImageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <Image src={destinationSlides[destCurrent].image} alt={destinationSlides[destCurrent].title} fill className="object-cover" priority={destCurrent === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/30" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-end z-10 px-6 md:px-16 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div key={destCurrent} variants={destContentVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/10 backdrop-blur-xl w-full max-w-xl p-10 md:p-14 shadow-2xl border border-white/20">
              <p className="font-montserrat text-[10px] tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">{destinationSlides[destCurrent].subtitle}</p>
              <h2 className="font-playfair-display text-2xl md:text-[2rem] leading-snug text-white tracking-[0.02em] mb-3">{destinationSlides[destCurrent].title}</h2>
              <p className="font-montserrat text-[12px] md:text-[13px] text-[#C1A87D]/80 uppercase tracking-[0.1em] mb-6 font-light">{destinationSlides[destCurrent].tagline}</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-white/30" />
                <div className="w-2 h-2 rotate-45 border border-[#C1A87D]/60" />
                <div className="h-[1px] w-12 bg-white/30" />
              </div>
              <p className="font-montserrat text-white/70 text-[13px] leading-[2] font-light">{destinationSlides[destCurrent].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {destinationSlides.map((_, index) => (
            <button key={index} onClick={() => goToDestSlide(index)} className={`rounded-full transition-all duration-500 ${index === destCurrent ? "w-10 h-2.5 bg-[#C1A87D]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 z-20">
          <motion.div key={destCurrent} className="h-full bg-[#C1A87D]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 6, ease: "linear" }} />
        </div>
      </section>

      <section className="py-28 md:py-40 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">Accommodation</p>
            <h2 className="font-playfair-display text-2xl md:text-[2.2rem] leading-snug text-[#1a1a1a] tracking-[0.03em] mb-6">Sustainable Luxury Cottages with Unforgettable Views</h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-20 bg-[#C1A87D]" />
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C1A87D]" />
              <div className="h-[1px] w-20 bg-[#C1A87D]" />
            </div>
            <p className="font-montserrat text-[#5a5a5a] text-[13px] md:text-[15px] leading-[2.1] font-light max-w-[900px] mx-auto">Spread across vast greenery, the resort features exotic cottages blending luxury and sustainability with eco-friendly design. Each cottage offers modern comforts and opens to breathtaking lake and forest views.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {cottages.map((cottage, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.15 }} className="group text-center">
                <div className="relative h-[350px] md:h-[380px] lg:h-[420px] w-full overflow-hidden mb-7">
                  <Image src={cottage.image} alt={cottage.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-[#C1A87D]/0 group-hover:border-[#C1A87D]/30 transition-all duration-500" />
                </div>
                <h3 className="font-playfair-display text-lg md:text-xl text-[#1a1a1a] tracking-[0.02em] mb-4">{cottage.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-[#C1A87D]/50" />
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C1A87D]/50" />
                  <div className="h-[1px] w-8 bg-[#C1A87D]/50" />
                </div>
                <p className="font-montserrat text-[#5a5a5a] text-[13px] leading-[1.9] font-light px-2 mb-6">{cottage.description}</p>
                <Link href="/experiences" className="font-montserrat inline-block text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a]/20 px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">View Details</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 bg-transparent overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 md:order-1">
            <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden shadow-2xl">
              <Image src="/gallery/gallery/pool.jpeg" alt="Swimming Pool" fill className="object-cover" />
              <div className="absolute inset-0 border border-[#C1A87D]/15" />
            </div>
          </motion.div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <ScrollSection delay={0.2}>
              <h2 className="font-playfair-display text-5xl md:text-7xl text-[#1a1a1a]/[0.04] md:absolute md:top-16 md:right-16 z-0 select-none uppercase tracking-wider">Swimming</h2>
              <div className="relative z-10">
                <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-[#C1A87D] uppercase mb-5 font-medium">The Pool</p>
                <h3 className="font-playfair-display text-2xl md:text-[2rem] leading-snug text-[#1a1a1a] mb-8 tracking-[0.02em]">Indulge in a <br /> <span className="text-[#C1A87D] font-light italic">Pristine Pool</span></h3>
                <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                  <div className="h-[1px] w-14 bg-[#C1A87D]/50" />
                  <div className="w-2 h-2 rotate-45 border border-[#C1A87D]/50" />
                  <div className="h-[1px] w-14 bg-[#C1A87D]/50" />
                </div>
                <p className="font-montserrat text-[#5a5a5a] leading-[2.1] font-light text-[13px] md:text-[15px]">Immerse yourself in luxury and hygiene. Dive into the crystal clear waters of our infinity pool, surrounded by the symphony of nature. It is the perfect spot to wash away your stress and embrace tranquility.</p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
