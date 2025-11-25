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
  oneWeekInBhutan,

} from "@/data/paro-places-data";
import { Check, Flame, MapPin, Mountain, Tent, Wind, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
 const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival",
    subtitle: "Arrival and Acclimatization",
    leftImages: [
      { src: "/gangty-valley.jpg", alt: "Paro Valley" },
      { src: "/Green and lush land.jpg", alt: "Paro International Airport" },
    ],
    rightImage: "/greenary_view.jpg",
    videoUrl: "https://www.youtube.com/embed/MbszG6P6U0I",
    content: `
      <strong>Arrival at Paro International Airport</strong><br/>
      Land in the scenic Paro Valley, greeted by the crisp Himalayan air and stunning mountain vistas. Paro International Airport, perched at an altitude of about 2,235 meters above sea level (masl), offers one of the most breathtaking landings in the world, embracing travelers with a spectacular introduction to your Bhutanese adventure.<br/><br/>

      <strong>Routine Immigration and Customs</strong><br/>
      Complete standard entry formalities with ease at the airport. Once outside, your guide will warmly welcome you and accompany you as you step into the serene and culturally rich kingdom of Bhutan.<br/><br/>

      <strong>Travel to the Hotel</strong><br/>
      Journey from Paro to Thimphu, enjoying picturesque landscapes, terraced fields, and traditional villages along the way. Upon arrival in Thimphu, check into your hotel and refresh yourself before enjoying a welcome tea and lunch.<br/><br/>

      <strong>Lunch at Local Restaurant & Sightseeing</strong><br/>
      Savor your first taste of Bhutanese cuisine with a carefully curated selection of local dishes, featuring both vegetarian and non-vegetarian delights. In the afternoon, set out on a guided tour of Thimphu, exploring iconic landmarks such as the Buddha Dordenma Statue, Tashichho Dzong, and the bustling Thimphu Market—a wonderful introduction to the kingdom’s vibrant culture, spiritual heritage, and everyday life.<br/><br/>

      <strong>Evening in Thimphu with Dinner and Overnight Stay</strong><br/>
      <strong>Evening at Leisure:</strong> Unwind at your own pace and soak in the charm of Paro. Take a stroll along the town’s main street, where quaint cafes, local shops, and vibrant stalls offer an array of handicrafts and traditional Bhutanese treasures.<br/>
      <strong>Dinner:</strong> End your day with a sumptuous dinner at your hotel, offering a selection of Bhutanese, Indian, and international dishes to delight your palate.<br/>
      <strong>Overnight Stay:</strong> Retire for the night and recharge, as tomorrow promises an unforgettable adventure to one of Bhutan’s most iconic and breathtaking landmarks, the Tiger’s Nest Monastery.
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Travel to Phobjikha Valley – En Route Dochula Pass and Lam Peri Botanical Park",
    subtitle: "Scenic Journey and Cultural Exploration",
    leftImages: [
      { src: "/dochulapass.jpg", alt: "Dochula Pass" },
      { src: "/dochula-pass2.jpg", alt: "Lamperi Botanical Park" },
    ],
    rightImage: "/Fallow Land.jpg",
    videoUrl: "",
    content: `
      <strong>Breakfast at the Hotel:</strong><br/>
      Enjoy a wholesome breakfast with a choice of Bhutanese specialties or continental favorites, accompanied by butter tea or freshly brewed coffee to start your day energized.<br/><br/>

      <strong>Travel to Phobjikha Valley – En Route Dochula Pass and Lam Peri Botanical Park:</strong><br/>
      A scenic drive to Phobjikha Valley offers stunning Himalayan views from Dochula Pass, where 108 chortens symbolize peace and stability. En route, the Lamperi Botanical Park showcases Bhutan’s rich biodiversity with its serene lake and rhododendron gardens. The journey ends in the tranquil Phobjikha Valley, home to the graceful black-necked cranes and the historic Gangtey Monastery, reflecting Bhutan’s harmony between nature and culture.<br/><br/>

      <strong>Lunch at Lamperi Botanical Park:</strong><br/>
      En route, enjoy an arranged lunch at Lamperi Botanical Park, surrounded by lush forests, a serene lake, and vibrant rhododendron gardens showcasing Bhutan’s rich biodiversity.<br/><br/>

      <strong>Overnight at Phobjikha:</strong><br/>
      Savor a warm Bhutanese dinner prepared with fresh local ingredients while soaking in the valley’s calm and scenic beauty. Spend the night in Phobjikha Valley, choosing between a cozy local homestay for an authentic cultural experience or a comfortable hotel offering modern amenities amidst the serene mountain landscape.
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Sightseeing in Phobjikha Valley",
    subtitle: "Nature and Cultural Experiences",
    leftImages: [
      { src: "/Chimi_Lhakhang,_Bhutan_05.jpg", alt: "Gangtey Monastery" },
      { src: "/Beautiful Flower.jpg", alt: "Black-Necked Cranes" },
    ],
    rightImage: "/Bhutanese village.jpg",
    videoUrl: "",
    content: `
      <strong>Breakfast at Homestay or Hotel:</strong><br/>
      Begin your day with a hearty Bhutanese or continental breakfast, enjoyed with views of the peaceful Phobjikha Valley. Whether at a local homestay with traditional hospitality or a hotel offering comfort and warmth, it’s a refreshing start to your morning in the highlands.<br/><br/>

      <strong>Exploring the Ramsar site and Gangtey Valley:</strong><br/>
      Discover the pristine beauty of Gangtey Valley, a designated Ramsar wetland site known for its rich biodiversity and as the winter home of the black-necked cranes.<br/>
      • Visit the historic Gangtey Monastery (Gangtey Goenpa), one of Bhutan’s most important Nyingma monasteries.<br/>
      • Enjoy the Gangtey Nature Trail Hike (approx. 2 hrs), passing through villages, meadows, and forests.<br/>
      • Visit the Black-Necked Crane Information Centre to learn about these graceful migratory birds (best in winter).<br/>
      • Optional farm visit or archery experience with locals.<br/><br/>

      <strong>Outdoor Lunch:</strong><br/>
      Enjoy a scenic outdoor lunch amidst the lush meadows and tranquil surroundings of Gangtey Valley. Relish fresh local cuisine while soaking in panoramic views of the valley, mountains, and the gentle movements of the black-necked cranes, making it a truly memorable dining experience in nature.
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Travel to Punakha – Sightseeing in Punakha",
    subtitle: "Historical and Spiritual Sights",
    leftImages: [
      { src: "/Beautiful Dzong.jpg", alt: "Punakha Dzong" },
      { src: "/crane.jpg", alt: "Chimi Lhakhang" },
    ],
    rightImage: "/camp.jpg",
    videoUrl: "",
    content: `
      <strong>Breakfast at Hotel/ Homestay:</strong><br/>
      After breakfast, set out on a beautiful drive toward Punakha, descending gradually into a warmer and greener valley. The journey offers captivating views of mountain slopes, charming villages, and terraced farmlands along the way.<br/><br/>

      <strong>On the way:</strong><br/>
      Upon reaching Lobesa, a small town en route to Punakha Dzong, walk through rice fields and village paths to visit Chimi Lhakhang, the Temple of Fertility, dedicated to Drukpa Kunley, offering insight into Bhutan’s unique spiritual traditions.<br/><br/>

      <strong>Authentic Bhutanese Lunch:</strong><br/>
      Enjoy an authentic Bhutanese lunch at a local restaurant in Khuruthang, savoring traditional flavors prepared with fresh local ingredients.<br/><br/>

      <strong>Afternoon:</strong><br/>
      Continue to visit the majestic Punakha Dzong, one of Bhutan’s most stunning fortresses, majestically located at the confluence of the Pho Chhu and Mo Chhu rivers.<br/>
      Then, enjoy a walk across the Punakha Suspension Bridge, one of the longest in Bhutan, offering stunning views of the valley and river below — a peaceful yet thrilling experience.<br/>
      Spend the evening relaxing in the valley or, optionally, visit a local farmhouse for a glimpse into authentic Bhutanese rural life and hospitality.<br/><br/>

      <strong>Dinner and Overnight Stay:</strong><br/>
      Hotel in Punakha
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Travel to Paro – Stopover at Tachog Lhakhang",
    subtitle: "Cultural Stops En Route",
    leftImages: [
      { src: "/gangtay.jpg", alt: "Tachog Lhakhang" },
      { src: "/Chimi_Lhakhang,_Bhutan_05.jpg", alt: "Dochula Pass Stop" },
    ],
    rightImage: "/bhutan-thimphu-city.jpg",
    videoUrl: "",
    content: `
      <strong>Morning:</strong><br/>
      After breakfast, begin your journey toward Paro, ascending gradually to the picturesque Dochula Pass adorned with 108 stupas. Take a brief stop to enjoy the scenery and a warm cup of tea before continuing your descent toward Thimphu.<br/>
      En route, visit Tachog Lhakhang, a 15th-century temple built by the great iron bridge builder Thangtong Gyalpo. Cross the traditional iron chain bridge to reach the temple, beautifully set against the flowing Paro Chhu River and surrounding hills — a serene and photogenic spot.<br/><br/>

      <strong>Lunch in Paro:</strong><br/>
      Enjoy lunch at a local restaurant before checking into your hotel. Later, visit the impressive Paro Rinpung Dzong (Fortress of the Heap of Jewels), one of Bhutan’s most iconic landmarks, overlooking the Paro Valley. Explore its fine architecture, sacred courtyards, and rich artistic details before taking a stroll around Paro town, known for its charming streets, traditional architecture, and local handicraft shops.<br/><br/>

      <strong>Evening:</strong><br/>
      In the evening, experience a cultural program of traditional Bhutanese music and dance, showcasing the country’s vibrant heritage and local artistry. Afterward, retire to bed early to prepare for the next day’s Taktsang (Tiger’s Nest) hike.<br/>
      Dinner and Overnight Stay: Hotel in Paro
    `,
  },
  {
    dayNumber: "Day 6",
    title: "Excursion to Taktsang Monastery & Leisure Evening",
    subtitle: "Iconic Hike and Spiritual Exploration",
    leftImages: [
      { src: "/chorten.jpg", alt: "Taktsang Monastery" },
      { src: "/Kichu-Lhakang.jpg", alt: "Tiger’s Nest Trail View" },
    ],
    rightImage: "/hotel-exterior-bang-in.jpg",
    videoUrl: "",
    content: `
      <strong>Early Morning:</strong><br/>
      After an early breakfast, begin the Taktsang Monastery (Tiger’s Nest) hike, winding through pine forests, waterfalls, and prayer-flagged cliffs, with a midway stop at a viewpoint for photos and refreshments, offering spectacular views of Paro Valley. The hike takes approximately 4 to 5 hours round-trip, including time to explore the monastery.<br/><br/>

      <strong>Late Morning:</strong><br/>
      Arrive at Taktsang Monastery, perched 3,120 meters above sea level. Explore its chapels, prayer halls, and courtyards while enjoying panoramic mountain views and learning about its spiritual significance, including its association with Guru Rinpoche (Padmasambhava).<br/><br/>

      <strong>Lunch at View Point Restaurant:</strong><br/>
      Stop at View Point Restaurant while descending from Taktsang Monastery, enjoying a meal of local Bhutanese cuisine and taking in breathtaking views of the Paro Valley before continuing back to the base.<br/>
      On the way back to Paro town, visit Kichu Lhakhang, one of Bhutan’s oldest and most sacred temples, believed to have been built in the 7th century.<br/><br/>

      <strong>Leisure Evening:</strong><br/>
      Return to your hotel for a leisurely evening, relaxing or strolling around Paro town, shopping for local handicrafts, or enjoying the tranquil valley.<br/>
      <strong>Farewell Dinner and Overnight: Hotel in Paro:</strong><br/>
      Conclude your Bhutan journey with a farewell dinner at your hotel or a local restaurant in Paro, featuring traditional Bhutanese cuisine and a warm, cultural ambiance. Retire to your hotel afterward for an overnight stay in Paro
    `,
  },
  {
    dayNumber: "Day 7",
    title: "Departure from Paro",
    subtitle: "Farewell to Bhutan",
    leftImages: [
      { src: "/kitchulhakang.jpg", alt: "Paro Airport" },
      { src: "/punakha-valley.jpg", alt: "Scenic Valley" },
    ],
    rightImage: "/The archeticture.jpg",
    videoUrl: "",
    content: `
      <strong>After breakfast:</strong><br/>
      Transfer to Paro International Airport for your onward journey. Our representative from Lumora Tours and Travels will bid you farewell with warm wishes and blessings for your safe journey home.<br/><br/>

      <strong>Departure from Bhutan:</strong><br/>
      Begin your final day with a check-in at Paro International Airport, completing airport formalities with ease. As you await your flight, take a quiet moment to reflect on the enchanting experiences, vibrant culture, and serene landscapes that have made your Bhutan journey unforgettable.<br/>
      When boarding is announced, proceed to your gate and settle in for departure. As your plane ascends over the majestic Himalayas, savor one last panoramic view of Bhutan’s pristine valleys and cliffside monasteries—a breathtaking farewell to the Land of the Thunder Dragon.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back to the Land of the Thunder Dragon.
    `,
  }
];





  return (
    <main className="w-full h-full">
      <Landing
        image="/Paro-Taktsang.jpg"
        alt="Paro Festival"
        imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
        subContainer="w-full relative"
        maincontainer="w-full"
        heading="Discover the essence of Bhutan"
        subheading="Land in the scenic Paro Valley, greeted by the crisp Himalayan air and stunning mountain vistas."
        Itinerary="Book Us"
        headingstyle="font-mono"
      />
      <TourBand
        data={tourInfo}
        mainContainerstyle="mt-10  flex justify-start"
      />
      <div className=" bg-[#EAEDF0] pt-3 pb-10">
        <TourAbout data={oneWeekInBhutan} />
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
      {/* <div className="bg-[#EAEDF0] pt-3 pb-10">
        <PolicyPage data={PolicyPageData} />
      </div> */}
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
