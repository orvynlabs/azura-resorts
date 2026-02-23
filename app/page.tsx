import HomeIntro from "@/components/HomeIntro";
import Hero from "@/components/Hero";
import HomeAccommodation from "@/components/HomeAccommodation";
import HomeDining from "@/components/HomeDining";
import HomeDestination from "@/components/HomeDestination";
import HomeActivities from "@/components/HomeActivities";
import HomePool from "@/components/HomePool";
import HomeSpa from "@/components/HomeSpa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Hero />
      <HomeIntro />
      <HomeAccommodation />
      <HomeDining />
      <HomeDestination />
      <HomeActivities />
      <HomePool />
      <HomeSpa />
      <Footer />
    </main>
  );
}
