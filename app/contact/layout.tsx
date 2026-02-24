import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Azura – The Water View Resort",
    description: "Get in touch with Azura Resort — book your exclusive stay in Wayanad, Kerala. Call 1800 891 3090 or write to reservations@azuraresort.in.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
