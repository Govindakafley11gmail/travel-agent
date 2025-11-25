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
    title: "Arrival in Paro & Village Walk",
    subtitle: "",
 leftImages: [
      { src: "/newpachage.jpg", alt: "Paro International Airport" },
      { src: "/thimphu-tsechu-tour1521440730_480_240.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Beautiful Dzong.jpg",
    videoUrl: "",
    content: `
      Arrive at Paro International Airport and meet your guide before transferring to your hotel. Your Bhutan experience begins with a gentle stroll through a traditional village, where you can admire elegant architecture, terraced fields, and serene rural life. Later, you will be welcomed at a local farmhouse for herbal tea and cultural orientation, giving you your first taste of Bhutanese hospitality.
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Paro Cultural Immersion & Farm Life",
    subtitle: "",
  leftImages: [
      { src: "/paro.jpg", alt: "Paro International Airport" },
      { src: "/sam2.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/s_mountain.jpg",
    videoUrl: "",
    content: `
      Today you explore Paro's villages and their organic farming lifestyle. Spend time with farming families who will explain how local crops are cultivated using traditional methods. You may try archery, Bhutan's national sport, or observe other rural activities. In the evening, visit a village temple and enjoy the spiritual atmosphere before returning to Paro for the night.
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Scenic Drive to Haa Valley & Homestay Experience",
    subtitle: "",
   leftImages: [
      { src: "/The Takila.jpg", alt: "Paro International Airport" },
      { src: "/tashichho-dzong-it-was.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Semtokha-Dzong.jpg",
    videoUrl: "",
    content: `
      Travel across the breathtaking Chelela Pass and descend into the quiet Haa Valley, known for its alpine beauty and remote lifestyle. You will explore hamlets scattered across the valley floor, observing how communities live close to nature. In the evening, settle into a comfortable homestay where your hosts will prepare a warm dinner and share stories that bring Bhutanese village life to life.
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Haa to Thimphu – Artisan Villages & Craft Traditions",
    subtitle: "",
   leftImages: [
      { src: "/greenary_view.jpg", alt: "Paro International Airport" },
      { src: "/huge-complex.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Green Paddy field.jpg",
    videoUrl: "",
    content: `
      Begin the day with a short walk in Haa's highland communities before driving toward Thimphu. Along the way, visit small artisan villages where families specialize in weaving, woodcarving, and traditional crafts that form Bhutan's artistic identity. These interactions provide a unique opportunity to appreciate Bhutan's cultural craftsmanship before spending the night in the capital.
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Journey to Punakha – Rice Terraces & Rural Activities",
    subtitle: "",
   leftImages: [
      { src: "/The Dzong.jpg", alt: "Paro International Airport" },
      { src: "/The lake.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/tigers-nest-path.jpg",
    videoUrl: "",
    content: `
      Enjoy a scenic drive across Dochula Pass toward the warm and fertile Punakha valley. Here you will visit traditional villages tucked among rice terraces and riverside plains. Participate in a community activity such as preparing butter lamps, learning basic Bhutanese cooking techniques, or making simple local snacks with villagers. Overnight in Punakha's peaceful countryside.
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Punakha to Phobjikha – Highland Living, Farm Stay & Village Cooking",
    subtitle: "",
    leftImages: [
      { src: "/folk_heritage_museum.jpg", alt: "Paro International Airport" },
      { src: "/food.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/Bhutan-Adventure.png",
    videoUrl: "",
    content: `
      Head to the pristine glacial valley of Phobjikha, one of Bhutan's most beautiful highland regions. Explore Gangtey village and meet local families engaged in potato farming, weaving, and small-scale crafts. In the afternoon, you will check in to your farm stay, where your hosts will guide you in preparing a traditional Bhutanese meal using fresh, locally grown ingredients. A warm dinner by the hearth, shared with the family, completes an unforgettable day of village hospitality.
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Return to Paro & Departure",
    subtitle: "",
   
    videoUrl: "",
    content: `
      After breakfast, make your way back to Paro, passing through familiar valleys and villages. Depending on your flight schedule, you may enjoy one final village stop. Your guide will then accompany you to the airport for departure, marking the end of your heartfelt journey through Bhutan's rural landscapes.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you've gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
  },
  {
    dayNumber: "Tour Information",
    title: "Why Choose This Tour & Tour Details",
    subtitle: "",
    leftImages: [],
    rightImage: "",
    videoUrl: "",
    content: `
      <strong>✨ Why Choose This Tour?</strong><br/>
      This tour is designed for travelers who want more than sightseeing. It creates space for genuine human connection, meaningful cultural experiences, and a deeper appreciation of Bhutan's way of life. From intimate homestays to hands-on village activities, every moment offers insight into the traditions that define Bhutan.<br/><br/>

      <strong>🏷️ Tour Style</strong><br/>
      Standard / Comfort<br/>
      Thoughtfully curated accommodations, comfortable transportation, and authentic cultural experiences designed for meaningful, mindful travel.<br/><br/>

      <strong>📌 Year-Round Availability</strong><br/>
      Spring (March–May): Blooming landscapes, ideal weather<br/>
      Autumn (September–November): Clear skies & beautiful colors<br/>
      Winter (December–February): Crisp air, peaceful villages, fewer tourists<br/><br/>

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
        image="/Kharbandi-Goemba.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="New Tour Packages"
        subheading="Bhutan Village Tours invite travelers to step into the peaceful rhythm of rural Bhutan, where daily life remains closely tied to tradition and nature. "
        Itinerary="Book Us"
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
