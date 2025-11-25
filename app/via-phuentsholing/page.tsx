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
import { tourInfo, mockTourData, photoSets, newTourPackageData, viaPhuentsholingBhutanData } from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Phuentsholing",
    subtitle: "Welcome to Bhutan",
    leftImages: [
      { src: "/terminal.jpg", alt: "Paro Airport Morning" },
      { src: "/bhutan-dance.jpg", alt: "Paro Valley View" }
    ],
    rightImage: "/bfast.jpg",
    content: `

      Welcome to Bhutan! Complete immigration formalities at the border and check into your hotel. 
      Explore the charming town of Phuentsholing and visit Zangto Pelri Lhakhang, a peaceful temple 
      representing Guru Rinpoche’s celestial paradise.<br/><br/>

     Overnight in Phuentsholing.
    `,
  },

  {
    dayNumber: "Day 2",
    title: "Phuentsholing ➝ Thimphu",
    subtitle: "Scenic Drive to the Capital",
    leftImages: [
      { src: "/Kharbandi-Goemba.jpg", alt: "Paro Airport Morning" },
      { src: "/Kharbandi-Monastery-2.jpg", alt: "Paro Valley View" }
    ],
    rightImage: "/gate.jpg",
    content: `
      Begin your scenic drive to the capital city, ascending from subtropical greenery into cool mountain landscapes. 
      En route, stop at <strong>Kharbandi Gompa</strong>, offering panoramic views of the Indian plains below.<br/>
      Arrive in Thimphu and enjoy an evening stroll through lively markets and cafés.<br/><br/>

    Overnight in Thimphu.
    `,
  },

  {
    dayNumber: "Day 3",
    title: "Thimphu Sightseeing",
    subtitle: "Cultural Exploration",
    leftImages: [
      { src: "/airport.jpg", alt: "Paro Airport Morning" },
      { src: "/bhutannesdish.jpg", alt: "Paro Valley View" }
    ],
    rightImage: "/Gedu-Town.jpg",
    content: `
      Discover Bhutan’s unique blend of tradition and modernity with a full city tour:<br/>
      • Memorial Chorten – a revered religious monument<br/>
      • Buddha Dordenma – a towering Buddha statue overlooking the valley<br/>
      • Takin Preserve – meet Bhutan’s national animal<br/>
      • Simply Bhutan Museum – an interactive cultural experience<br/>

      Enjoy the rest of the evening at leisure.<br/><br/>

      Overnight in Thimphu.
    `,
  },

  {
    dayNumber: "Day 4",
    title: "Thimphu ➝ Punakha via Dochula Pass",
    subtitle: "Mountain Pass & Valley Journey",
    leftImages: [
      { src: "/Paddy field.jpg", alt: "Paro Airport Morning" },
      { src: "/paroresort.jpg", alt: "Paro Valley View" }
    ],
    rightImage: "/monestary.jpg",
    content: `
      Travel to Punakha through the stunning Dochula Pass, adorned with 108 Druk Wangyal chortens 
      and dramatic Himalayan vistas on clear days.<br/>

      Highlights in Punakha:<br/>
      • Punakha Dzong – one of Bhutan’s most magnificent fortresses<br/>
      • Punakha Suspension Bridge – among the longest in the country<br/>

      Optional: Take a gentle walk to Chimi Lhakhang, the temple of fertility.<br/><br/>

      Overnight in Punakha.
    `,
  },

  {
    dayNumber: "Day 5",
    title: "Punakha ➝ Paro",
    subtitle: "Historic Fortresses & Museum",
    leftImages: [
      { src: "/college.jpg", alt: "Paro Airport Morning" },
      { src: "/cheri-gompa-thimphu-bhutan.jpg", alt: "Paro Valley View" }
    ],
    rightImage: "/hotel-exterior-bang-in.jpg",
    content: `
      Drive to Paro following scenic river valleys and countryside. Upon arrival, explore:<br/>
      • Rinpung Dzong – a historic fortress-monastery<br/>
      • Ta Dzong – home to the National Museum<br/>
      In the evening, enjoy a relaxed walk around Paro town with a view of Rinpung Dzong from the bridge area.<br/><br/>

   Overnight in Paro.
    `,
  },

  {
    dayNumber: "Day 6",
    title: "Tiger’s Nest Monastery Hike",
    subtitle: "Taktsang Experience",
    leftImages: [
      { src: "/buddha.jpg", alt: "Paro Airport Morning" },
      { src: "/buddha.png", alt: "Paro Valley View" }
    ],
    rightImage: "/gangty-valley.jpg",
    content: `
      Experience the spiritual and scenic highlight of your Bhutan journey — a hike to the legendary 
      Taktsang Monastery, perched dramatically on a cliff at 3,120m. The hike offers breathtaking valley 
      views and a rewarding cultural experience.<br/>
      Optional afternoon activities:<br/>
      • Traditional hot stone bath<br/>
      • Local farmhouse visit<br/>
      • Shopping and leisure time in Paro town<br/><br/>

      Overnight in Paro
    `,
  },

  {
    dayNumber: "Day 7",
    title: "Departure",
    subtitle: "Farewell Bhutan",
  
    content: `
      Transfer to Paro International Airport for your onward journey or drive back to Phuentsholing 
      if exiting by road.<br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, 
      and the timeless beauty of its mountains and monasteries.<br/>

      Though your journey may end for now, the memories and experiences will linger, 
      calling you back to the Land of Thunder Dragon soon!<br/>

      <strong>Tour Style:</strong> Standard / Comfort — accommodations, comfortable transport & authentic experiences.<br/>
      <strong>Year-Round Availability:</strong><br/>
      • Spring (Mar–May): Blooming landscapes<br/>
      • Autumn (Sep–Nov): Clear skies<br/>
      • Winter (Dec–Feb): Fewer tourists<br/><br/>
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
        image="/Kharbandi-Monastery-2.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Bhutan Overland Tour from Phuentsholing"
        subheading="Enjoy easy walks, interactive cultural visits, gentle outdoor adventures, and plenty of time for bonding and relaxation."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={viaPhuentsholingBhutanData} />
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
