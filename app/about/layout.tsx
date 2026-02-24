import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Azura – The Water View Resort",
    description: "Discover the story of Azura — a secluded island resort nestled within 66 acres of forest in Wayanad, Kerala. Architecture inspired by nature, designed for tranquility.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
