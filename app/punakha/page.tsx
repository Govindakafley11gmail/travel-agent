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
  FeelBhutanTour,

} from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
 const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro – Transfer to Thimphu (1 hr 30 mins drive)",
    subtitle: "Arrival and Transfer to Thimphu",
    leftImages: [
      { src: "/town.jpg", alt: "Paro International Airport" },
      { src: "/Semtokha-Dzong.jpg", alt: "Tachog Lhakhang Iron Bridge" },
    ],
    rightImage: "/thimphu_hotel.jpg",
    videoUrl: "",
    content: `
      <strong>Arrival at Paro International Airport</strong><br/>
      Upon arrival in Bhutan, guests are greeted with a warm smile and the offering of a khadar, a ceremonial white silk scarf symbolizing purity, goodwill, and respect. This heartfelt Bhutanese gesture marks an auspicious beginning to your journey, reflecting the country’s deep-rooted culture of hospitality and spiritual grace.<br/><br/>

      <strong>Drive to Thimphu:</strong> A picturesque journey along the Paro River and Wang Chhu Valley.<br/>
      En route to Thimphu, visit Tachog Lhakhang Iron Bridge, an ancient bridge built by the 15th-century master Thangtong Gyalpo, offering a glimpse into Bhutan’s unique architectural heritage. Later in Thimphu, visit the National Memorial Chorten, a revered monument of peace and compassion, and explore the Simply Bhutan Museum to experience traditional houses, butter tea, archery, and local attire.<br/><br/>

      <strong>Lunch at Local Restaurant:</strong><br/>
      Enjoy a delicious Bhutanese meal prepared with fresh, locally sourced ingredients. Savor traditional dishes such as red rice, ema datshi (chili and cheese), and seasonal vegetables, offering an authentic taste of Bhutanese cuisine and warm local hospitality.<br/><br/>

      <strong>Dinner and overnight in Thimphu:</strong><br/>
      Enjoy a welcome dinner accompanied by traditional Bhutanese music and a folk-dance performance by local artists.
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Thimphu Nature, Cultural & Craft Tour",
    subtitle: "Thimphu Sightseeing and Travel to Punakha via Dochula",
    leftImages: [
      { src: "/buddha_dordenma.jpg", alt: "Buddha Dordenma Statue" },
      { src: "/folk_heritage_museum.jpg", alt: "Folk Heritage Museum" },
    ],
    rightImage: "/Memorial_Chorten_Bhutan.jpg",
    videoUrl: "",
    content: `
      <strong>Breakfast at the Hotel:</strong><br/>
      Taste local red rice and buckwheat pancakes or continental dishes.<br/><br/>

      <strong>Sightseeing in Thimphu:</strong><br/>
      Begin your Thimphu sightseeing with a visit to the majestic Buddha Dordenma Statue, a colossal golden Buddha that overlooks the Thimphu Valley, symbolizing peace and prosperity. Continue to the Folk Heritage Museum, where you’ll step back in time to explore the traditional Bhutanese way of life through its well-preserved rural household exhibits and cultural displays.<br/>
      Next, visit the Institute for Zorig Chusum (Arts & Crafts School) to witness students mastering Bhutan’s 13 traditional arts, including thangka painting, wood carving, and embroidery — a living expression of the nation’s artistic heritage. If open, stop by the Centenary Farmers’ Market, where locals gather to trade fresh produce and handcrafted goods, offering an authentic glimpse into Bhutan’s daily life and community spirit.<br/><br/>

      <strong>Lunch at Hotel:</strong><br/>
      Savor a mix of Bhutanese and Continental dishes, from red rice and ema datshi to pasta and fresh salads, served in a warm and welcoming setting.<br/><br/>

      <strong>Afternoon: Travel to Punakha via Dochula:</strong><br/>
      Drive to Punakha via Dochula Pass (3,100m), where, on a clear day, you can enjoy breathtaking panoramic views of the Eastern Himalayas. Visit the 108 Druk Wangyal Chortens, a stunning collection of stupas.<br/><br/>

      <strong>Dinner and Overnight:</strong><br/>
      Hotel in Punakha. Enjoy a delicious Bhutanese or continental dinner at your hotel in Punakha, followed by a restful night surrounded by the serene beauty of the valley.
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Explore Punakha Valley",
    subtitle: "Punakha Sightseeing and Travel to Paro",
    leftImages: [
      { src: "/crane.jpg", alt: "Punakha Dzong" },
      { src: "/Beautiful Flower.jpg", alt: "Chimi Lhakhang Temple" },
    ],
    rightImage: "/bridge.jpg",
    videoUrl: "",
    content: `
      <strong>Breakfast at the Hotel:</strong><br/>
      Start your day with a hearty breakfast featuring a choice of Bhutanese specialties like red rice and buckwheat pancakes, along with continental options such as eggs, toast, and fresh fruit, preparing you for a day of exploration.<br/><br/>

      <strong>Sightseeing in Punakha:</strong><br/>
      Discover the enchanting Punakha Valley, often called Bhutan’s most picturesque region. Begin with a visit to the Punakha Dzong, a stunning fortress set at the confluence of the Pho Chhu and Mo Chhu rivers, renowned for its intricate architecture and historical significance. Stroll across the suspension bridge, one of the longest in Bhutan, and enjoy the scenic rice fields and river views. Later, visit Chimi Lhakhang, the Fertility Temple, set amidst lush landscapes, and experience the valley’s vibrant local life, traditional villages, and serene natural beauty.<br/><br/>

      <strong>Outdoor Lunch at Lamperi Royal Botanical Park:</strong><br/>
      Delight in a picnic-style lunch amidst nature at Lamperi, surrounded by the park’s lush greenery and serene landscapes.<br/><br/>

      <strong>Travel to Paro with a Stopover at Chuuzom:</strong><br/>
      After lunch, begin your journey back to Paro, stopping at Chuuzom, the confluence of the Paro Chhu and Thimphu Chhu rivers, where a striking Chorten marks the meeting point. Take in the scenic surroundings and capture the serene beauty of this spiritual and picturesque site before continuing to Paro.<br/><br/>

      <strong>Leisure Evening at Paro with Dinner and Overnight:</strong><br/>
      Spend a relaxing evening in Paro, strolling through the town or enjoying the hotel’s amenities. Savor a delicious dinner featuring local Bhutanese flavors, and retire for a restful overnight stay surrounded by the tranquil beauty of the valley.
    `,
  },
  {
    dayNumber: "Day 4",
    title: "Excursion to Taktsang Monastery & Leisure Evening",
    subtitle: "Tiger's Nest Hike and Cultural Exploration",
    leftImages: [
      { src: "/buddha.jpg", alt: "Taktsang Monastery" },
      { src: "/dochula-pass2.jpg", alt: "Paro Valley View" },
    ],
    rightImage: "/restraurant.jpg",
    videoUrl: "",
    content: `
      <strong>Early Morning:</strong><br/>
      After an early breakfast, begin the Taktsang Monastery (Tiger’s Nest) hike, winding through pine forests, waterfalls, and prayer-flagged cliffs, with a midway stop at a viewpoint for photos and refreshments, offering spectacular views of Paro Valley. The hike takes approximately 4 to 5 hours round-trip, including time to explore the monastery.<br/><br/>

      <strong>Late Morning:</strong><br/>
      Arrive at Taktsang Monastery, perched 3,120 meters above sea level. Explore its chapels, prayer halls, and courtyards while enjoying panoramic mountain views and learning about its spiritual significance, including its association with Guru Rinpoche (Padmasambhava).<br/><br/>

      <strong>Lunch at View Point Restaurant:</strong><br/>
      Stop at View Point Restaurant while descending from Taktsang Monastery, enjoying a meal of local Bhutanese cuisine and taking in breathtaking views of the Paro Valley before continuing back to the base.<br/><br/>

      <strong>On the way back:</strong><br/>
      Visit Kichu Lhakhang, one of Bhutan’s oldest and most sacred temples, believed to have been built in the 7th century.<br/><br/>

      <strong>Leisure Evening:</strong><br/>
      Return to your hotel for a leisurely evening, relaxing or strolling around Paro town, shopping for local handicrafts, or enjoying the tranquil valley.<br/><br/>

      <strong>Farewell Dinner and Overnight:</strong><br/>
      Hotel in Paro. Conclude your Bhutan journey with a farewell dinner at your hotel or a local restaurant in Paro, featuring traditional Bhutanese cuisine and a warm, cultural ambiance. Retire to your hotel afterward for an overnight stay.
    `,
  },
  {
    dayNumber: "Day 5",
    title: "Departure from Paro",
    subtitle: "Farewell to Bhutan",

    videoUrl: "",
    content: `
      <strong>After breakfast:</strong><br/>
      Transfer to Paro International Airport for your onward journey. Our representative from Lumora Tours and Travels will bid you farewell with warm wishes and blessings for your safe journey home.<br/><br/>

      <strong>Departure from Bhutan:</strong><br/>
      Begin your final day with a check-in at Paro International Airport, completing airport formalities with ease. As you await your flight, take a quiet moment to reflect on the enchanting experiences, vibrant culture, and serene landscapes that have made your Bhutan journey unforgettable.<br/>
      When boarding is announced, proceed to your gate and settle in for departure. As your plane ascends over the majestic Himalayas, savor one last panoramic view of Bhutan’s pristine valleys and cliffside monasteries—a breathtaking farewell to the Land of the Thunder Dragon.<br/><br/>

      <strong>Until Next Time:</strong><br/>
      As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you’ve gathered will linger, calling you back.
    `,
  },
  {
    dayNumber: "Tour Inclusions & Exclusions",
    title: "Tour Inclusions & Exclusions",
    subtitle: "",
    leftImages: [],
    rightImage: "",
    videoUrl: "",
    content: `
      <strong>Tour Inclusion:</strong><br/>
      Arrival and Departure: All airport and hotel transfers, as well as ground transportation throughout the trip, are provided in a comfortable private vehicle.<br/>
      Accommodation: Stay in comfortable twin/double sharing lodging throughout your Bhutan tour, carefully selected to ensure a relaxing and enjoyable experience.<br/>
      Sightseeing Fees & Visa: Sustainable Development Fee (SDF), all entrance fees to museums, monuments, and heritage sites are included, along with your Bhutanese Tourist Visa.<br/>
      Meals: Enjoy full-board meals throughout your journey, including breakfast, lunch, dinner, tea, and snacks.<br/>
      Transportation: All ground transportation during the tour will be in a comfortable private vehicle, as outlined in the itinerary.<br/>
      Guide: Benefit from the expertise of a licensed, professional English-speaking Bhutanese guide who is friendly, knowledgeable, and dedicated to enhancing your travel experience.<br/>
      Water: Mineral drinking water is provided during all tour activities.<br/>
      Government Taxes: All applicable government taxes and official expenses are included in your package.<br/><br/>

      <strong>Tour Exclusions:</strong><br/>
      International Airfare: Flights to and from Bhutan are not included in the package. However, Lumora Tours and Travels will assist you in booking the flights to and from Bhutan.<br/>
      Travel Insurance: Personal travel, medical, or accident insurance is not included.<br/>
      Personal Expenses: Items such as souvenirs, laundry, phone calls, or personal purchases are not covered.<br/>
      Optional Activities: Any optional excursions, activities, or experiences not mentioned in the itinerary are at your own cost.<br/>
      Tips & Gratuities: Tips for guides, drivers, hotel staff, and porters are not included and are left to your discretion.<br/>
      Alcoholic & Special Beverages: Alcoholic drinks and beverages beyond standard tea, coffee, and water are not included.<br/>
      Visa & Permit for Non-Standard Entry: Any special permits required outside the standard Bhutanese Tourist Visa are not included.
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
        <TourAbout data={FeelBhutanTour} />
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
