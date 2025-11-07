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
import { tourInfo, mockTourData, photoSets } from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";

export default function CultureMain() {
  const itineraryData = [
    {
      dayNumber: "Day 1",
      title: "Welcome Cocktail & Thai Dinner",
      bulletPoints: [
        "Arrive into <strong>Phuket Airport</strong> where a private <strong>Flash Pack transfer</strong> will be waiting to take you to the laid-back beach town of <strong>Khao Lak</strong>",
        "Arrive at your <strong>palm-fringed beachside hotel</strong> and settle in with a <strong>welcome cocktail and three-course Thai dinner</strong> as you get to know your fellow Flashpackers",
      ],
      leftImages: [
        { src: "/Bhutanese village.jpg", alt: "Group toasting" },
        { src: "/environment_B.jpg", alt: "Pool relaxation" },
      ],
      videoThumbnail: "/Beautiful Dzong.jpg",
      videoUrl: "https://www.youtube.com/embed/6lt2JfJdGSY", // Google Thailand promo video
    },
    {
      dayNumber: "Day 2",


      title: "Beach Adventure & Local Market",
      bulletPoints: [
        "Morning hike along the <strong>coastal cliffs</strong> with breathtaking views.",
        "Evening visit to the <strong>local market</strong> to try street food delicacies.",
      ],
      leftImages: [
        { src: "/beach_adventure.jpg", alt: "Beach adventure" },
        { src: "/market_visit.jpg", alt: "Market visit" },
      ],
      videoThumbnail: "/beach_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/5qap5aO4i9A](https://www.youtube.com/embed/5qap5aO4i9A)", // Lo-fi chill music as placeholder
    },
    {
      dayNumber: "Day 3",
      title: "Island Hopping & Snorkeling",
      bulletPoints: [
        "Full day <strong>island hopping tour</strong> visiting Phi Phi islands and Maya Bay.",
        "Snorkel in crystal-clear waters and spot vibrant marine life.",
      ],
      leftImages: [
        { src: "/island_hopping.jpg", alt: "Island tour" },
        { src: "/snorkeling.jpg", alt: "Snorkeling fun" },
      ],
      videoThumbnail: "/island_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/1roy4o4tqQM](https://www.youtube.com/embed/1roy4o4tqQM)", // Thailand islands travel video
    },
    {
      dayNumber: "Day 4",
      title: "Cooking Class & Cultural Walk",
      bulletPoints: [
        "Learn traditional Thai recipes in a <strong>hands-on cooking class</strong>.",
        "Explore <strong>local villages</strong> on a guided cultural walk.",
      ],
      leftImages: [
        { src: "/cooking_class.jpg", alt: "Cooking class" },
        { src: "/cultural_walk.jpg", alt: "Cultural walk" },
      ],
      videoThumbnail: "/cooking_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/3T3Svf5dnQo](https://www.youtube.com/embed/3T3Svf5dnQo)", // Thai cooking class video
    },
    {
      dayNumber: "Day 5",
      title: "Jungle Trek & Waterfall Swim",
      bulletPoints: [
        "Morning <strong>jungle trek</strong> through Khao Sok National Park.",
        "Swim in pristine waterfalls and enjoy a picnic lunch surrounded by nature.",
      ],
      leftImages: [
        { src: "/jungle_trek.jpg", alt: "Jungle trek" },
        { src: "/waterfall_swim.jpg", alt: "Waterfall swim" },
      ],
      videoThumbnail: "/jungle_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/7QUtEmBT_-w](https://www.youtube.com/embed/7QUtEmBT_-w)", // Travel nature video
    },
    {
      dayNumber: "Day 6",
      title: "Elephant Sanctuary & Sunset Cruise",
      bulletPoints: [
        "Visit an ethical <strong>elephant sanctuary</strong> and learn about conservation efforts.",
        "Evening <strong>sunset cruise</strong> along the Andaman Sea with cocktails.",
      ],
      leftImages: [
        { src: "/elephant_sanctuary.jpg", alt: "Elephant sanctuary" },
        { src: "/sunset_cruise.jpg", alt: "Sunset cruise" },
      ],
      videoThumbnail: "/elephant_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/kJQP7kiw5Fk](https://www.youtube.com/embed/kJQP7kiw5Fk)", // Thailand travel video
    },
    {
      dayNumber: "Day 7",
      title: "Farewell Brunch & Departure",
      bulletPoints: [
        "Enjoy a <strong>farewell brunch</strong> with your new friends.",
        "Private transfers to <strong>Phuket Airport</strong> for your departure.",
      ],
      leftImages: [
        { src: "/farewell_brunch.jpg", alt: "Farewell brunch" },
        { src: "/airport_transfer.jpg", alt: "Airport transfer" },
      ],
      videoThumbnail: "/farewell_video_thumbnail.jpg",
      videoUrl:
        "[https://www.youtube.com/embed/ScMzIvxBSi4](https://www.youtube.com/embed/ScMzIvxBSi4)", // Travel montage video
    },
  ];

  const PolicyPageData: PolicyPageData = {
    city: "Noriva",
    country: "Moliva",
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
      <Navbar />
      <Landing
        image="/Beautiful Dzong.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Hello this is the Festival of Bhutan"
        subheading="Experience the vibrant culture, traditions, and spiritual celebrations of Bhutan in the Paro Festival."
        Itinerary="Book us"
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
              {itineraryData.map((day, idx) => (
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
      <div>
        <TripsForFistTimer />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
