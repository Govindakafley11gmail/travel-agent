"use client";
import Landing from "@/component/landing/landing";
import Footer from "@/component/footer";

import TravelContactUS from "@/component/contactus";
import ToursSection from "@/component/how-it-works/how-it-works";
import { TourData, toursOptional } from "../../component/how-it-works/data";

export default function AboutMain() {
const toursOptionals: TourData[] = toursOptional;

  return (
    <main className="w-full h-full">
      <Landing
        image="/flight.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Are you ready for a contact/enquiry ?"
        subheading="Contact Us"
        headingstyle="font-mono"
      />
      {/* <StatsSection /> */}

      <TravelContactUS />


      <div>
        <ToursSection tours={toursOptionals} heading="a" 
          subHeading="Four Pillars That Define Lumora Tours & Travels" />
        <Footer />
      </div>
    </main>
  );
}
