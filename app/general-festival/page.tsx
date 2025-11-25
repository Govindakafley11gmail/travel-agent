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
  generalFestivalData,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
  const itinerary = [
    {
      dayNumber: "Day 1",
      title: "Arrival in Bhutan",
      subtitle: "Welcome to the Land of the Thunder Dragon",
      leftImages: [
        { src: "/dance.jpg", alt: "Paro Airport" },
        { src: "/dance2.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/cul5.jpg",
      content: `

      Arrive at Paro International Airport and meet your Bhutanese guide. 
      After a warm welcome, transfer to your hotel.<br/>

      Depending on your arrival time, enjoy: <br/>
      • An orientation walk in town<br/>
      • A visit to a nearby monastery or museum<br/><br/>

      Overnight:Paro or festival city
    `,
    },

    {
      dayNumber: "Day 2",
      title: "Cultural Sightseeing & Festival Preview",
      subtitle: "Introduction to Bhutan & Tshechu Insights",
      leftImages: [
        { src: "/cul3.jpg", alt: "Paro Airport" },
        { src: "/cul8.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/cul10.jpg",
      content: `

      Begin your Bhutan journey with visits to key cultural sites in the region.<br/>
      Depending on your festival location, explore:<br/>
      • Traditional dzongs and monasteries<br/>
      • Viewpoints and museums<br/>
      • Lively local markets<br/>

      Your guide will also explain the significance of the Tshechu festival 
      and what to expect during the celebrations.<br/>

      Gain deeper insight into Bhutanese spirituality and culture before the main event.
    `,
    },

    {
      dayNumber: "Day 3",
      title: "Full Day at the Tshechu Festival",
      subtitle: "Festival Day",
      leftImages: [
        { src: "/cul3.jpg", alt: "Paro Airport" },
        { src: "/cul1.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/cul4.jpg",
      content: `

      Spend the full day immersed in the vibrant Tshechu celebrations. Enjoy:<br/>

      • Sacred mask dances<br/>
      • Traditional folk dances<br/>
      • Blessings from monks<br/>
      • Colorful attire, music & lively local energy<br/>

      Your guide will explain the meaning behind each dance and ritual 
      to deepen your cultural experience.<br/><br/>

     Overnight: At the festival location
    `,
    },

    {
      dayNumber: "Day 4",
      title: "Explore Nearby Valleys",
      subtitle: "Regional Sightseeing",
      leftImages: [
        { src: "/cul2.jpg", alt: "Paro Airport" },
        { src: "/cul3.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/cul7.jpg",
      content: `

      After experiencing the festival, explore the surrounding region. 
      Typical options include:<br/>

      • <strong>Paro:</strong> Dzongs, temples, museums, farmhouses<br/>
      • <strong>Thimphu:</strong> Buddha Dordenma, Folk Heritage Museum, Takin Preserve<br/>
      • <strong>Punakha:</strong> Punakha Dzong, Chimi Lhakhang, village tours<br/>

      Enjoy scenic drives, photography stops, and memorable interactions with locals.<br/><br/>

     Overnight: Paro / Thimphu / Punakha
    `,
    },

    {
      dayNumber: "Day 5",
      title: "Iconic Hike or Cultural Experience",
      subtitle: "Choose Your Signature Experience",
      leftImages: [
        { src: "/cul4.jpg", alt: "Paro Airport" },
        { src: "/cul5.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/cul9.jpg",
      content: `

      Choose one of Bhutan’s signature activities:<br/>

      • Hike to the legendary Tiger’s Nest Monastery (Taktsang)<br/>
      • Village walk & farmhouse visit<br/>
      • Short nature hike or temple visit<br/>

      Optional in the evening:<br/>
      • Traditional Hot Stone Bath<br/><br/>

   Overnight: Paro
    `,
    },

    {
      dayNumber: "Day 6",
      title: "Departure from Bhutan",
      subtitle: "Farewell to Bhutan",

      content: `

      Transfer to Paro International Airport for your onward journey. 
      Your guide will bid you farewell with warm Bhutanese hospitality.<br/><br/>

      <strong>Notes:</strong><br/>
      This is a general Tshechu itinerary and can be used for any festival across Bhutan:<br/>
      Paro Tshechu, Thimphu Tshechu, Punakha Drubchen, Wangdue Tshechu, 
      Jambay Lhakhang Drup, Trongsa Tshechu, Bumthang Tshechu, and more.<br/>

      The itinerary can be customized based on the exact festival dates and preferred districts.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      Carry with you the serenity of Bhutan’s landscapes, the warmth of its people, 
      and the timeless beauty of its mountains and monasteries. 
      These memories will call you back to the Land of the Thunder Dragon soon!
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
        heading="General Tshechu Festival Tour"
        subheading="The Tshechu Festival is Bhutan’s most important annual religious celebration, held in every district during different months of the year. "
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={generalFestivalData} />
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
