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
import { tourInfo, mockTourData, photoSets, newTourPackageData, eaternBhutanData, HoneymoonData } from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
  const itinerary = [
    {
      dayNumber: "Day 1",
      title: "Arrival in Paro & Transfer to Thimphu",
      subtitle: "",
      leftImages: [
        { src: "/honeymoon.jpg", alt: "Paro International Airport" },
        { src: "/tigers-nest-path.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/thimphudzong.jpg",
      videoUrl: "",
      content: `
      Your Bhutan honeymoon begins the moment you land at Paro International Airport, where you will be received with a warm traditional welcome. A scenic drive to Thimphu introduces you to Bhutan's peaceful landscapes and fresh mountain air. After check-in, enjoy a gentle evening stroll around the Clock Tower area before a specially arranged honeymoon welcome dinner.
    `,
    },
    {
      dayNumber: "Day 2",
      title: "Romantic Discovery of Thimphu",
      subtitle: "",
      leftImages: [
        { src: "/cheri-gompa-thimphu-bhutan.jpg", alt: "Paro International Airport" },
        { src: "/NearPobjikha.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/Memorial_Chorten_Bhutan.jpg",
      videoUrl: "",
      content: `
      Start your day with a visit to Buddha Dordenma, offering panoramic valley view's perfect for couple photography. Continue to the Simply Bhutan Museum for an interactive cultural experience, followed by a visit to the Takin Preserve. The evening is kept relaxed, giving you time for café hopping or an optional couple's spa treatment to end the day in comfort.
    `,
    },
    {
      dayNumber: "Day 3",
      title: "Scenic Drive to Punakha",
      subtitle: "",
      leftImages: [
        { src: "/dochulapass.jpg", alt: "Paro International Airport" },
        { src: "/drukasia.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/Kichu-Lhakang.jpg",
      videoUrl: "",
      content: `
      After breakfast, journey toward Punakha via the stunning Dochula Pass, adorned with 108 chortens and breathtaking Himalayan views. Upon arrival, explore the majestic Punakha Dzong, one of Bhutan's most beautiful fortresses. Later, enjoy a romantic walk across the long Suspension Bridge and end the day with a peaceful riverside sunset stroll.
    `,
    },
    {
      dayNumber: "Day 4",
      title: "Punakha to Phobjikha Valley",
      subtitle: "",
      leftImages: [
        { src: "/land.jpg", alt: "Paro International Airport" },
        { src: "/jakar.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/Kharbandi-Goemba.jpg",
      videoUrl: "",
      content: `
      Begin the day with a visit to Chimi Lhakhang, the Temple of Fertility, where couples often receive special blessings. Continue your drive to the serene Phobjikha Valley, a pristine glacial basin known for its quiet beauty. Explore Gangtey Monastery before enjoying a relaxing nature walk along the Gangtey Trail. A cozy evening at a warm lodge completes this perfect honeymoon day.
    `,
    },
    {
      dayNumber: "Day 5",
      title: "Phobjikha to Paro",
      subtitle: "",
      leftImages: [
        { src: "/hotel.jpg", alt: "Paro International Airport" },
        { src: "/jakardzong.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/jambay.jpg",
      videoUrl: "",
      content: `
      After a tranquil morning in Phobjikha, begin your drive back to Paro. En route, stop at Tagchog Lhakhang, where you can cross the traditional iron chain bridge crafted by the famed bridge builder, Thangtong Gyalpo. Upon arrival in Paro, visit Rinpung Dzong, one of Bhutan's most iconic fortresses, admired for its traditional architecture and stunning location above the river. In the evening, enjoy a leisurely walk-through Paro town—exploring cafés, boutiques, and viewpoints offering beautiful twilight scenes of the dzong illuminated against the mountains.
    `,
    },
    {
      dayNumber: "Day 6",
      title: "Hike to Tiger's Nest & Traditional Hot Stone Bath",
      subtitle: "",
      leftImages: [
        { src: "/The Dzong.jpg", alt: "Paro International Airport" },
        { src: "/The archeticture.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/thimphu-dzong.jpg",
      videoUrl: "",
      content: `
      Your day begins with a hike to the legendary Tiger's Nest (Taktsang Monastery), Bhutan's most celebrated spiritual landmark. A private picnic can be arranged along the trail for an intimate moment together. Later in the evening, unwind with a romantic traditional hot stone bath—one of Bhutan's most soothing wellness experiences.

Optional Add-On: Haa Valley or Gasa Hot Spring
• Haa Valley: Enjoy a peaceful day trip across Chelela Pass, stopping for spectacular mountain views and prayer flag photography. Explore the tranquil villages and cultural sites of Haa Valley.
• Gasa Hot Spring: Indulge in natural hot spring pools followed by a private hot stone bath—ideal for wellness, relaxation, and rejuvenation.
    `,
    },
    {
      dayNumber: "Day 7",
      title: "Departure from Paro",
      subtitle: "",
      leftImages: [
        { src: "/town.jpg", alt: "Paro International Airport" },
        { src: "/thunderdragon.jpg", alt: "Kyichu Lhakhang Temple" },
      ],
      rightImage: "/Yellow Field.jpg",
      videoUrl: "",
      content: `
      After a leisurely breakfast, you will be transferred to Paro International Airport for your onward journey. Depart with cherished memories of a serene and romantic honeymoon in Bhutan.

Until Next Time:
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
     <strong> ✨ Why Choose This Tour?</strong> <br/>

This tour is designed for travelers who want more than sightseeing. It creates space for genuine human connection, meaningful cultural experiences, and a deeper appreciation of Bhutan's way of life. From intimate homestays to hands-on village activities, every moment offers insight into the traditions that define Bhutan. <br/>

<strong> 🏷️ Tour Style </strong><br/>
Standard / Comfort <br/>
Thoughtfully curated accommodations, comfortable transportation, and authentic cultural experiences designed for meaningful, mindful travel. <br/>
<strong> 📌 Year-Round Availability</strong>  <br/>
Spring (March–May): Blooming landscapes, ideal weather <br/>
Autumn (September–November): Clear skies & beautiful colors <br/>
Winter (December–February): Crisp air, peaceful villages, fewer tourists <br/>
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
        image="/cheri-gompa-thimphu-bhutan.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Adventure Honeymoon in Bhutan Tour"
        subheading="Embark on a romantic honeymoon journey through Bhutan’s most enchanting valleys."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={HoneymoonData} />
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
