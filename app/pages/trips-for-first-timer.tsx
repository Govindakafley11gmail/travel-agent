"use client";

import { useEffect, useState } from "react";
import PlacesToTravelOptions from "@/component/places-to-tavel-card/places-to-travel-card";
import { apiClient } from "../api/apiClient";
import { apiBaseUrl, getApiEndpoint } from "../api";

interface Place {
  img: string;
  title: string;
  days: number;
  slug: string;
  destinations: string;
  ratingnumber: number;
  charge: number;
}

export default function TripsForFistTimer() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getTrips(true));
        setPlaces(response.data.data); // assuming API returns { data: [...] }
      } catch (error) {
        console.error("Failed to fetch places:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <section className="bg-white h-auto">
      <section className="bg-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 lg:gap-8">
            {/* Left: Title */}
            <div className="flex flex-col gap-1">
              <p className="uppercase tracking-wide text-gray-600 font-base font-sans">
                Trips for First-Timers
              </p>
              <h2 className="text-base font-bold text-gray-900 mt-2 font-mono">
                New to Bhutan? These packages are the perfect introduction.
              </h2>
            </div>

            {/* Right: Stats */}
            <div className="flex flex-row sm:flex-row items-center gap-2 text-center sm:text-left">
              <h1 className="font-mono text-xl md:text-2xl font-bold">+1k</h1>
              <p className="font-sans text-sm md:text-base whitespace-nowrap">
                Tourists have chosen these tours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Show loader or data */}
      {loading ? (
        <p className="text-center py-10 font-mono text-gray-500">Loading...</p>
      ) : (
        <PlacesToTravelOptions data={places} />
      )}
    </section>
  );
}
