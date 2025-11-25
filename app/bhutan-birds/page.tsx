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

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro – Transfer to Thimphu",
    subtitle: "Arrival & Warm-Up Birding Walk",
    leftImages: [
      { src: "/bird9.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird10.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird11.jpg",
    content: `

      Arrive at Paro International Airport and transfer to Thimphu.<br/>
      Depending on arrival time, enjoy a warm-up birding walk along the riverbanks, where you may spot:<br/>
      • Ibisbill<br/>
      • White-capped Water Redstart<br/>
      • Plumbeous Water Redstart<br/><br/>

      <strong>Overnight:</strong> Thimphu
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu Birding & Valley Exploration",
    subtitle: "Forest Birding & Cultural Visits",
   leftImages: [
      { src: "/bird13.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird14.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird15.jpg",
    content: `

      Begin the day with birding in forested areas around Thimphu, ideal for spotting:<br/>
      • Spotted Laughingthrush<br/>
      • Rufous-breasted Accentor<br/>
      • Himalayan Buzzard<br/>
      • Brown Dipper<br/>

      Later, enjoy a short cultural visit to key sites like Kuenselphodrang (Buddha Point) or the Folk Heritage Museum.<br/><br/>

     Overnight: Thimphu
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Thimphu – Punakha via Dochula Pass",
    subtitle: "High-Altitude & Valley Birding",
    leftImages: [
      { src: "/bird1.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird17.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird16.jpg",
    content: `

      Drive towards Punakha, stopping at Dochula Pass, a hotspot for high-altitude species:<br/>
      • Fire-tailed Myzornis<br/>
      • Satyr Tragopan<br/>
      • Golden-breasted Fulvetta<br/>
      • Blood Pheasant (seasonal)<br/>

      Descend into Punakha’s warmer valley for birding along riverbanks and paddy fields.<br/><br/>

      Overnight: Punakha
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Punakha Birding",
    subtitle: "Riverside Birdwatching & Cultural Visits",
    leftImages: [
      { src: "/bird2.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird3.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird17.jpg",
    content: `

      Early morning birding along the Pho Chhu and Mo Chhu rivers. Target species include:<br/>
      • White-bellied Heron (extremely rare)<br/>
      • Pallas’s Fish Eagle<br/>
      • River Lapwing<br/>
      • Crested Kingfisher<br/>

      In the afternoon, enjoy a short visit to Punakha Dzong or nearby villages.<br/><br/>

    Overnight: Punakha
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Punakha – Phobjikha Valley",
    subtitle: "Black-necked Crane & Wetlands",
    leftImages: [
      { src: "/bird4.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird5.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird11.jpg",
    content: `

      Travel to the glacial Phobjikha Valley, winter home of the Black-necked Crane.<br/>
      Other birds include:<br/>
      • Himalayan Griffon<br/>
      • Black Kite<br/>
      • Spotted Nutcracker<br/>
      • Red-billed Chough<br/>

      Enjoy a nature walk through the valley’s protected wetlands.<br/><br/>

      Overnight: Phobjikha
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Phobjikha – Trongsa – Bumthang",
    subtitle: "Mixed Forest Birding on the Way",
    leftImages: [
      { src: "/bird6.jpg", alt: "Paro Airport Arrival" },
      { src: "/birds7.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird14.jpg",
    content: `

      Drive through mixed forests and high passes toward Trongsa and Bumthang, 
      with birding stops along the way. Possible sightings:<br/>
      • Great Barbet<br/>
      • Grey-sided Laughingthrush<br/>
      • Ward’s Trogon (rare)<br/>
      • Chestnut-bellied Nuthatch<br/><br/>

      Overnight:Bumthang
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Bumthang Birding & Cultural Exploration",
    subtitle: "Valley Birding & Monastery Visits",
    leftImages: [
      { src: "/birds3.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird2.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird8.jpg",
    content: `

      Full-day birding in the beautiful valleys of Bumthang. Likely species:<br/>
      • Red-headed Bullfinch<br/>
      • Koklass Pheasant<br/>
      • White-browed Fulvetta<br/>

      Optional visits to Jambay Lhakhang or Kurjey Monastery.<br/><br/>

     Overnight: Bumthang
    `,
  },
  {
    dayNumber: "Day 8",
    title: "Bumthang – Yongkola",
    subtitle: "Bhutan’s Birding Capital",
 leftImages: [
      { src: "/bird01.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird02.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird03.jpg",
    content: `

      Drive to Yongkola, considered the best birding hotspot in Bhutan. 
      Dense forests, steep slopes, and rich biodiversity make it ideal for rare species:<br/>
      • Beautiful Nuthatch<br/>
      • Scarlet Finch<br/>
      • Rufous-necked Hornbill<br/>
      • White-gorgeted Flycatcher<br/><br/>

     Overnight: Yongkola
    `,
  },
  {
    dayNumber: "Day 9",
    title: "Full Day Birding in Yongkola",
    subtitle: "Mid-Elevation Forests",
  leftImages: [
      { src: "/bird04.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird05.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird06.jpg",
    content: `

      Spend the day exploring bird-rich mid-elevation forests. Possible sightings:<br/>
      • Himalayan Cutia<br/>
      • Sikkim Wedge-billed Babbler<br/>
      • Satyr Tragopan<br/>
      • Grey-chinned Minivet<br/>

      Ideal for bird photography.<br/><br/>

     Overnight:Yongkola
    `,
  },
  {
    dayNumber: "Day 10",
    title: "Second Full Day in Yongkola",
    subtitle: "Mid-Elevation Forest Birding",
  leftImages: [
      { src: "/bird07.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird08.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird09.jpg",
    content: `

      Continue exploring the rich forests of Yongkola for rare and endemic species.<br/>
      Perfect for birdwatching and photography.<br/><br/>

      Overnight: Yongkola
    `,
  },
  {
    dayNumber: "Day 11",
    title: "Return to Paro (Flight or Drive)",
    subtitle: "Birding Stops Along the Way",
     leftImages: [
      { src: "/bird010.jpg", alt: "Paro Airport Arrival" },
      { src: "/bird111.jpg", alt: "Riverbank Birding Walk" }
    ],
    rightImage: "/bird112.jpg",
    content: `

      Depending on tour preference:<br/>
      • Domestic flight from Bumthang to Paro, or<br/>
      • Scenic drive back with birding stops.<br/>

      Rest and enjoy an easy walk in Paro town.<br/><br/>

      Overnight:Paro
    `,
  },
  {
    dayNumber: "Day 12",
    title: "Departure",
    subtitle: "Farewell to Bhutan",
    
    content: `

      Transfer to Paro International Airport for your onward journey. 
      Your guide will bid you farewell with warm Bhutanese hospitality.<br/><br/>

      <strong>Best Seasons for Birding in Bhutan:</strong><br/>
      • Spring (March–May): Peak season, breeding plumage, high diversity<br/>
      • Autumn (September–November): Clear skies, migratory species<br/>
      • Winter (December–February): Best for Black-necked Cranes and high-altitude species
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
        <TourAbout data={birdsData} />
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
