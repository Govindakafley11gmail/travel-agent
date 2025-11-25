"use client";

import { useEffect, useState } from "react";
import PlacesToTravelOptions from "@/component/places-to-tavel-card/places-to-travel-card";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";


interface Place {
    img: string;
    title: string;
    days: number;
    slug: string;
    destinations: string;
    ratingnumber: number;
    charge: number;
}

export default function CultureTrips() {
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await apiClient.get(getApiEndpoint.getTrips(undefined, 'Cultural'));
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
        <>
            {places.length > 0 && (
                <section className="bg-white h-auto">


                    <section className="bg-white py-8">
                        <div className="max-w-screen-xl mx-auto px-4 md:px-2">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 lg:gap-8">
                                {/* Left: Title */}
                                <div className="flex flex-col gap-1">
                                    <p className="uppercase tracking-wide text-gray-600 font-base font-sans">
                                        Trips for Culture
                                    </p>

                                </div>

                                {/* Right: Stats */}

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
            )}
        </>
    );
}
