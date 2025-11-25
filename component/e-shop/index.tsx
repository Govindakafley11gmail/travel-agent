"use client";

import Image from "next/image";

interface EshopSectionProps {
  subtitle: string;
  backgroundImage: string;
}

export default function EShopSection({
  subtitle,
  backgroundImage,
}: EshopSectionProps) {
  return (
    <section className="relative w-full max-w-10xl h-[25vh] mx-auto md:h-[45vh] flex items-center justify-center overflow-hidden rounded-xl ">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={subtitle}
        fill
        className="object-cover brightness-75"
        priority
      />
    </section>
  );
}