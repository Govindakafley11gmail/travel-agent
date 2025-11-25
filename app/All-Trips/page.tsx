"use client";

import { useState } from "react";
import AdvantureTrips from "@/component/all-trips/advanture";
import NatureTrips from "@/component/all-trips/nature";
import TourTrips from "@/component/all-trips/tour";
import CultureTrips from "@/component/all-trips/culture";
import LeisureTTrips from "@/component/all-trips/leisure";
import Footer from "@/component/footer";

export default function AllTrips() {
  const [activeTab, setActiveTab] = useState("all"); // default shows all

  const tabs = [
    { id: "all", label: "All Trips" },
    { id: "advanture", label: "Adventure Trips" },
    { id: "nature", label: "Nature Trips" },
    { id: "tour", label: "Tour Trips" },
    { id: "cultural", label: "Culture Trips" },
    { id: "leisure", label: "Leisure Trips" },
  ];

  const renderTabContent = () => {
    if (activeTab === "all") {
      return (
        <>
          <AdvantureTrips />
          <NatureTrips />
          <TourTrips />
          <CultureTrips />
          <LeisureTTrips />
        </>
      );
    }

    switch (activeTab) {
      case "advanture":
        return <AdvantureTrips />;
      case "nature":
        return <NatureTrips />;
      case "tour":
        return <TourTrips />;
      case "cultural":
        return <CultureTrips />;
      case "leisure":
        return <LeisureTTrips />;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="overflow-hidden py-10 px-4 md:px-8 lg:px-16 ">
        {/* Tabs */}
        <div className="w-full max-w-7xl mx-auto mb-8">
          <div className="
      grid 
      grid-cols-2 
      xs:grid-cols-3 
      sm:grid-cols-4 
      md:grid-cols-5 
      lg:grid-cols-6 
      gap-3 
      sm:gap-4 
      justify-start
    ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
            px-3 py-3 
            text-sm sm:text-base 
            font-semibold 
            rounded-md
            transition-all duration-300 
            whitespace-nowrap 
            shadow-sm
            ${activeTab === tab.id
                    ? "bg-green-600 text-white shadow-green-500/50"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:shadow-md"
                  }
          `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Render Active Tab Content */}
        <div>{renderTabContent()}</div>

      </main>
      {/* <Destinations
        title={"Lumora Tours and Travel video"}
        subtitle={"Beautiful & Romantic"}
        backgroundImage="/Beautiful Dzong.jpg"
        video={true}
      /> */}
      <Footer />
    </>
  );
}
