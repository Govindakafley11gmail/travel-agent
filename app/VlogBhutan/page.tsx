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
import { tourInfo, mockTourData, photoSets, newTourPackageData } from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro ➝ Thimphu",
    subtitle: "",
    leftImages: [
      { src: "/buddha_dordenma.jpg", alt: "Paro International Airport" },
      { src: "/dochula_overview.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Kichu-Lhakang.jpg",
    videoUrl: "",
    content: `
      Arrive at Paro International Airport and enjoy a traditional khaddar welcome. Drive along the Paro River, passing picturesque villages like Shaba and Bondey. Stop at Chuzom, where the Paro and Thimphu rivers meet, for scenic shots.
Arrive in Thimphu, the only capital city in the world without traffic lights. Explore streets, handicrafts, and local cafés if time permits.
Overnight in Thimphu
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu – Thimphu Tshechu Festival",
    subtitle: "",
      leftImages: [
      { src: "/kurje.jpg", alt: "Paro International Airport" },
      { src: "/Kharbandi-Monastery-2.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/land.jpg",
    videoUrl: "",
    content: `
      Attend the Thimphu Tshechu festival, capturing the energy, costumes, and dances from designated areas. In the afternoon, visit Buddha Dordenma for panoramic valley views and Handicraft Emporium for authentic souvenirs. End the day enjoying festival lights and local street scenes.
Overnight in Thimphu
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Thimphu Sightseeing & Village Experience",
    subtitle: "",
  leftImages: [
      { src: "/sam2.jpg", alt: "Paro International Airport" },
      { src: "/sam4.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Beautiful Flower.jpg",
    videoUrl: "",
    content: `
      Spend the day exploring Thimphu's cultural and natural highlights:<br/><br/>
      • Arts & Crafts School, showcasing live carving, painting, and weaving<br/>
      • Folk Heritage Museum, offering a glimpse into traditional Bhutanese life<br/>
      • Weekend Market/Centenary Farmers Market, featuring local produce and handicrafts<br/>
      • Takin Zoo, home to Bhutan's national animal, the takin, and other native species<br/><br/>
      In the evening, enjoy a dinner featuring authentic Bhutanese cuisine at a local restaurant or family home, perfect for culinary exploration and travel content creation.<br/>
      Overnight in Thimphu
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Thimphu ➝ Paro – Tiger's Nest Monastery (Taktsang)",
    subtitle: "",
   leftImages: [
      { src: "/rinpung.jpg", alt: "Paro International Airport" },
      { src: "/River.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/paro_valley.jpg",
    videoUrl: "",
    content: `
      Drive to Paro in the morning and prepare for the trek to the iconic Taktsang Monastery (Tiger's Nest), perched 900 meters above Paro Valley. Capture the cliffside, valley views, and surrounding landscapes—the highlight of Bhutan for photography and vlogging.
 
After descending, explore Paro town, its markets, and riverside walks. Optional exterior visits to Rinpung Dzong and Kyichu Lhakhang can be included depending on time.
Overnight in Paro
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Departure from Paro",
    subtitle: "",
  leftImages: [
      { src: "/Semtokha-Dzong.jpg", alt: "Paro International Airport" },
      { src: "/sam7.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/taj-gangtey1.jpg",
    videoUrl: "",
    content: `
      After breakfast, transfer to Paro International Airport. Take one last look at the valleys, rivers, and mountain landscapes. Depart Bhutan with memories of vibrant festivals, serene valleys, and rich cultural experiences.
Until Next Time:
As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you've gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
  },
  {
    dayNumber: "Tour Information",
    title: "Why Choose This Tour & Tour Details",
    subtitle: "",

    videoUrl: "",
    content: `
      ✨ Why Choose This Tour? <br/>
 
This tour is designed for travelers who want more than sightseeing. It creates space for genuine human connection, meaningful cultural experiences, and a deeper appreciation of Bhutan's way of life. From intimate homestays to hands-on village activities, every moment offers insight into the traditions that define Bhutan. <br/>
 
🏷️ Tour Style <br/>
Standard / Comfort <br/>
Thoughtfully curated accommodations, comfortable transportation, and authentic cultural experiences designed for meaningful, mindful travel.<br/>
📌 Year-Round Availability<br/>
Autumn (September–November): Clear skies & beautiful colors<br/>
📞 Bookings & Enquiries (CTA Button)<br/>
    `,
  },
];



  const PolicyPageData: PolicyPageData = {
    city: "Noriva",
    country: "Lumora Tours and Travel",
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
        image="/Gedu-Town.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Vlog Bhutan Tours"
        subheading="Bhutan Village Tours invite travelers to step into the peaceful rhythm of rural Bhutan, where daily life remains closely tied to tradition and nature. "
        Itinerary=""
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={newTourPackageData} />
      </div>
    

      <section className="min-h-screen bg-gradient-to-b py-8 mt-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
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
