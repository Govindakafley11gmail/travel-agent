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
import ToursSection from "@/component/how-it-works/how-it-works";

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
  const teamData = [
  {
    img: "/indralal.jpg",
    name: "Indra Lal Acharja ",
    email:"ceo@lumorabhutan.com",
    role: "Managing Director & Co-Founder",
    description: "Indra brings over a decade of leadership experience, honed through the implementation of numerous developmental and research projects in Bhutan. His work has taken him to various parts of the country, uncovering hidden gems—people, places, culture, and cuisines—those travelers deserve to experience firsthand. With a strong foundation in Sustainable Development, Indra is passionate about promoting tourism that respects the environment, preserves cultural heritage, and supports local communities. He combines this vision with international insights and a strong client-focused approach to drive Lumora’s operational excellence and strategic expansion Through thoughtful planning and eco-conscious practices, he ensures that every journey balances exploration with sustainability, allowing travelers to experience Bhutan responsibly while leaving a positive impact."
  },
  {
    img: "/sonam.jpg",
    name: "Sonam Zangpo ",
    email:"lobaldirector@lumorabhutan.com",
    role: "Global Director & Co-Founder",
    description: "Sonam is a seasoned professional with a focus on international partnerships and strategic development. He holds a master’s degree in business administration from a reputed Australian university and has worked extensively in the field of migration, education consultancy, and cross-border mobility. While his passion for sustainable and mindful travel is rooted in his foundational studies in sustainable development, his interest in tourism stems from his personal experience he has had facilitating journeys of students from across South Asia to Australia and back. His vision of building a mindful experience and sustainable travel benefiting both the traveller and the host culminates in Lumora. "
  },
  {
    img: "/sabitra.jpg",
    name: "Sabitra Bhattarai ",
      email:"info@lumorabhutan.com",
    role: "Head of Operations",
    description:`Sabitra is the operational backbone of Lumora Tours and Travel, ensuring that every journey is seamless, safe, and memorable. With extensive experience in operations, customer service, and logistics management, she excels at coordinating complex travel plans, anticipating challenges, and delivering exceptional experiences for every traveler.
Holding a bachelor’s degree in Climate and Environment Studies, Sabitra brings a strong understanding of sustainable and responsible travel practices, integrating environmental awareness into every aspect of her work. She has also completed professional training in project coordination and risk management, equipping her to manage both the everyday details and unforeseen challenges of travel logistics.
Her meticulous planning, dedication, and eco-conscious approach make her an invaluable part of Lumora, ensuring that travelers not only explore Bhutan comfortably but also responsibly.
`
  },
];

  return (
    <main className="w-full h-full">
      <Landing
        image="/Bhutanese village.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="GET TO KNOW US "
        subheading="About Us"
        headingstyle="font-mono"
      />
      <StatsSection />

      <TravelAgencyAbout />

      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <BiblograhyComponent />
      </div>
        <TeamSection data={teamData}  />
      <div>
              <ToursSection />
        
        <Footer />
      </div>
    </main>
  );
}
