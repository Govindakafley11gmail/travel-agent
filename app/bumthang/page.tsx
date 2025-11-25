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
import { tourInfo, mockTourData, bumthangTourData } from "@/data/paro-places-data";
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
      { src: "/buddha.jpg", alt: "Paro International Airport" },
      { src: "/way-thimphu.jpg", alt: "Drive to Thimphu" },
    ],
    rightImage: "/drukasia.jpg",
    videoUrl: "",
    content: `
      Arrive at Paro International Airport through Drukair or Bhutan Airlines, greeted by our representative from Lumora Bhutan.
      After a scenic drive to Thimphu (1.5 hours), visit Buddha Dordenma, Tashichho Dzong, and stroll through the capital’s vibrant evening market.
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu – Trongsa (via Dochula & Pelela Pass)",
    subtitle: "",
    leftImages: [
      { src: "/sixsense.jpg", alt: "Dochula Pass" },
      { src: "/Tashichödzong_Thimphu.jpg", alt: "Trongsa Dzong" },
    ],
    rightImage: "/tashichho-dzong-it-was.jpg",
    videoUrl: "",
    content: `
      Early morning drive to Trongsa, passing through Dochula Pass (3,100m) offering panoramic Himalayan views. Stop at Chendebji Chorten en route.
      Arrive in Trongsa by evening and visit Trongsa Dzong, Bhutan’s largest fortress.
      Overnight: Trongsa
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Trongsa – Bumthang",
    subtitle: "",
    leftImages: [
      { src: "/yotungla.jpg", alt: "Yotong La Pass" },
      { src: "/jakar.jpg", alt: "Bumthang Valley" },
    ],
    rightImage: "/jakar-dzong.jpg",
    videoUrl: "",
    content: `
      Drive to Bumthang (2.5 hrs), crossing Yotong La Pass into Bhutan’s spiritual valley. After check-in, take a relaxing stroll through Chamkhar town.
      Overnight: Bumthang
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Sacred Sites of Bumthang",
    subtitle: "",
    leftImages: [
      { src: "/jambay.jpg", alt: "Jambay Lhakhang" },
      { src: "/kurje.jpg", alt: "Kurje Lhakhang" },
    ],
    rightImage: "/jakardzong.jpg",
    videoUrl: "",
    content: `
      Visit the ancient Jambay Lhakhang (7th century) and Kurje Lhakhang, where Guru Rinpoche meditated. Continue to Tamzhing Monastery, known for its sacred frescoes. End the day exploring Jakar Dzong overlooking the valley.
      Overnight: Bumthang
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Tang Valley & Mebar Tsho (Burning Lake)",
    subtitle: "",
    leftImages: [
      { src: "/tangvalley.jpg", alt: "Tang Valley" },
      { src: "/mebartsho.jpg", alt: "Mebar Tsho Burning Lake" },
    ],
    rightImage: "/ogyencholing.jpg",
    videoUrl: "",
    content: `
      Drive to Tang Valley, one of the most scenic in Bhutan. Visit Mebar Tsho (Burning Lake) and the Ogyen Choling Heritage Museum. Return to Bumthang town in the evening.
      Overnight: Bumthang
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Bumthang – Paro (Flight or Drive)",
    subtitle: "",
    leftImages: [
      { src: "/flight.jpg", alt: "Flight to Paro" },
      { src: "/rinpung.jpg", alt: "Rinpung Dzong" },
    ],
    rightImage: "/paro.jpg",
    videoUrl: "",
    content: `
      After breakfast, you may take a domestic flight from Bumthang to Paro (to be purchased separately) or opt for an overland drive back through Trongsa and Punakha.
      Upon reaching Paro, visit Rinpung Dzong and explore the local handicraft market (applicable to clients opting flight from Bumthang)
      Overnight: Paro
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Departure from Paro",
    subtitle: "",
    leftImages: [
      { src: "/paroairport2.jpg", alt: "Paro Airport Departure" },
      { src: "/farewell.jpg", alt: "Farewell from Bhutan" },
    ],
    rightImage: "/thunderdragon.jpg",
    videoUrl: "",
    content: `
      After breakfast, transfer to Paro International Airport for your onward journey.
      Our Lumora Bhutan team will bid you farewell, wishing you safe travels and fond memories of Bhutan’s spiritual heart.
      Until Next Time:
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
  }, {
    dayNumber: "",
    title: " Until Next Time",
    subtitle: "",
    videoUrl: "",
    content: `
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
  },
];


  const PolicyPageData: PolicyPageData = {
    city: "Thimphu",
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
        heading="Hello this is the Festival of Bhutan"
        subheading="Experience the vibrant culture, traditions, and spiritual celebrations of Bhutan in the Paro Festival."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={bumthangTourData} />
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
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <PolicyPage data={PolicyPageData} />
      </div>
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
