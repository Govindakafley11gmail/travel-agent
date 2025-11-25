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
  birdsData,
  easternbhutanbirdsData,
  culturegastronomyData,
  dagalatrekData,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro – Transfer to Thimphu",
    subtitle: "",
    leftImages: [
      { src: "/dagala1.jpg", alt: "Paro Airport Arrival" },
      { src: "/dagala2.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/dagala3.jpg",
    content: `
      Arrive at Paro International Airport, where our representative from Lumora Bhutan welcomes you with traditional Bhutanese hospitality. 
      After a scenic drive to Thimphu, enjoy a relaxed afternoon exploring the city’s highlights such as the Memorial Chorten, Buddha Dordenma, and a walk through the vibrant craft bazaar. 
      Overnight in Thimphu as you prepare for the trek.<br/><br/>
      Overnight: Thimphu
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu – Gyenkha to Gur (Trek Start)",
    subtitle: "",
    leftImages: [
      { src: "/dagala4.jpg", alt: "Paro Airport Arrival" },
      { src: "/dagala5.png", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/dagala8.jpg",
    content: `
      Drive to Gyenkha, the starting point of the trek. Begin your journey with a gradual climb through forests, open ridges, and yak herding pastures. 
      Reach the serene meadow campsite at Gur with panoramic surroundings.<br/><br/>
      Camp at Gur (3,290m)
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Gur – Labatama",
    subtitle: "",
    leftImages: [
      { src: "/dagala7.jpg", alt: "Paro Airport Arrival" },
      { src: "/dagala9.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/dagala10.jpg",
    content: `
      A scenic trek over alpine ridges and wildflower valleys. As you ascend, Himalayan peaks come into view. 
      Arrive at the breathtaking lakeside campsite at Labatama, one of the most picturesque locations on the trek.<br/><br/>
      Camp at Labatama (4,300m)
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Labatama – Explore the Lakes",
    subtitle: "",
    leftImages: [
      { src: "/dagala11.jpg", alt: "Paro Airport Arrival" },
      { src: "/Green and lush land.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/dagala12.jpg",
    content: `
      Enjoy an acclimatization and exploration day. Hike around the pristine glacial lakes such as Haltsho, Janyatso, and Reli Tsho. 
      The reflections of surrounding peaks create perfect photography moments.<br/><br/>
      Camp at Labatama
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Labatama – Panka",
    subtitle: "",
    leftImages: [
      { src: "/Panka – Talakha.jpg", alt: "Paro Airport Arrival" },
      { src: "/huge-complex.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/Kharbandi-Goemba.jpg",
    content: `
      Cross a high ridge offering sweeping views of the Dagala range. Walk along yak trails and descend into alpine meadows where herders camp in summer.<br/><br/>
      Camp at Panka (4,000m)
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Panka – Talakha",
    subtitle: "",
    leftImages: [
      { src: "/Landscape.jpg", alt: "Paro Airport Arrival" },
      { src: "/Green and lush land.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/jakar.jpg",
    content: `
      A scenic day of crossing multiple small passes, each offering incredible panoramic views. Continue through rhododendron forests and alpine slopes to reach Talakha Monastery, perched quietly above Thimphu Valley.<br/><br/>
      Camp at Talakha (3,080m)
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Talakha – Chamgang – Return to Thimphu",
    subtitle: "",
    leftImages: [
      { src: "/farewell.jpg", alt: "Paro Airport Arrival" },
      { src: "/dochulkha brow view.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/dzongkhang.jpg",
    content: `
      Descend through forests to Chamgang village, where your vehicle awaits. Drive back to Thimphu for a warm shower, delicious dinner, and well-deserved rest after completing this rewarding trek.<br/><br/>
      Overnight: Thimphu
    `,
  },
  {
    dayNumber: "Day 8",
    title: "Departure from Paro",
    subtitle: "",
    leftImages: [],
    rightImage: "",
    content: `
      After breakfast, drive to Paro for your departure flight. Bid farewell to Bhutan with beautiful memories of alpine lakes, peaceful landscapes, and a truly unforgettable trekking experience.<br/><br/>
      Until Next Time:<br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. 
      Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of Thunder Dragon soon!
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
        heading="Embark on a soul-stirring journey"
        subheading="Land in the scenic Paro Valley, greeted by the crisp Himalayan air and stunning mountain vistas."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={dagalatrekData} />
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
