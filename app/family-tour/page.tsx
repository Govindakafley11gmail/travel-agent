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
  familyTourData,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Bhutan – Paro or Phuentsholing (Jaigaon) Gateway",
    subtitle: "Welcome to Bhutan",
    leftImages: [
      { src: "/archery.jpg", alt: "Paro Airport" },
      { src: "/bhutan-dance.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/Bhutan-Adventure.png",
    videoUrl: "",
    content: `
      Land in Paro, Bhutan’s scenic valley, and be welcomed by majestic mountains and traditional architecture. After hotel check-in, enjoy a gentle walk and visit:<br/>
      • Paro Dzong – an iconic fortress-monastery<br/>
      • Ta Dzong (National Museum) – fun and educational for kids<br/>
      Evening at leisure to explore Paro town or enjoy a relaxing family dinner.<br/><br/>

      <strong>Option 2: Arrival by Road – Jaigaon (Phuentsholing)</strong><br/>
      For travelers entering Bhutan overland via Jaigaon, complete immigration and customs formalities, then drive through lush forests and foothills to reach Thimphu or Paro. En route, stop at scenic points and enjoy the first glimpses of Bhutanese landscapes.<br/>
      Evening at your hotel to rest and acclimatize.<br/><br/>

      Overnight: Paro / Thimphu
    `,
  },

  {
    dayNumber: "Day 2",
    title: "Paro – Local Exploration & Family Activities / Travel to Thimphu",
    subtitle: "Family-Friendly Cultural Experiences",
   leftImages: [
      { src: "/bird6.jpg", alt: "Paro Airport" },
      { src: "/bhutanese food.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/bhutan-thimphu-city.jpg",
    videoUrl: "",
    content: `
      Enjoy a relaxed day exploring Paro with the family:<br/>
      • Visit Kyichu Lhakhang, one of Bhutan’s oldest temples<br/>
      • Experience a traditional farmhouse visit, tasting butter tea and learning about rural life<br/>
      Evening at leisure to stroll through Paro town or enjoy a family dinner.<br/><br/>

      <strong>Option 2: Travel from Phuentsholing to Thimphu</strong><br/>
      Scenic drive through lush foothills, rivers, and villages with stops for photos. En route visit:<br/>
      • Kharbandi Gompa – panoramic views of Phuentsholing town<br/>
      Arrive in Thimphu in the evening and rest after the journey.<br/><br/>

      <strong>Overnight:</strong> Paro or Thimphu
    `,
  },

  {
    dayNumber: "Day 3",
    title: "Hike to Tiger’s Nest Monastery (Taktsang)",
    subtitle: "Bhutan’s Most Iconic Experience",
    leftImages: [
      { src: "/hotel-exterior-bang-in.jpg", alt: "Paro Airport" },
      { src: "/honeymoon.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/hike2.jpg",
    videoUrl: "",
    content: `
      <strong>Trek to Taktsang:</strong><br/>
      A scenic 2–3 hour hike one-way (comfortable pace), suitable for families with older children. Enjoy breathtaking views of Paro Valley throughout the trail.<br/><br/>

      <strong>Family-Friendly Alternatives:</strong><br/>
      • Picnic by Paro River<br/>
      • Explore handicraft shops<br/>
      • Visit nearby temples<br/><br/>

      The day concludes with an overnight stay in Paro.
    `,
  },

  {
    dayNumber: "Day 4",
    title: "Paro ➝ Thimphu – City Highlights",
    subtitle: "Capital City Experiences",
    leftImages: [
      { src: "/paro1.jpg", alt: "Paro Airport" },
      { src: "/paro_valley.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/paro.jpg",
    videoUrl: "",
    content: `
      Drive to Thimphu and explore major attractions:<br/>
      • <strong>Buddha Dordenma</strong> – panoramic valley views<br/>
      • <strong>Memorial Chorten</strong> – peaceful spiritual site<br/>
      • <strong>Motithang Takin Preserve</strong> – home of Bhutan’s national animal<br/>
      • <strong>Devi Panchayan Temple</strong><br/>
      • <strong>Craft Bazaar</strong> – shop for souvenirs<br/>

      Evening at leisure.<br/><br/>
      Overnight: Thimphu
    `,
  },

  {
    dayNumber: "Day 5",
    title: "Thimphu ➝ Punakha via Dochula Pass",
    subtitle: "Iconic Himalayan Views",
      leftImages: [
      { src: "/thimphu-tsechu-tour1521440730_480_240.jpg", alt: "Paro Airport" },
      { src: "/What-are-the-best-things-to-do-in-Bumthang.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/Yellow Field.jpg",
    videoUrl: "",
    content: `
      Cross the beautiful <strong>Dochula Pass</strong> (3,100m), with 108 chortens and Himalayan views.<br/>

      In Punakha, enjoy:<br/>
      • Exploring <strong>Punakha Dzong</strong><br/>
      • Walking across the <strong>Punakha Suspension Bridge</strong><br/>
      • A gentle hike to <strong>Chimi Lhakhang</strong> through rice fields<br/><br/>

      <strong>Overnight:</strong> Punakha
    `,
  },

  {
    dayNumber: "Day 6",
    title: "Punakha ➝ Return to Paro or Thimphu",
    subtitle: "Leisure & Optional Cultural Activities",
   leftImages: [
      { src: "/thimphu-hotel.jpg", alt: "Paro Airport" },
      { src: "/thimphu-dzong.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/kurje.jpg",
    videoUrl: "",
    content: `
      Return to Paro or Thimphu depending on departure plans.<br/>

      Optional family activities:<br/>
      • Relaxing <strong>hot stone bath</strong><br/>
      • Visit <strong>Zorig Chusum</strong> (School of Arts & Crafts)<br/>
      • Explore the local vegetable market<br/><br/>

      <strong>Overnight:</strong> Paro or Thimphu
    `,
  },

  {
    dayNumber: "Day 7",
    title: "Departure from Bhutan",
    subtitle: "Farewell",
 
    videoUrl: "",
    content: `
      Transfer to Paro International Airport or drive to Jaigaon (Phuentsholing) for onward travel.<br/>
      Depart with cherished memories of Bhutan’s landscapes, culture, and family adventures.<br/>

      <strong>Tour Style:</strong> Standard / Comfort<br/>
      Thoughtfully curated accommodations, comfortable transportation, and authentic cultural experiences.<br/><br/>

      <strong>Year-Round Availability:</strong><br/>
      • Spring (March–May): Blooming landscapes<br/>
      • Autumn (September–November): Clear skies & colors<br/>
      • Winter (December–February): Crisp air, peaceful villages<br/><br/>

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
        heading="Family Tour in Bhutan"
        subheading="Bhutan is one of the safest and most enchanting destinations for families. "
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={familyTourData} />
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
