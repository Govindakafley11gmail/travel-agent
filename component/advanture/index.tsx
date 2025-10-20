"use client";

import Image from "next/image";
import quizImg from "../../image/Paro_Taktsang.jpg"; // replace with your images
import newArrivalsImg from "../../image/Paro_Taktsang.jpg";
import firstTimersImg from "../../image/Paro_Taktsang.jpg";
import agesImg from "../../image/Paro_Taktsang.jpg";

export default function AdventuresSection() {
  const cards = [
    { title: "✨ Take the quiz", image: quizImg },
    { title: "New arrivals", image: newArrivalsImg },
    { title: "For first-timers", image: firstTimersImg },
    { title: "Ages 45-59", image: agesImg },
  ];

  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl font-semibold mb-4">Adventures worth sharing</h2>
      <p className="text-gray-600 mb-12">
        We'll sort the people, unique experiences, hotels, and guides.<br />
        Find your adventure and just show up.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
        {cards.map((card, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition">
              {card.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
