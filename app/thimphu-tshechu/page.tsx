"use client";

import HeroVideoSection from "@/component/destination";
import PhotoCollage from "@/component/image-collage/iamge-collage";
import PhotoGallery from "@/component/image-collage/iamge-collage";
import ItineraryDay from "@/component/itinerary/itinerary";
import image1 from "@/public/image1.jpg";
import Landing from "@/component/landing/landing";
import Navbar from "@/component/navbar/navbar";
import PolicyPage, {
  PolicyPageData,
} from "@/component/policy-page/policy-page";
import TourBand from "@/component/tour-band/tour- band";
import TourAbout from "@/component/tour-highlights/tour-highlights";
import {
  tourInfo, mockTourData,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro ➝ Thimphu",
    subtitle: "Arrival and Transfer to Thimphu",
     leftImages: [
      { src: "/c1.jpg", alt: "Paro Airport Morning" },
      { src: "/c2.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/c3.jpg",
    content: `

      Arrive at Paro International Airport and enjoy a traditional khaddar welcome. 
      Drive along the Paro River, passing picturesque villages like Shaba and Bondey. 
      Stop at Chuzom, where the Paro and Thimphu rivers meet, for scenic shots.<br/>

      Arrive in Thimphu, the only capital city in the world without traffic lights. 
      Explore streets, handicrafts, and local cafés if time permits.<br/><br/>

     Overnight: in Thimphu
    `,
  },

  {
    dayNumber: "Day 2",
    title: "Thimphu – Thimphu Tshechu Festival",
    subtitle: "Festival Day",
     leftImages: [
      { src: "/c4.jpg", alt: "Paro Airport Morning" },
      { src: "/c5.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/c6.jpg",
    content: `

      Attend the Thimphu Tshechu festival, capturing the energy, costumes, 
      and dances from designated areas.<br/>

      Afternoon visits:<br/>
      – Buddha Dordenma for panoramic views<br/>
      – Handicraft Emporium for authentic souvenirs<br/>

      End the day enjoying festival lights and local street scenes.<br/><br/>

    Overnight: in Thimphu
    `,
  },

  {
    dayNumber: "Day 3",
    title: "Thimphu Sightseeing & Village Experience",
    subtitle: "Culture and Local Experiences",
     leftImages: [
      { src: "/c7.jpg", alt: "Paro Airport Morning" },
      { src: "/c8.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/cul5.jpg",
    content: `

      Spend the day exploring Thimphu’s cultural and natural highlights:<br/>
      • Arts & Crafts School – live carving, painting & weaving<br/>
      • Folk Heritage Museum – traditional Bhutanese lifestyle<br/>
      • Weekend Market – local produce & handicrafts<br/>
      • Takin Zoo – Bhutan’s national animal<br/>

      In the evening, enjoy dinner with authentic Bhutanese cuisine at a local restaurant 
      or family home — perfect for culinary exploration and travel content.<br/><br/>

      Overnight: Thimphu
    `,
  },

  {
    dayNumber: "Day 4",
    title: "Thimphu ➝ Paro – Tiger’s Nest Monastery",
    subtitle: "Taktsang Hike",
     leftImages: [
      { src: "/cul12.jpg", alt: "Paro Airport Morning" },
      { src: "/bhutannesdish.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/cul1.jpg",
    content: `

      Drive to Paro in the morning and prepare for the trek to the iconic Tiger’s Nest. 
      Capture cliffside views, valley scenery, and landscapes — a highlight for photography and vlogging.<br/>

      After descending:<br/>
      • Explore Paro town, markets & riverside walks<br/>
      • Optional exterior visits to Rinpung Dzong & Kyichu Lhakhang<br/><br/>

   Overnight in Paro
    `,
  },

  {
    dayNumber: "Day 5",
    title: "Departure from Paro",
    subtitle: "Farewell to Bhutan",
 
    content: `

      After breakfast, transfer to Paro International Airport. 
      Enjoy last views of valleys, rivers & mountain landscapes.<br/>

      Depart Bhutan with memories of vibrant festivals, serene valleys, and rich cultural experiences.<br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, 
      the warmth of its people, and the timeless beauty of its mountains and monasteries.<br/>

      Though your journey may end for now, the memories you've gathered will linger, 
      calling you back to the Land of Thunder Dragon soon!
    `,
  },
];




  const PolicyPageData: PolicyPageData = {
    city: "Thimphu",
    country: "Bhutan",
    highlights: [
      {
        title: "Thimphu City Exploration",
        description:
          "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
        icon: Check,
        color: "text-[#00A651]",
      },
      {
        title: "Cultural Immersion",
        description:
          "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
        icon: X,
        color: "text-red-500",
      },
    ],
  };

  return (
    <main className="w-full h-full">
      <Landing
        image="/Paro-Taktsang.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Thimphu Tshechu Tours"
        subheading="Discover the magic of Bhutan in this short yet enriching journey designed for those with limited time but a deep sense of curiosity."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={mockTourData} />
      </div>


      <section className="min-h-screen bg-gradient-to-b py-8 mt-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="font-bold text-3xl font-mono">Your itinerary</span>
              </div>
              {itinerary.map((day, idx) => (
                <ItineraryDay key={idx} {...day} />
              ))}
            </div>

            {/* RIGHT: Sticky Map */}
            <aside className=" block lg:col-span-1 mt-10">
              <div className="sticky top-6 bg-white rounded shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33209.0!2d89.41334!3d27.43050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzQ5LjgiTiA4OcKwMjQnNDguOCJF!5e0!3m2!1sen!2sbt!4v0000000000000"
                  width="100%"
                  height="700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <div>
        <HeroVideoSection
          title="Start Exploring"
          subtitle="Are you ready for adventures to"
          bookUs={true}
          contactUs={true}
          backgroundImage={image1}
          video={false}
        />
      </div>
         <div>     <PaymentCard /></div>
      
      <div>
        <TripsForFistTimer />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
