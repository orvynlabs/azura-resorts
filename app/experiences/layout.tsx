import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experiences | Azura – The Water View Resort",
    description: "Explore curated luxury experiences at Azura — from infinity pool views and private dining to premium A-frame accommodations and campfire evenings in Wayanad.",
};

export default function ExperiencesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
