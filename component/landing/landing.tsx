"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookingForm } from "../booking-alert/booking-alert";

interface LandingAttributes {
  maincontainer?: string;
  subContainer?: string;
  contentContainer?: string;
  heading?: string;
  headingstyle?: string;
  alt: string;
  subheading?: string;
  Itinerary?: string;
  image: string;
  subHeadingStyle?: string;
  buttonStyle?: string;
  buttoncontentStyle?: string;
  imagestyle?: string;
}

const Landing: React.FC<LandingAttributes> = ({
  heading,
  subheading,
  Itinerary,
  subContainer,
  maincontainer,
  contentContainer,
  image,
  alt,
  headingstyle,
  subHeadingStyle,
  buttonStyle,
  buttoncontentStyle,
  imagestyle,
}) => {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <div className={`${maincontainer} relative`}>
      {/* Image Section */}
      <div className={`${subContainer} relative`}>
        <div className={`${imagestyle} relative w-full`}>
          <Image
            src={image}
            alt={alt}
            fill
            // height={780}
            // width={780}
            sizes="100vw"
            className="object-cover brightness-90"
            quality={90}
            priority
          />
        </div>

        {/* Overlay Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content Section */}
        <div
          className={`${contentContainer} absolute inset-0 flex flex-col items-center justify-center text-center px-4`}
        >
          {heading && (
            <h1
              className={`${headingstyle} text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg`}
            >
              {heading}
            </h1>
          )}
          {subheading && (
            <p
              className={`${subHeadingStyle} text-lg md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow`}
            >
              {subheading}
            </p>
          )}

          {/* Itinerary Button opens Booking Form */}
          {Itinerary && (
            <Dialog open={openBooking} onOpenChange={setOpenBooking}>
              <button
                onClick={() => setOpenBooking(true)}
                className={`${buttonStyle} bg-green-600 hover:bg-green-700  text-white font-medium rounded-lg px-6 py-3 shadow-md transition duration-300`}
              >
                <h2
                  className={`${buttoncontentStyle} text-base font-semibold tracking-wide`}
                >
                  {Itinerary}
                </h2>
              </button>

              {/* Booking Popup */}
              <DialogContent className="max-w-md rounded-2xl p-6 bg-white">
                <VisuallyHidden>
                  <DialogTitle>Booking Form</DialogTitle>
                </VisuallyHidden>

                {/* Reusable BookingForm component */}
                <BookingForm onClose={() => setOpenBooking(false)} />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
