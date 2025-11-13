import AboutUs from "@/component/about-us/about-us";
import AdventuresSection from "@/component/advanture";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home";
import Navbar from "@/component/navbar/navbar";
import WhyChooseUs from "@/component/why-us/why-us";
import TripsForFistTimer from "./pages/trips-for-first-timer";
import image1 from "@/public/image1.jpg";
import { Are_You_Serious } from "next/font/google";

import TouristTalkAboutUs from "@/component/tourist-talk-aboutus";
import AdventureTypes from "@/component/advanture";
import ToursSection from "@/component/how-it-works/how-it-works";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomePage />
      <AboutUs />
      
      <ToursSection />
      <TripsForFistTimer />
      <Destinations
        title={"Lumora Tours and Travel video"}
        subtitle={"Beautiful & Romantic"}
        backgroundImage={image1}
        video={true}
      />
      {/* <AdventuresSection /> */}
      <TouristTalkAboutUs />
      <Footer />
      
    </main>
  );
}
