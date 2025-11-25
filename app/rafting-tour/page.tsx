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
import { tourInfo, mockTourData, photoSets, raftingTourData } from "@/data/paro-places-data";
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
      { src: "/rafting1.jpg", alt: "Paro Airport" },
      { src: "/rafting-2.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/rafting-3.jpg",
    content: `
      Arrive at Paro International Airport, where our representative greets you with warm Bhutanese hospitality. 
      Drive to Thimphu, Bhutan’s vibrant capital. Visit Buddha Dordenma, the Memorial Chorten, and stroll through the craft market. 
      Rest and prepare for the adventure ahead.<br/><br/>
      Overnight: Thimphu
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu – Dochula – Punakha",
    subtitle: "",
  leftImages: [
      { src: "/town.jpg", alt: "Paro Airport" },
      { src: "/why-us.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/tashichho-dzong-it-was.jpg",
    content: `
      After breakfast, drive toward Punakha via the scenic Dochula Pass (3,100m), where 108 chortens and sweeping Himalayan views create a perfect photography stop. 
      Descend into the warm, sub-tropical Punakha Valley and take a gentle walk through fields and village paths to Chimi Lhakhang, the Temple of Fertility. 
      Later, visit the magnificent Punakha Dzong, renowned for its grand architecture and beautiful setting at the confluence of the Pho Chhu and Mo Chhu rivers.<br/><br/>
      Overnight: Punakha
    `,
  },
  {
    dayNumber: "Day 3",
    title: "White Water Rafting in Punakha (Pho Chhu or Mo Chhu)",
    subtitle: "",
  leftImages: [
      { src: "/The Dzong.jpg", alt: "Paro Airport" },
      { src: "/The archeticture.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/taj-gangtey1.jpg",
    content: `
      Today is your rafting adventure day. Experience thrilling white water rafting on the Pho Chhu River (moderate rapids, Class II–III) or enjoy a gentler, scenic float on the Mo Chhu River—depending on your preference. 
      Paddle through turquoise waters with stunning views of paddy fields, village landscapes, and the iconic Punakha Dzong.<br/><br/>
      Overnight: Punakha
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Punakha – Paro (Via Lamperi Botanical Park)",
    subtitle: "",
  leftImages: [
      { src: "/thimphu_hotel.jpg", alt: "Paro Airport" },
      { src: "/The lake.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/paroairport2.jpg",
    content: `
      After a relaxed breakfast, drive back toward Paro, passing rural villages, rich farmlands, and scenic river valleys. 
      En route, stop at Lamperi Botanical Park, home to a stunning collection of rhododendron species, forest trails, and a peaceful lake—perfect for a refreshing walk and nature break. 
      Continue your journey to Paro, and upon arrival, visit Kyichu Lhakhang, one of Bhutan’s oldest and most sacred temples. 
      Spend the evening exploring Paro town’s shops, cafés, and traditional architecture.<br/><br/>
      Overnight: Paro
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Hike to Taktsang (Tiger’s Nest Monastery)",
    subtitle: "",
 leftImages: [
      { src: "/hike2.jpg", alt: "Paro Airport" },
      { src: "/hike3.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/hike4.jpg",
    content: `
      Start early for the unforgettable hike to Taktsang Monastery, perched dramatically on a cliff 900m above the valley floor. 
      Visit the sacred temples, enjoy panoramic views, and have lunch at the viewpoint café. 
      Descend back to Paro for a well-earned rest.<br/><br/>
      Overnight: Paro
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Departure from Paro",
    subtitle: "",
    leftImages: [],
    rightImage: "",
    content: `
      After breakfast, transfer to Paro International Airport for your onward journey. 
      Depart with lasting memories of river adventures and Bhutan’s warm hospitality.<br/><br/>
      Until Next Time:<br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. 
      Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of Thunder Dragon soon!
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
        image="/Beautiful Dzong.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Bhutan White Water Rafting Tour"
        subheading="The Bhutan White Water Rafting Tour blends exhilarating river adventures with immersive cultural experiences in Punakha, Paro, and Thimphu."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={raftingTourData} />
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
