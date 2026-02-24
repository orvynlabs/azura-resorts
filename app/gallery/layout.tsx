import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Azura – The Water View Resort",
    description: "Browse the visual journey of Azura Resort — A-frame cottages, infinity pool views, open-air dining, and the stunning natural beauty of Wayanad, Kerala.",
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
