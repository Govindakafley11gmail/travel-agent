import AboutUs from "@/component/about-us/about-us";
import AdventuresSection from "@/component/advanture";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home";
import { TourData, tours } from "@/component/how-it-works/data";
import ToursSection from "@/component/how-it-works/how-it-works";
import Navbar from "@/component/navbar/navbar";
import WhyChooseUs from "@/component/why-us/why-us";
import Image from "next/image";
import TripsForFistTimer from "./pages/trips-for-first-timer";
import image1 from "@/public/bhutan-thimphu-city.jpg";
import TouristTalkAboutUs from "@/component/tourist-talk-aboutus";
import AdventureTypes from "@/component/advanture";

export default function Home() {
  // ✅ Correct type: Tour[]
  const toursOptionals: TourData[] = tours;

  return (
    <main className="overflow-hidden">
      <HomePage />
      <AboutUs />

      {/* Pass array of tours */}
      <ToursSection
        tours={toursOptionals}
        heading="Why choose us?"
        subHeading="Four Pillars That Define Lumora Tours & Travels"
      />

      <TripsForFistTimer />
      <Destinations
        title="Lumora Tours and Travel video"
        subtitle="Beautiful & Romantic"
        backgroundImage={image1}
        video={true}
      />
      <TouristTalkAboutUs />
      <Footer />
    </main>
  );
}
