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

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
  const itinerary = [
    {
      dayNumber: "Day 1",
      title: "Arrival in Paro – Welcome to the Land of Happiness",
      subtitle: "Introduction to Bhutanese Cuisine & Culture",
      leftImages: [
        { src: "/cul1.jpg", alt: "Paro Airport Arrival" },
        { src: "/cul2.jpg", alt: "Riverbank Birding Walk" }
      ],
      rightImage: "/cul3.jpg",
      content: `

      Arrive at Paro International Airport, greeted by our Lumora Tours and Travels representative. 
      Begin your Bhutanese journey with a scenic drive to the hotel, followed by a traditional welcome lunch featuring Ema Datshi, Sikam Paa, and Jasha Maru.<br/>

      In the afternoon, explore Paro Dzong and stroll across its traditional wooden bridge. 
      Later, visit the lively old Paro town for local snacks and tea.<br/><br/>

  Overnight:Paro
    `,
    },
    {
      dayNumber: "Day 2",
      title: "Paro – Heritage Walk & Farm-to-Table Experience",
      subtitle: "Cultural Insights & Culinary Immersion",
      leftImages: [
        { src: "/cul4.jpg", alt: "Paro Airport Arrival" },
        { src: "/cul5.jpg", alt: "Riverbank Birding Walk" }
      ],
      rightImage: "/cul6.jpg",
      content: `

      Morning guided visit to the National Museum to explore Bhutan's cultural artifacts, followed by a visit to Kyichu Lhakhang, one of Bhutan’s oldest temples.<br/>

      In the afternoon, transfer to a local farmhouse for an immersive farm-to-table session. Learn to prepare classic Bhutanese dishes like Hoentey (buckwheat dumplings) and Ezay (spicy salsa), followed by a homemade organic dinner. Optional traditional hot-stone bath can be arranged.<br/>
<br/>
      Overnight: Paro
    `,
    },
    {
      dayNumber: "Day 3",
      title: "Paro to Thimphu – Cooking Demonstration & City Exploration",
      subtitle: "Hands-On Culinary Experience & City Tour",
      leftImages: [
        { src: "/cul7.jpg", alt: "Paro Airport Arrival" },
        { src: "/cul8.jpg", alt: "Riverbank Birding Walk" }
      ],
      rightImage: "/cul9.jpg",
      content: `

      Drive to Thimphu, Bhutan’s capital. Participate in a cooking demonstration led by a local chef, learning Bhutanese spices and traditional methods. Enjoy a lunch prepared together.<br/>

      Afternoon exploration of Thimphu’s attractions: Buddha Dordenma, Memorial Chorten, and Centenary Farmer’s Market for local ingredients and seasonal produce.<br/>
<br/>
     Overnight: Thimphu
    `,
    },
    {
      dayNumber: "Day 4",
      title: "Thimphu to Punakha – Scenic Drive & Traditional Cuisine",
      subtitle: "Himalayan Views & Cultural Immersion",
      leftImages: [
        { src: "/cul10.jpg", alt: "Paro Airport Arrival" },
        { src: "/cul1.jpg", alt: "Riverbank Birding Walk" }
      ],
      rightImage: "/cul12.jpg",
      content: `

      Drive over Dochula Pass (3,100m) and enjoy Himalayan views with butter tea and local snacks. Visit Punakha Dzong at the confluence of two rivers.<br/>

      Lunch features western Bhutanese specialties: Khur-le (pancakes), Puta (buckwheat noodles), and local vegetables. Evening walk to Chimi Lhakhang, the Temple of Fertility.<br/><br/>

     Overnight: Punakha
    `,
    },
    {
      dayNumber: "Day 5",
      title: "Punakha to Paro – Culinary Walk & Bhutanese Dinner Feast",
      subtitle: "Explore Local Eateries & Enjoy Regional Delicacies",

      content: `

      Return to Paro with scenic stops along the way. Explore local eateries, tea shops, and spice stalls during a curated culinary walk.<br/>

      Evening Bhutanese dinner feast featuring Shakam Datshi, Puta, Hogay salad, and seasonal vegetables, accompanied by local herbal tea or ara (optional).<br/><br/>

    Overnight: Paro
    `,
    },
    {
      dayNumber: "Day 6",
      title: "Departure",
      subtitle: "Farewell to Bhutan",

      content: `

      Transfer to Paro International Airport for onward journey. Your guide bids you farewell with warm Bhutanese hospitality.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      Carry with you the serenity of Bhutan’s valleys, the warmth of its people, 
      and the timeless beauty of its mountains and monasteries. The memories and experiences will linger, calling you back to the Land of Thunder Dragon soon!
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
        heading="Bhutan Culture and Gastronomy Tour"
        subheading="Tour invites you to experience the kingdom’s timeless heritage, sacred monasteries, and vibrant culinary traditions."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={culturegastronomyData} />
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
