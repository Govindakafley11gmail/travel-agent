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
import { tourInfo, mockTourData, photoSets, newTourPackageData, eaternBhutanData } from "@/data/paro-places-data";
import { Check, MapPin, X } from "lucide-react";
import TripsForFistTimer from "../pages/trips-for-first-timer";
import Footer from "@/component/footer";
import PaymentCard from "@/component/payments";

export default function CultureMain() {
    const itinerary = [
        {
            dayNumber: "Day 1",
            title: "Arrival at Samdrup Jongkhar",
            subtitle: "",
            leftImages: [
                { src: "/sam1.jpg", alt: "Paro International Airport" },
                { src: "/sam2.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/cropped-YANG-KORA.png",
            videoUrl: "",
            content: `
      Arrive at Guwahati Airport and drive to Samdrup Jongkhar, Bhutan's eastern gateway. Complete border formalities and meet your guide.

Explore Samdrup Jongkhar town, visiting local markets to see colorful produce, handicrafts, and textiles. Walk through the town to observe daily life and interact with locals. Sample Bhutanese cuisine at a local restaurant and enjoy scenic views of rivers and hills.
Overnight in Samdrup Jongkhar
    `,
        },
        {
            dayNumber: "Day 2",
            title: "Samdrup Jongkhar → Trashigang (4–5 hrs drive)",
            subtitle: "",
            leftImages: [
                { src: "/cropped-YANG-DAPAPA.png", alt: "Paro International Airport" },
                { src: "/sam4.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/sam6.jpg",
            videoUrl: "",
            content: `
      Drive north to Trashigang, passing rivers, terraced fields, and forested hills.

Visit Trashigang Dzong from the exterior, an iconic fortress overlooking the valley. Explore the town's streets and markets, and engage with artisans or farmers to learn about local crafts and lifestyles. Evening at leisure to soak in the tranquil surroundings.
Overnight in Trashigang
    `,
        },
        {
            dayNumber: "Day 3",
            title: "Trashigang – Village Walks & Culture",
            subtitle: "",
            leftImages: [
                { src: "/sam7.jpg", alt: "Paro International Airport" },
                { src: "/sam8.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/2. Mebar Tsho.jpg",
            videoUrl: "",
            content: `
      Spend the day exploring nearby villages. Take guided walks through traditional communities, observing rural life, local farming, and craft practices.

Optional visits to community workshops allow travelers to see traditional weaving, woodwork, and other artisan activities. Evening includes a chance to enjoy authentic eastern Bhutanese cuisine.
Overnight in Trashigang
    `,
        },
        {
            dayNumber: "Day 4",
            title: "Trashigang → Trashiyangtse",
            subtitle: "",
            leftImages: [
                { src: "/scollege.jpg", alt: "Paro International Airport" },
                { src: "/college2.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/himalaya.jpg",
            videoUrl: "",
            content: `
      Drive to Trashiyangtse, known for its rich arts and crafts heritage, including thangka painting, wood carving, and papier-mâché.

Visit Chorten Kora, a revered stupa surrounded by villages and legends. Explore local artisan workshops or spend time walking through the surrounding villages to capture the rural lifestyle and serene landscapes.
Overnight in Trashiyangtse
    `,
        },
        {
            dayNumber: "Day 5",
            title: "Trashiyangtse Exploration",
            subtitle: "",
            leftImages: [
                { src: "/dzongkhang.jpg", alt: "Paro International Airport" },
                { src: "/mongar.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/Tang-Valley.jpg",
            videoUrl: "",
            content: `
      Travel to Pema Gatshel, visiting Yonglagonpa Monastery, perched in a peaceful valley. Explore surrounding villages and take in panoramic views of the mountains and rivers.

Optional activities include village walks, cultural interactions, or local culinary experiences. Evening at leisure.
Overnight in Pema Gatshel
    `,
        },
        {
            dayNumber: "Day 7",
            title: "Pema Gatshel → Samdrup Jongkhar",
            subtitle: "",
            leftImages: [
                { src: "/bum1.jpg", alt: "Paro International Airport" },
                { src: "/huge-complex.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/amankora_bhutan_-_bumthang_6.jpg",
            videoUrl: "",
            content: `
      Drive back to Samdrup Jongkhar, passing scenic valleys, forests, and rivers along the way. Stop at small villages for short walks and photography opportunities, capturing the essence of Eastern Bhutan's rural life.

Evening at leisure in Samdrup Jongkhar to enjoy local markets, cultural sights, or a relaxing dinner.
Overnight in Samdrup Jongkhar
    `,
        },
        {
            dayNumber: "Day 8",
            title: "Departure from Samdrup Jongkhar → Guwahati",
            subtitle: "",
            leftImages: [
                { src: "/What-are-the-best-things-to-do-in-Bumthang.jpg", alt: "Paro International Airport" },
                { src: "/01BUMT-IM0001-bumthang.jpg", alt: "Kyichu Lhakhang Temple" },
            ],
            rightImage: "/m=bumthang.jpg",
            videoUrl: "",
            content: `
      After breakfast, complete border formalities at Samdrup Jongkhar and transfer to Guwahati Airport for onward flights. Depart Bhutan with lasting memories of pristine valleys, artisan villages, and rich eastern Bhutanese culture.
Until Next Time:
As you bid farewell to Bhutan, carry with you the serenity of its valleys, the warmth of its people, and the timeless beauty of its mountains and monasteries. Though your journey may end for now, the memories and experiences you've gathered will linger, calling you back to the Land of Thunder Dragon soon!
    `,
        },
        {
            dayNumber: "Tour Information",
            title: "Why Choose This Tour & Tour Details",
            subtitle: "",

            videoUrl: "",
            content: `
      ✨ Why Choose This Tour?<br/>

This tour is designed for travelers who want more than sightseeing. It creates space for genuine human connection, meaningful cultural experiences, and a deeper appreciation of Bhutan's way of life. From intimate homestays to hands-on village activities, every moment offers insight into the traditions that define Bhutan.

<br/>🏷️ Tour Style <br/>
Standard / Comfort<br/>
Thoughtfully curated accommodations, comfortable transportation, and authentic cultural experiences designed for meaningful, mindful travel.
<br/>📌 Year-Round Availability<br/>
Spring (March–May): Blooming landscapes, ideal weather<br/>
Winter (December–February): Crisp air, peaceful villages, fewer tourists<br/>

📞 Bookings & Enquiries (CTA Button)<br/>

Cost Disclaimer<br/>
Please note that the tour package cost does not include:<br/>
	1) Flight tickets to Guwahati, India, or within Bhutan <br/>
	2) Accommodation or meals in India outside the planned schedule <br/>
	3) Personal expenses, shopping, or optional activities not included in the itinerary
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
                image="/hotel-exterior-bang-in.jpg"
                alt="Paro Festival"
                imagestyle="h-[500px] md:h-[600px] lg:h-[500px]"
                subContainer="w-full relative"
                maincontainer="w-full"
                heading="Eastern Bhutan Discovery Tours"
                subheading="The flexible itinerary allows time for photography, cultural immersion, and authentic local experiences."
                Itinerary="Book Us"
                headingstyle="font-mono"
            />
            <TourBand
                data={tourInfo}
                mainContainerstyle="mt-10  flex justify-start"
            />
            <div className=" bg-[#EAEDF0] pt-3 pb-10">
                <TourAbout data={eaternBhutanData} />
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
