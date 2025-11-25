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
import PaymentCard from "@/component/payments";

export default function CultureMain() {
 const itinerary = [
  {
    dayNumber: "Day 1",
    title: "Arrival in Paro",
    subtitle: "Arrival and Cultural Exploration",
    leftImages: [
      { src: "/hotel.jpg", alt: "Paro International Airport" },
      { src: "/kitchu.jpg", alt: "Kyichu Lhakhang Temple" },
    ],
    rightImage: "/parofestival.jpg",
    videoUrl: "",
    content: `
      <strong>Arrival at Paro International Airport</strong><br/>
      Upon arrival in Bhutan, guests are greeted with a warm smile and the offering of a khadar, a ceremonial white silk scarf symbolizing purity, goodwill, and respect. This heartfelt Bhutanese gesture marks an auspicious beginning to your journey, reflecting the country’s deep-rooted culture of hospitality and spiritual grace.<br/><br/>

      <strong>Hotel Check-in and Welcome Tea</strong><br/>
      Upon arrival, check in at your hotel and relax with a warm welcome tea, a traditional Bhutanese gesture of hospitality. Take some time to settle in and enjoy the serene surroundings before beginning your cultural journey.<br/><br/>

      <strong>Sightseeing in Paro Valley</strong><br/>
      Begin your exploration of Paro Valley with a visit to Kyichu Lhakhang, one of Bhutan’s oldest and most sacred temples, built in the 7th century. This revered site offers a glimpse into Bhutan’s spiritual heritage and is a place of devotion for locals and visitors alike.<br/>
      Next, stop at Ta Dzong, the National Museum of Bhutan, housed in a historic watchtower. Here, you can explore a rich collection of Bhutanese art, traditional artifacts, and historical exhibits that showcase the country’s culture and craftsmanship.<br/>
      Continue to Drukgyel Dzong, the ruins of a historic fortress set amidst scenic landscapes. Perched above the valley, it offers panoramic views of the Paro Valley and the surrounding Himalayan peaks, providing both a sense of Bhutan’s history and breathtaking natural beauty.<br/><br/>

      <strong>Lunch at Hotel:</strong><br/>
      Take a relaxing break and enjoy a wholesome lunch in the comfort of your hotel, offering a mix of local Bhutanese flavors and international options to refuel for the day’s exploration.<br/><br/>

      <strong>Afternoon visit to Paro Tshechu:</strong><br/>
      Spend the afternoon at Paro Rinpung Dzong to witness the vibrant Paro Tshechu festival, featuring masked dances, traditional music, and colorful rituals, providing a unique glimpse into Bhutanese culture and spiritual traditions.<br/><br/>

      <strong>Dinner and overnight in Paro:</strong><br/>
      Enjoy a delicious dinner at your hotel, savoring local Bhutanese flavors or international cuisine, followed by a restful overnight stay in the serene surroundings of Paro Valley.
    `,
  },
  {
    dayNumber: "Day 2",
    title: "Hike to Taktsang and Tshechu Tour in the Afternoon",
    subtitle: "Tiger’s Nest Hike and Cultural Experience",
    leftImages: [
      { src: "/hike.jpg", alt: "Taktsang Monastery Hike" },
      { src: "/viewpont.jpg", alt: "View Point Restaurant" },
    ],
    rightImage: "/The Mask Dance.jpg",
    videoUrl: "",
    content: `
      <strong>Early Morning:</strong><br/>
      After an early breakfast, begin the Taktsang Monastery (Tiger’s Nest) hike, winding through pine forests, waterfalls, and prayer-flagged cliffs, with a midway stop at a viewpoint for photos and refreshments, offering spectacular views of Paro Valley. The hike takes approximately 4 to 5 hours round-trip, including time to explore the monastery.<br/><br/>

      <strong>Late Morning:</strong><br/>
      Arrive at Taktsang Monastery, perched 3,120 meters above sea level. Explore its chapels, prayer halls, and courtyards while enjoying panoramic mountain views and learning about its spiritual significance, including its association with Guru Rinpoche (Padmasambhava).<br/><br/>

      <strong>Lunch at View Point Restaurant:</strong><br/>
      Stop at View Point Restaurant while descending from Taktsang Monastery, enjoying a meal of local Bhutanese cuisine and taking in breathtaking views of the Paro Valley before continuing back to the base.<br/><br/>

      <strong>Afternoon Paro Tshechu Tour:</strong><br/>
      Attend the Paro Tshechu festival at Paro Rinpung Dzong, one of Bhutan’s most vibrant cultural events. Experience the masked dances (Cham), where monks and lay performers enact traditional spiritual and historical stories through elaborate costumes and choreography. Enjoy traditional music and drumming that accompany the dances, creating a lively and immersive festive atmosphere.<br/>
      A highlight of the festival is the unfurling of the Thongdrol, a large sacred painting believed to bring blessings and cleanse sins for all who witness it. Throughout the afternoon, observe religious rituals performed by monks, and enjoy folk dances, songs, and cultural performances that showcase Bhutanese heritage. The event is also a community gathering, bringing locals and visitors together to celebrate, socialize, and experience Bhutan’s rich culture and spiritual traditions.<br/><br/>

      <strong>Farewell Dinner and Overnight:</strong><br/>
      Hotel in Paro. Conclude your Bhutan journey with a farewell dinner at your hotel or a local restaurant in Paro, featuring traditional Bhutanese cuisine and a warm, cultural ambiance. Retire to your hotel afterward for an overnight stay in Paro.
    `,
  },
  {
    dayNumber: "Day 3",
    title: "Departure from Paro",
    subtitle: "Farewell to Bhutan",
    leftImages: [
      { src: "/dance.jpg", alt: "Paro Airport" },
      { src: "/dance2.jpg", alt: "Farewell Bhutan" },
    ],
    rightImage: "/lam.jpg",
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
    title: "Tour Inclusions, Exclusions, Visa & Documents",
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
      Visa & Permit for Non-Standard Entry: Any special permits required outside the standard Bhutanese Tourist Visa are not included.<br/><br/>

      <strong>Visa Requirement:</strong><br/>
      Lumora Tours and Travels will assist in arranging all visa and e-permit applications for international visitors. A single-entry visa (USD 40) must be obtained before arrival and presented at the Point of Entry in Bhutan.<br/>
      All tourists, except those from India, Bangladesh, and the Maldives, require a visa to enter Bhutan. Indian visitors need a permit, while nationals of Bangladesh and the Maldives are eligible for a visa on arrival.<br/>
      Tourists paying in US Dollars are eligible for a 50% discount on the standard SDF of USD 200, reducing it to USD 100 per person per day. This discount also applies to children aged 6–11 years paying in US Dollars. Additionally, the 24-hour SDF waiver for visitors staying in border towns remains in effect.<br/>
      Visitors can obtain their visa clearance or permit online through the Department of Immigration, or they can rely on Lumora Tours and Travels to handle all travel documents and organize their Bhutan trip seamlessly.<br/>
      All tourists must travel via a pre-booked tour package, to this end, the Lumora Tours and Travels ensure all paperwork is handled smoothly so you can enjoy your Bhutan journey hassle-free.<br/><br/>

      <strong>Document Required:</strong><br/>
      A digital copy of a valid passport with at least six months of validity beyond your departure date from Bhutan.<br/>
      A recent digital passport photo.<br/>
      Arrival and departure dates.<br/>
      Valid travel insurance for the duration of your travel.<br/>
      Sustainable Development Fee (SDF) of USD100 per night per adult and USD50 for children aged 5 to 12 years old. For children below 5 years, the SDF is waived.<br/>
      A one-time visa application fee of USD40.<br/><br/>
      Lumora Tours and Travels will be pleased to process your Bhutan visa upon receiving the required documents and applicable fees.
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
        <TourAbout data={mockTourData} />
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
