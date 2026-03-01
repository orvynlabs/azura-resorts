"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Phone, User } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function BookingModal() {
    const { isModalOpen, closeModal } = useBooking();
    const [status, setStatus] = useState<"idle" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        checkin: "",
        checkout: "",
        adults: "2",
        kids: "0",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Calculate minimum dates
    const today = new Date().toISOString().split("T")[0];
    const minCheckoutDate = formData.checkin ? formData.checkin : today;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setStatus("success");

        // Format WhatsApp message
        const message = `* AZURA RESORT | NEW BOOKING REQUEST*%0A` +
            `----------------------------------------%0A%0A` +
            `* GUEST DETAILS*%0A` +
            `• *Name:* ${formData.name}%0A` +
            `• *Contact:* ${formData.phone}%0A%0A` +
            `* STAY DATES*%0A` +
            `• *Check-in:* ${formData.checkin}%0A` +
            `• *Check-out:* ${formData.checkout}%0A%0A` +
            `* OCCUPANCY*%0A` +
            `• *Adults:* ${formData.adults}%0A` +
            `• *Kids:* ${formData.kids}%0A%0A` +
            `----------------------------------------%0A` +
            `* REQUEST:* Please confirm availability for this private group stay.`;

        // Open WhatsApp
        window.open(`https://wa.me/918606008826?text=${message}`, '_blank');
    };

    const handleClose = () => {
        closeModal();
        setTimeout(() => setStatus("idle"), 300);
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: -20, opacity: 0 }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                        className="relative w-full max-w-lg bg-[#f8f5ef] shadow-2xl rounded-2xl md:rounded-[40px] border border-[#4C6454]/10 my-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 z-10 p-2 text-[#5a5a5a] hover:text-[#1a1a1a] bg-white/50 backdrop-blur-md rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <p className="font-montserrat text-[10px] tracking-[0.4em] text-[#668270] uppercase mb-3 font-medium">Reserve Your Stay</p>
                                <h2 className="font-cinzel text-3xl md:text-4xl text-[#1a1a1a]">Booking Details</h2>
                                <div className="flex items-center justify-center gap-3 mt-4">
                                    <div className="h-[1px] w-10 bg-[#4C6454]/50" />
                                    <div className="w-1.5 h-1.5 rotate-45 border border-[#4C6454]/50" />
                                    <div className="h-[1px] w-10 bg-[#4C6454]/50" />
                                </div>
                            </div>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-6"
                                >
                                    <div className="w-20 h-20 bg-[#f8f5ef] border border-[#4C6454]/20 shadow-inner rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-[#668270]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-playfair-display text-2xl text-[#1a1a1a] mb-4">Request Sent!</h3>
                                    <p className="font-montserrat text-[13px] text-[#5a5a5a] font-light leading-relaxed mb-10 px-4">
                                        Our staff will call you shortly to inform you about the availability. Your request has also been forwarded via WhatsApp.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="font-montserrat text-white bg-[#4C6454] px-12 py-3.5 uppercase tracking-[0.2em] text-[10px] hover:bg-[#1a1a1a] transition-colors duration-300 shadow-xl rounded-full"
                                    >
                                        Close Window
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2 relative">
                                            <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                                <Calendar size={12} className="text-[#668270]" /> Check-in
                                            </label>
                                            <input type="date" name="checkin" required value={formData.checkin} min={today} onChange={handleChange} className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 transition-colors" />
                                        </div>
                                        <div className="space-y-2 relative">
                                            <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                                <Calendar size={12} className="text-[#668270]" /> Check-out
                                            </label>
                                            <input type="date" name="checkout" required value={formData.checkout} min={minCheckoutDate} onChange={handleChange} className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-2">
                                            <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                                <Users size={12} className="text-[#668270]" /> Adults
                                            </label>
                                            <select name="adults" value={formData.adults} onChange={handleChange} className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] transition-colors">
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                                <Users size={12} className="text-[#668270]" /> Kids
                                            </label>
                                            <select name="kids" value={formData.kids} onChange={handleChange} className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] transition-colors">
                                                {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                            <User size={12} className="text-[#668270]" /> Guest Name
                                        </label>
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 transition-colors" />
                                    </div>

                                    <div className="space-y-2 pb-4">
                                        <label className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-[#5a5a5a] font-medium flex items-center gap-2">
                                            <Phone size={12} className="text-[#668270]" /> Phone Number
                                        </label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="WhatsApp number" className="w-full border-b border-[#1a1a1a]/15 py-2.5 focus:outline-none focus:border-[#4C6454] bg-transparent font-montserrat text-[13px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 transition-colors" />
                                    </div>

                                    <button type="submit" className="w-full font-montserrat bg-[#4C6454] text-white px-8 py-4 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_10px_20px_rgba(76,100,84,0.15)] hover:-translate-y-1 rounded-full">
                                        Check Availability
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
