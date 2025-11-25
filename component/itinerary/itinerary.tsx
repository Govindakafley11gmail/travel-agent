"use client";

import Image from "next/image";

interface DayProps {
  dayNumber: string;
  title: string;
  content: string | string[]; // ✅ Can now accept either a string or an array of strings
  leftImages?: { src: string; alt: string }[];
  rightImage?: string; // ✅ Optional
}

export default function ItineraryDay({
  dayNumber,
  title,
  content,
  leftImages,
  rightImage,
}: DayProps) {
  return (
    <div className="space-y-0 md:space-y-1 px-4 md:px-8">
      {/* Header */}
      <header className="font-medium text-green-600">
        <p className="text-xl font-medium">{dayNumber}</p>
        <h1 className="text-xl md:text-xl font-mono text-gray-900">{title}</h1>
      </header>

      {/* Bullet Points */}
      {Array.isArray(content) ? (
        <ul className="space-y-0 md:space-y-0 text-gray-700 pl-4 md:pl-8">
          {content.map((point, idx) => (
            <li key={idx} className="relative pl-6">
              <span className="absolute left-0  w-2  bg-lime-500 rounded-full"></span>
              <span
                dangerouslySetInnerHTML={{ __html: point }}
                className="font-sans text-base"
              />
            </li>
          ))}
        </ul>
      ) : (
        // ✅ Render a paragraph if it's a single string
        <p
          className="text-gray-700 font-sans text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Image Section */}
      {(leftImages || rightImage) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left stacked images */}
          {leftImages && (
            <div className="flex flex-col gap-4">
              {leftImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Right single image */}
          {rightImage && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg h-[550px]">
              <Image
                src={rightImage}
                alt="Right Image"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
