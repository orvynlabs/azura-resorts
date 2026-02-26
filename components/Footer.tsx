"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, Globe, Star } from "lucide-react";

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
                            Where Water Meets Tranquility. Experience a fully private, nature-friendly escape overlooking the serene Padinjarathara reservoir in the heart of Meppadi, Wayanad.
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
                                    <a href="tel:+919072190088" className="block hover:text-[#C1A87D] transition-colors">+91 90721 90088</a>
                                    <a href="tel:+918943132890" className="block text-white/40 hover:text-[#C1A87D] transition-colors">+91 89431 32890</a>
                                    <a href="https://wa.me/918606008826" className="block text-white/40 hover:text-[#C1A87D] transition-colors mt-0.5">WA: 8606008826</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={13} className="text-[#C1A87D]/60 shrink-0" />
                                <a href="mailto:azurawayanad@gmail.com" className="hover:text-[#C1A87D] transition-colors">azurawayanad@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={13} className="mt-1 text-[#C1A87D]/60 shrink-0" />
                                <a
                                    href="https://maps.google.com?q=Azura%20The%20Water%20View%20Resort%20Wayanad,%20Puttad%20Road,%20Meppadi,%20Kerala&ftid=0x3ba60f001b268f6f:0xc8939fc1c33a78a9&entry=gps&shh=CAE&lucs=,94259551,94297699,94284472,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#C1A87D] transition-colors"
                                >
                                    Azura Resort, Puttad , <br />Meppadi, Wayanad, Kerala, 673577, India
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-montserrat text-[10px] mb-8 text-[#C1A87D] tracking-[0.3em] uppercase font-medium">Follow Us</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={16} />, label: "Instagram", href: "https://www.instagram.com/azuraresorts_wynd?igsh=MXN4djNveDZuMDNsNQ%3D%3D&utm_source=qr" },
                                { icon: <Facebook size={16} />, label: "Facebook", href: "https://www.facebook.com/share/17zdxPd3Qs/?mibextid=wwXIfr" },
                                { icon: <Youtube size={16} />, label: "YouTube", href: "https://youtube.com/@azurawayanad?si=6V1TxB4n7znOtWCN" },
                                { icon: <Star size={16} />, label: "Google Reviews", href: "https://g.page/r/Cal4OsPBn5PIEAE/review" },
                                { icon: <Globe size={16} />, label: "Website", href: "https://www.azurawayanad.in/" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-white/30 border border-white/10 hover:bg-[#C1A87D] hover:text-white hover:border-[#C1A87D] transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="font-montserrat text-white/25 text-[12px] mt-8 leading-[1.8] font-light">
                            Join us for a private retreat featuring signature A-frame stays and panoramic lake views.
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