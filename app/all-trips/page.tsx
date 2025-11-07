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

  
  return (
    <main className="w-full h-full">
      <Navbar />

      <div className="mt-10">
        <AllTripsComponent data={placestotraveldetails}/>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
