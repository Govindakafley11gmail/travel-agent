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
    title: " Arrival in Paro",
    subtitle: "Arrival and Acclimatization",
    leftImages: [
      { src: "/paro_valley.jpg", alt: "Paro Valley" },
      { src: "/thimphudzong.jpg", alt: "Paro International Airport" },
    ],
    rightImage: "/paroresort.jpg",
    videoUrl: "https://www.youtube.com/embed/MbszG6P6U0I",
    content: `
      <strong>Arrival at Paro International Airport</strong><br/>
      Land in the scenic Paro Valley, greeted by the crisp Himalayan air and stunning mountain vistas. Paro International Airport, perched at an altitude of about 2,235 meters above sea level (masl), offers one of the most breathtaking landings in the world, embracing travelers with a spectacular introduction to your Bhutanese adventure.<br/><br/>

      <strong>Routine Immigration and Customs</strong><br/>
      Complete standard entry formalities with ease at the airport. Once outside, your guide will be waiting to warmly welcome you and accompany you as you step into the serene and culturally rich kingdom of Bhutan.<br/><br/>

      <strong>Travel to Hotel</strong><br/>
      Journey from Paro to Thimphu, enjoying picturesque landscapes, terraced fields, and traditional villages along the way. Upon arrival in Thimphu, check in to your hotel and refresh yourself before enjoying a welcome tea and lunch.<br/><br/>

      <strong>Lunch at Local Restaurant & Sightseeing</strong><br/>
      Savor your first taste of Bhutanese cuisine with a carefully curated selection of local dishes, featuring both vegetarian and non-vegetarian delights. In the afternoon, set out on a guided tour of Thimphu, exploring iconic landmarks such as the Buddha Dordenma Statue, Tashichho Dzong, and the bustling Thimphu Market—a wonderful introduction to the kingdom’s vibrant culture, spiritual heritage, and everyday life.<br/><br/>

      <strong>Evening in Thimphu with Dinner and Overnight Stay</strong><br/>
      <strong>Evening at Leisure:</strong> Unwind at your own pace and soak in the charm of Paro. Take a leisurely stroll along the town’s main street, where quaint cafes, local shops, and vibrant stalls offer an array of handicrafts and traditional Bhutanese treasures.<br/>
      <strong>Dinner:</strong> End your day with a sumptuous dinner at your hotel, offering a selection of Bhutanese, Indian, and international dishes to delight your palate.<br/>
      <strong>Overnight Stay:</strong> Retire for the night and recharge, as tomorrow promises an unforgettable adventure to one of Bhutan’s most iconic and breathtaking landmarks, the Tiger’s Nest Monastery.
    `,
  },
  {
    dayNumber:"Day 2",
    title: "Hike to Tiger’s Nest Monastery (Approx. 4 km hike, 3120 masl, 2 hours one way walk) and Leisure Afternoon",
    subtitle: "Spiritual Hike and Cultural Exploration",
    leftImages: [
      { src: "/tigers-nest-path.jpg", alt: "Tiger's Nest Trail" },
      { src: "/hotel-exterior-bang-in.jpg", alt: "Cafeteria midway to Tiger's Nest" },
    ],
    rightImage: "/food.jpg",
    videoUrl: "https://www.youtube.com/embed/Yd_7FzjDzHc",
    content: `
      <strong>Morning:</strong><br/>
      <strong>Early Breakfast at Hotel:</strong> Begin your day with a hearty breakfast to fuel up for the trek ahead.<br/>
      <strong>Travel to Tiger’s Nest Trailhead:</strong> Set off with your guide to the base of the trail. The drive is about 1 hour 30 minutes, bringing you comfortably to the starting point of the hike.<br/>
      <strong>Trek to Tiger’s Nest Monastery:</strong> Embark on the approximately 4 km hike to the monastery. The climb takes around 2 hours to ascend, depending on your pace. The trail is well-marked, with some steep sections, offering stunning views along the way.<br/>
      <strong>Midway Break at Cafeteria:</strong> About halfway up, pause at a small cafeteria. Refresh with snacks and beverages while enjoying breathtaking views of the monastery seemingly clinging to the cliff opposite.<br/>
      <strong>Arrival and Exploration:</strong> Reach the monastery and spend time exploring this sacred site. Your guide will share fascinating stories and legends about Guru Rinpoche and his introduction of Buddhism to Bhutan.<br/><br/>

      <strong>Lunch:</strong><br/>
      <strong>Return to Cafeteria:</strong> After your visit, descend back to the cafeteria for a relaxing lunch, taking in panoramic views of the Paro Valley below.<br/><br/>

      <strong>Afternoon Sightseeing in Paro:</strong><br/>
      <strong>Drive Back to Paro:</strong> After the hike, your guide will drive you back to town and visit the following on the way back:<br/>
      <strong>Explore Kyichu Lhakhang:</strong> Visit one of Bhutan’s oldest temples, dating back to the 7th century. Enjoy the serene atmosphere and reflect on the deep-rooted spiritual heritage of Bhutanese Buddhism.<br/>
      <strong>Visit Paro Dzong (Rinpung Dzong):</strong> Explore this impressive fortress, which functions as both a religious and administrative center. Admire its architecture and learn about its historical significance.<br/><br/>

      <strong>Evening:</strong><br/>
      <strong>Dinner in Paro:</strong> Unwind with a delicious dinner at your hotel or a local restaurant, sampling traditional Bhutanese flavors.<br/>
      <strong>Prepare for Departure:</strong> If this is your final night, make sure your belongings are packed and ready for the journey ahead.<br/><br/>

      <strong>Overnight in Paro:</strong><br/>
      <strong>Rest and Recharge:</strong> After a day of physical activity and spiritual enrichment, enjoy a restful night’s sleep in preparation for your departure.
    `,
  },
  {
    dayNumber: "Day 3: ",
    title:"Travel to Paro International Airport and Departure",
    subtitle: "Farewell to Bhutan",
    leftImages: [
      { src: "/airport.jpg", alt: "Paro Airport Morning" },
      { src: "/bhutannesdish.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/plane.jpg",
    videoUrl: "https://www.youtube.com/embed/MbszG6P6U0I",
    content: `
      <strong>Breakfast at the Hotel:</strong> Start your day with a final breakfast in Bhutan, savoring the flavors one last time while enjoying the serene ambiance and taking in the tranquil views of the lush Paro Valley from your hotel.<br/><br/>

      <strong>Travel to Airport:</strong><br/>
      <strong>Check-Out:</strong> Complete your hotel check-out, ensuring all your belongings and travel documents are ready for departure.<br/>
      <strong>Airport Transfer:</strong> Your guide and driver will accompany you to Paro International Airport, assisting with luggage and guiding you to the departure area, ensuring a smooth and stress-free conclusion to your Bhutan adventure.<br/><br/>

      <strong>Departure from Bhutan:</strong><br/>
      Begin your final day with a check-in at Paro International Airport, completing airport formalities with ease. As you await your flight, take a quiet moment to reflect on the enchanting experiences, vibrant culture, and serene landscapes that have made your Bhutan journey unforgettable.<br/>
      When boarding is announced, proceed to your gate and settle in for departure. As your plane ascends over the majestic Himalayas, savor one last panoramic view of Bhutan’s pristine valleys and cliffside monasteries—a breathtaking farewell to the Land of the Thunder Dragon.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of the Thunder Dragon.<br/><br/>
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
