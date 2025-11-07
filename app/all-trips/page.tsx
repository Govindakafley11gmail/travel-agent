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
import PlacesToTravelOptions from "@/component/places-to-tavel-card/places-to-travel-card";
import { placestotraveldetails } from "@/data/places-to-travels-details";
import AllTripsComponent from "@/component/all-trips-carasouel/all-trips-carasouel";

export default function AllTrips() {
  const sampleData = [
    {
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600",
      title: "Wild Tanzania",
      days: 9,
      slug: "wild-tanzania",
      charge: 6590,
      originalPrice: null,
    },
    {
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
      title: "Rwanda: Gorilla Trekking & Volcanoes",
      days: 9,
      slug: "rwanda-gorillas",
      charge: 7685,
      originalPrice: null,
    },
    {
      img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600",
      title: "Ultimate Argentina",
      days: 10,
      slug: "ultimate-argentina",
      charge: 6201,
      originalPrice: 7845,
    },
    {
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
      title: "Epic New Zealand",
      days: 15,
      slug: "epic-new-zealand",
      charge: 8450,
      originalPrice: 9200,
    },
  ];

  return (
    <main className="w-full h-full">
      <Navbar />

      <div className="mt-10">
        <AllTripsComponent data={sampleData} />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
