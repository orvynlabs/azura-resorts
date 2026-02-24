"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-28 pb-10 border-t border-[#C1A87D]/10">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">

                {/* Decorative Top Divider */}
                <div className="flex items-center justify-center gap-4 mb-20">
                    <div className="h-[1px] flex-1 bg-white/5" />
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rotate-45 border border-[#C1A87D]/30" />
                        <p className="font-playfair-display text-2xl md:text-3xl text-white tracking-[0.2em]">AZURA</p>
                        <div className="w-2 h-2 rotate-45 border border-[#C1A87D]/30" />
                    </div>
                    <div className="h-[1px] flex-1 bg-white/5" />
                </div>

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <p className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-[#C1A87D] mb-6">
                            The Water View Resort
                        </p>
                        <p className="font-montserrat text-white/40 text-[13px] leading-[2] max-w-sm font-light">
                            Where Water Meets Tranquility. Experience the perfect blend of luxury and nature at our exclusive water-view resort in the heart of Wayanad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-montserrat text-[10px] mb-8 text-[#C1A87D] tracking-[0.3em] uppercase font-medium">Explore</h3>
                        <ul className="font-montserrat space-y-4 text-white/40 text-[13px] font-light">
                            <li><Link href="/" className="hover:text-[#C1A87D] transition-colors duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#C1A87D] transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/gallery" className="hover:text-[#C1A87D] transition-colors duration-300">Gallery</Link></li>
                            <li><Link href="/experiences" className="hover:text-[#C1A87D] transition-colors duration-300">Experiences</Link></li>
                            <li><Link href="/places-to-visit" className="hover:text-[#C1A87D] transition-colors duration-300">Places to Visit</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C1A87D] transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-montserrat text-[10px] mb-8 text-[#C1A87D] tracking-[0.3em] uppercase font-medium">Contact</h3>
                        <ul className="font-montserrat space-y-5 text-white/40 text-[13px] font-light">
                            <li className="flex items-center gap-3">
                                <Phone size={13} className="text-[#C1A87D]/60 shrink-0" />
                                <div>
                                    <span className="block">1800 891 3090</span>
                                    <span className="block text-white/25">+91 9778413702</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={13} className="text-[#C1A87D]/60 shrink-0" />
                                <span>reservations@azuraresort.in</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={13} className="mt-1 text-[#C1A87D]/60 shrink-0" />
                                <span>Azura Resort, Padinjarathara, <br />Wayanad, Kerala, 673575, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-montserrat text-[10px] mb-8 text-[#C1A87D] tracking-[0.3em] uppercase font-medium">Follow Us</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={16} />, label: "Instagram" },
                                { icon: <Facebook size={16} />, label: "Facebook" },
                                { icon: <Youtube size={16} />, label: "YouTube" },
                                { icon: <Globe size={16} />, label: "Website" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center text-white/30 border border-white/10 hover:bg-[#C1A87D] hover:text-white hover:border-[#C1A87D] transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="font-montserrat text-white/25 text-[12px] mt-8 leading-[1.8] font-light">
                            Stay connected for exclusive offers, seasonal packages, and behind-the-scenes glimpses into life at Azura.
                        </p>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-montserrat text-[11px] text-white/20">
                        © 2026 Azura Resort. All rights reserved.
                    </p>
                    <div className="font-montserrat flex gap-6 text-[11px] text-white/20">
                        <Link href="#" className="hover:text-white/40 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/40 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
