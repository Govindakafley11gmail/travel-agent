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

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival at Samdrup Jongkhar – Foothill Birding",
    subtitle: "Gentle Start & Subtropical Birding",
       leftImages: [
      { src: "/tashichho-dzong-it-was.jpg", alt: "Paro Airport Arrival" },
      { src: "/Green and lush land.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/The lake.jpg",
    content: `
      Arrive at Guwahati Airport (India) and drive to Samdrup Jongkhar (approx. 3 hours). 
      Complete immigration formalities and settle into your hotel.<br/><br/>
      Begin Eastern Bhutan birding with a gentle walk along the subtropical foothills. 
      Birding highlights include:<br/>
      • Great Hornbill, Wreathed Hornbill<br/>
      • Red Junglefowl, Blue-throated Barbet<br/>
      • Common Green Magpie, Large Niltava<br/>
      Enjoy the warm climate, lush forests, and first sightings of the expedition.<br/><br/>

     Overnight: Samdrup Jongkhar
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Samdrup Jongkhar – Deothang – Trashigang",
    subtitle: "Birding Through Mixed Broadleaf Forests",
       leftImages: [
      { src: "/bird2.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird3.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/birds3.jpg",
    content: `
      Full day of birding through mixed broadleaf forests en route to Trashigang. 
      Key species:<br/>
      • Rufous-necked Hornbill, Grey Peacock-Pheasant<br/>
      • Sultan Tit, Long-tailed Sibia<br/>
      • Rufous-bellied Eagle, Mountain Hawk Eagle<br/>
      Stop at streams and forest patches for photography.<br/><br/>

   Overnight: Trashigang
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Trashigang – Kanglung – Khaling National Park Zone",
    subtitle: "Rich Birdlife & Ethnic Villages",
       leftImages: [
      { src: "/bird4.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird6.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird5.jpg",
    content: `
      Explore the Khaling area with rich birdlife and serene forests. Target species include:<br/>
      • Beautiful Nuthatch (rare)<br/>
      • Ward’s Trogon<br/>
      • Chestnut-breasted Partridge<br/>
      • Black-headed Shrike Babbler<br/>
      Visit ethnically rich villages and enjoy views of terraced fields.<br/><br/>

    Overnight: Khaling / Trashigang
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Trashigang – Korila Pass – Mongar",
    subtitle: "Cool Temperate Forest Birding",
    leftImages: [
      { src: "/Beautiful Flower.jpg", alt: "Paro Airport Arrival" },
      { src: "/1ParoDzong.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/buddha.jpg",
    content: `
      Drive through Korila Pass with birding stops along cool temperate forests. Look for:<br/>
      • Satyr Tragopan<br/>
      • Blood Pheasant<br/>
      • Fire-tailed Myzornis<br/>
      • Yellow-billed Blue Magpie<br/>
      Evening stroll in Mongar town.<br/><br/>

     Overnight: Mongar
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Mongar – Yongkola",
    subtitle: "Birding Paradise of Bhutan",
    leftImages: [
      { src: "/airport.jpg", alt: "Paro Airport Arrival" },
      { src: "/Green and lush land.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/plane.jpg",
    content: `
      Descend to Yongkola, one of Asia’s most celebrated birding hotspots. 
      Notable species:<br/>
      • Rufous-throated Wren Babbler<br/>
      • Spotted Elachura<br/>
      • Golden-breasted Fulvetta<br/>
      • White-naped Yuhina<br/>
      • Himalayan Cutia<br/>
      Evening birding around the valley.<br/><br/>

     Overnight: Yongkola
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Full Day Birding – Yongkola to Lingmithang Stretch",
    subtitle: "Prime Birding Corridor",
     leftImages: [
      { src: "/why-us.jpg", alt: "Paro Airport Arrival" },
      { src: "/bridth.png", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/Yellow Field.jpg",
    content: `
      Dedicate the day to this prime birding corridor. Key species include:<br/>
      • Ward’s Trogon<br/>
      • Scarlet Finch<br/>
      • Maroon-backed Accentor<br/>
      • Red-headed Trogon<br/>
      • Black-throated Parrotbill<br/>
      Exceptional opportunities for photography.<br/><br/>

     Overnight: Yongkola
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Yongkola – Trashiyangtse",
    subtitle: "Birding En Route & Cultural Town",
      leftImages: [
      { src: "/kurje.jpg", alt: "Paro Airport Arrival" },
      { src: "/birds7.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/plane.jpg",
    content: `
      Drive toward Trashiyangtse with birding along cool forests and river valleys. Species to spot:<br/>
      • Speckled Wood Pigeon<br/>
      • Crested Serpent Eagle<br/>
      • Hoary-throated Barwing<br/>
      • Black Eagle<br/>
      Arrive in a quiet cultural town known for traditional crafts.<br/><br/>

     Overnight:Trashiyangtse
    `,
  },
  {
    dayNumber: "Day 8",
    title: "Trashiyangtse – Bumdeling Wildlife Sanctuary",
    subtitle: "Winter Migrants & Sanctuary Birding",
      leftImages: [
      { src: "/bird5.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird6.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird1.jpg",
    content: `
      Morning visit to Bumdeling Wildlife Sanctuary, a highlight for winter migrants. Possible sightings:<br/>
      • Black-necked Crane (seasonal)<br/>
      • Pallas’s Fish Eagle<br/>
      • Slender-billed Scimitar Babbler<br/>
      • Whistler’s Warbler<br/>
      Return to town in the evening.<br/><br/>

     Overnight: Trashiyangtse
    `,
  },
  {
    dayNumber: "Day 9",
    title: "Trashiyangtse – Trashigang – Samdrup Jongkhar",
    subtitle: "Birding En Route & Wrap-Up",
      leftImages: [
      { src: "/bird3.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird4.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird2.jpg",
    content: `
      Drive back slowly with birding stops along the way. Ideal for spotting any species missed earlier.<br/><br/>

     Overnight: Samdrup Jongkhar
    `,
  },
  {
    dayNumber: "Day 10",
    title: "Departure from Samdrup Jongkhar",
    subtitle: "Farewell to Eastern Bhutan",
    
    content: `
      After breakfast, conclude your Eastern Bhutan Birding Expedition. 
      Drive to Guwahati (India) for your outbound journey.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      Carry with you the serenity of Bhutan’s valleys, the warmth of its people, 
      and the timeless beauty of its mountains and monasteries. 
      These memories will call you back to the Land of Thunder Dragon soon!
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
        image="/bird4.jpg"
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
        <TourAbout data={easternbhutanbirdsData} />
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
