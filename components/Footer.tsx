"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h2 className="font-cinzel text-3xl mb-2 tracking-[0.2em]">AZURA</h2>
                        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#C1A87D] mb-6">
                            The Water View Resort
                        </p>
                        <p className="font-montserrat text-gray-500 text-sm leading-loose max-w-sm font-light">
                            Where Water Meets Tranquility. Experience the perfect blend of luxury and nature at our exclusive water-view resort in the heart of Wayanad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-cinzel text-sm mb-8 text-[#C1A87D] tracking-[0.2em] uppercase">Explore</h3>
                        <ul className="font-montserrat space-y-4 text-gray-500 text-sm font-light">
                            <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
                            <li><Link href="/experiences" className="hover:text-white transition-colors duration-300">Experiences</Link></li>
                            <li><Link href="/places-to-visit" className="hover:text-white transition-colors duration-300">Places to Visit</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-cinzel text-sm mb-8 text-[#C1A87D] tracking-[0.2em] uppercase">Contact</h3>
                        <ul className="font-montserrat space-y-5 text-gray-500 text-sm font-light">
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="text-[#C1A87D] shrink-0" />
                                <div>
                                    <span className="block">1800 891 3090</span>
                                    <span className="block text-gray-600">+91 9778413702</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={14} className="text-[#C1A87D] shrink-0" />
                                <span>reservations@azuraresort.in</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={14} className="mt-1 text-[#C1A87D] shrink-0" />
                                <span>Azura Resort, Padinjarathara, <br />Wayanad, Kerala, 673575, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-cinzel text-sm mb-8 text-[#C1A87D] tracking-[0.2em] uppercase">Follow Us</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={18} />, label: "Instagram" },
                                { icon: <Facebook size={18} />, label: "Facebook" },
                                { icon: <Youtube size={18} />, label: "YouTube" },
                                { icon: <Globe size={18} />, label: "Website" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#C1A87D] hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="font-montserrat text-gray-600 text-xs mt-8 leading-relaxed font-light">
                            Stay connected for exclusive offers, seasonal packages, and behind-the-scenes glimpses into life at Azura.
                        </p>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-montserrat text-xs text-gray-700">
                        © 2026 Azura Resort. All rights reserved.
                    </p>
                    <div className="font-montserrat flex gap-6 text-xs text-gray-700">
                        <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
