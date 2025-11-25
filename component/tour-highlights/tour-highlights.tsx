"use client";

import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BorderHorizontal from "../border-horizontal/border-horizontal";

export interface TourHighlight {
  title: string;
  description: string;
}

export interface TourAboutData {
  city: string;
  country: string;
  highlights: TourHighlight[];
  description: string; // plain text with \n for line-breaks
  duration: string;    // e.g., "7 Days, 6 Nights"
  price: string;    
  Season: string;   // e.g., "USD 2200-2500"
}

interface TourAboutProps {
  data: TourAboutData;
}

const TourAbout: React.FC<TourAboutProps> = ({ data }) => {
  const { highlights, description, duration, price, Season } = data;

  // Split description into paragraphs based on double newlines
  const paragraphs = description.split(/\n\s*\n/).filter((p) => p.trim());

  return (
    <Card className="w-full max-w-7xl mx-auto mt-10">
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-serif">
          About This Tour
        </CardTitle>
        <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-4 mr-2" />
      </CardHeader>

      <CardContent className="space-y-8">
        {/* ---------- Duration & Description ---------- */}
        <section>
          <h1 className="text-lg font-semibold mb-3">
            {duration} - {price} <br />
            {Season && (
              <div>
                Best seasons to visit: {Season}
              </div>
            )}
          </h1>

          <h3 className="text-lg font-semibold mb-3">Description</h3>
          <div className="space-y-4 text-sm md:text-base leading-relaxed font-sans">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-4 mr-2" />

        {/* ---------- Highlights ---------- */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Highlights</h3>
          <ul className="space-y-3">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 text-[#00A651] flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <span className="font-medium">{item.title}:</span>{" "}
                  <span className="font-sans">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  );
};

export default TourAbout;
