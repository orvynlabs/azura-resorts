import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Places to Visit | Azura – The Water View Resort",
    description: "Explore Wayanad's top attractions near Azura Resort — Edakkal Caves, Banasura Sagar Dam, Chembra Peak, Thirunelli Temple, and more. Plan your itinerary.",
};

export default function PlacesToVisitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
