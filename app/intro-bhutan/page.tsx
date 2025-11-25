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
  introBhutanData,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
  const itinerary = [
    {
      dayNumber: "Day 1",
      title: "Arrival in Paro – Drive to Thimphu",
      subtitle: "",
      leftImages: [
        { src: "/bhutanese food.jpg", alt: "Paro Airport" },
        { src: "/blue-temple-paro.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/bridth.png",
      content: `
      Upon arrival at Paro International Airport, you will be welcomed by your guide with a traditional khadar (white scarf) marking the start of your Bhutanese journey. 
      Begin with a scenic drive to Thimphu, stopping at the historic Tachogang Bridge, the first iron bridge built by Bhutan’s legendary “Iron Bridge Maker,” Thangtong Gyalpo. 
      After settling in, enjoy a leisurely stroll through Thimphu town before ending the day with a traditional Bhutanese dinner accompanied by an introduction to local dining etiquette.<br/><br/>
      Overnight in Thimphu (3-star hotel/resort).
    `,
    },
    {
      dayNumber: "Day 2",
      title: "Thimphu Sightseeing & Cultural Immersion",
      subtitle: "",
      leftImages: [
        { src: "/best-of-bhutan-tour70.jpg", alt: "Paro Airport" },
        { src: "/archery.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/baa.jpg",
      content: `
      Start the morning with a visit to the magnificent Buddha Dordenma Statue, offering panoramic views of the valley, followed by the lively Memorial Chorten, where locals gather for daily prayers. 
      Continue to the Motithang Takin Preserve to meet Bhutan’s national animal—the takin—before exploring the interactive Simply Bhutan Museum, where you can try archery, dress in traditional attire, and taste butter tea. 
      In the afternoon, walk through the bustling Centenary Farmer’s Market to experience Bhutan’s food culture firsthand. 
      Conclude the day with a captivating cultural performance featuring traditional folk songs and mask dances.<br/><br/>
      Overnight in Thimphu.
    `,
    },
    {
      dayNumber: "Day 3",
      title: "Thimphu → Phobjikha – Nature & Farmstay Experience",
      subtitle: "",
      leftImages: [
        { src: "/Phobjikha-Valley.jpg", alt: "Paro Airport" },
        { src: "/Bhutan-Adventure.png", alt: "Farewell Bhutan" },
      ],
      rightImage: "/land.jpg",
      content: `
      Depart Thimphu and ascend to the iconic Dochula Pass (3,100m), adorned with 108 chortens and offering spectacular Himalayan vistas. 
      Continue your journey to the enchanting Phobjikha Valley, a glacial bowl known for its serene beauty and as the winter home of the endangered black-necked cranes (seasonal). 
      In the evening, settle into a traditional Bhutanese farmhouse for an immersive rural stay—cook local dishes with your host family, learn about farming and animal husbandry, and opt for a rejuvenating hot stone bath.<br/><br/>
      Overnight in Phobjikha (Farmstay).
    `,
    },
    {
      dayNumber: "Day 4",
      title: "Phobjikha – Punakha – Paro",
      subtitle: "",
      leftImages: [
        { src: "/bhutan hotel phobjikha gangtey.png", alt: "Paro Airport" },
        { src: "/PHOBJIKHA-VALLEY (1).jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/Bhutan-Featured-3.png",
      content: `
      Begin the morning with a peaceful valley walk through Phobjikha’s vast farmlands and scenic nature trails. 
      Drive toward Punakha and visit the stunning Punakha Dzong, dramatically situated at the confluence of the Pho Chhu and Mo Chhu rivers. 
      Continue with a short and picturesque hike to Chimi Lhakhang, the Fertility Temple, passing through charming village houses and paddy fields. 
      Afterward, enjoy a scenic drive back to Paro via Dochula Pass, with a refreshing nature stop at the Royal Botanical Park in Lamperi. 
      In the evening, enjoy a heartwarming farewell dinner with a Bhutanese family in a traditional farmhouse.<br/><br/>
      Overnight in Paro.
    `,
    },
    {
      dayNumber: "Day 5",
      title: "Hike to Taktsang (Tiger’s Nest Monastery)",
      subtitle: "",
      leftImages: [
        { src: "/Bhutanese village.jpg", alt: "Paro Airport" },
        { src: "/food.jpg", alt: "Farewell Bhutan" },
      ],
      rightImage: "/kurje.jpg",
      content: `
      Start early for the iconic hike to Taktsang Monastery, Bhutan’s most sacred landmark, perched dramatically on a cliffside. 
      The 4 to 5-hour round-trip hike rewards you with incredible views and a profound spiritual atmosphere. 
      Enjoy lunch at the base of Taktsang with uninterrupted views of the monastery. 
      In the afternoon, explore Paro Dzong, one of Bhutan’s most picturesque fortresses, before taking a leisurely stroll through Paro town to shop for souvenirs or relax at a local café.<br/><br/>
      Overnight in Paro.
    `,
    },
    {
      dayNumber: "Day 6",
      title: "Departure from Bhutan",
      subtitle: "",
      leftImages: [],
      rightImage: "",
      content: `
      After breakfast, your guide will accompany you to Paro International Airport for your departure. 
      With a heartfelt Tashi Delek, bid farewell to Bhutan and carry home beautiful memories of culture, nature, and warm Bhutanese hospitality.<br/><br/>
     <strong> Until Next Time</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. 
      Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
    },
  ];

  // const PolicyPageData: PolicyPageData = {
  //   city: "Thimphu",
  //   country: "Bhutan",
  //   highlights: [
  //     {
  //       title: "Thimphu City Exploration",
  //       description:
  //         "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
  //       icon: Check,
  //       color: "text-[#00A651]",
  //     },
  //     {
  //       title: "Cultural Immersion",
  //       description:
  //         "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
  //       icon: X,
  //       color: "text-red-500",
  //     },
  //   ],
  // };

  return (
    <main className="w-full h-full">
      <Landing
        image="/The Dzong.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Intro Bhutan Tour"
        subheading="The Intro Bhutan Tour is a compact yet enriching journey designed for first-time visitors seeking a meaningful taste of Bhutan."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={introBhutanData} />
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
