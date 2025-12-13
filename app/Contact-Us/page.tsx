"use client";
import Landing from "@/component/landing/landing";
import Navbar from "@/component/navbar/navbar";

import Footer from "@/component/footer";

import StatsSection from "@/component/stats/statsSection";
import TravelAgencyAbout from "@/component/travel-agency-about/travel-agency-about";
import TourAbout, {
  TourAboutData,
  TourHighlight,
} from "@/component/tour-highlights/tour-highlights";
import { mockTourData } from "@/data/paro-places-data";
import BiblograhyComponent from "@/component/biblography/biblography";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import TeamSection from "@/component/teams-picture-card/team-picture-card";
import WhyChooseUs from "@/component/why-us/why-us";
import TravelContactUS from "@/component/contactus";
import ToursSection, { Tour } from "@/component/how-it-works/how-it-works";
import { toursOptional } from "../../component/how-it-works/data";

export default function AboutMain() {
  const bioData = [
    {
      title: "About Us",
      aboutDescription: `Lumora Tours and Travel is a Bhutanese travel agency dedicated to providing sustainable and mindful travel experiences. With a focus on authentic cultural immersion, pristine natural landscapes, and personalized itineraries, we help travelers explore Bhutan responsibly while creating unforgettable memories. Our team of local experts ensures seamless travel, from accommodations and guided tours to unique adventures that celebrate the spirit of Bhutan.`,
    },
    {
      title: "Vision",
      aboutDescription: `To inspire a world where mindful exploration meets purposeful travel, creating a sustainable legacy of joy, harmony, and cultural connection in the heart of Bhutan.`,
    },
    {
      title: "Mission",
      aboutDescription: `We curate transformative journeys that celebrate Bhutan’s timeless traditions, pristine landscapes, and the spirit of mindfulness. Guided by the principles of Gross National Happiness, we aim to enrich lives by blending cultural authenticity, environmental stewardship, and unparalleled luxury for a truly meaningful travel experience.`,
    },
    {
      title: "Who We Are",
      aboutDescription: `We are the custodians and storytellers of Bhutan, crafting expeditions that transcend travel. Rooted in the profound principles of Gross National Happiness, we invite you to explore our sacred valleys, timeless traditions, and untouched landscapes with purpose and mindfulness. As guardians of sustainability, culture, and luxury, we curate experiences that connect your soul to the heart of Bhutan—leaving you inspired, enriched, and forever transformed.`,
    },
  ];
const toursOptionals: Tour[] = toursOptional;
  const teamData = [
    {
      img: "/Zayn-Malik.jpg",
      name: "Tom Cruise",
      email: "govindagunda@gmail.com",
      role: "Financial Management",
    },
    {
      img: "/Zayn-Malik.jpg",
      name: "Anna Lee",
      email: "govindagunda@gmail.com",
      role: "Tour Operator",
    },
    {
      img: "/Zayn-Malik.jpg",
      name: "John Doe",
      email: "govindagunda@gmail.com",
      role: "CEO",
    },
    {
      img: "/Zayn-Malik.jpg",
      name: "Emily Smith",
      email: "govindagunda@gmail.com",
      role: "Marketing Manager",
    },
    {
      img: "/Zayn-Malik.jpg",
      name: "Emily Smith",
      email: "govindagunda@gmail.com",
      role: "Marketing Manager",
    },
    {
      img: "/Zayn-Malik.jpg",
      name: "Emily Smith",
      email: "govindagunda@gmail.com",
      role: "Marketing Manager",
    },
  ];


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
