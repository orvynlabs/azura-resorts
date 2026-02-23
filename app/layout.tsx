import type { Metadata } from "next";
import { Inter, Dancing_Script, Cinzel, Montserrat, Bricolage_Grotesque, Playfair_Display } from "next/font/google"; // Added Playfair_Display
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage-grotesque" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" }); // Initialize Playfair Display

export const metadata: Metadata = {
  title: "Azura - The Water View Resort",
  description: "Where Water Meets Tranquility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dancingScript.variable} ${cinzel.variable} ${montserrat.variable} ${bricolageGrotesque.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
