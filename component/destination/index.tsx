"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import imge from "../../image/Paro_Taktsang.jpg"

const destinations = [
  { name: "Noriva", tours: "162 tours", image: imge },
  { name: "Kardal", tours: "127 tours", image: imge },
  { name: "Leront", tours: "155 tours", image: imge },
  { name: "Fruska", tours: "210 tours", image: imge },
]

export default function Destinations() {
  return (
    <section className="px-6 md:px-12 py-12 bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <p className="text-green-600 font-medium uppercase tracking-wide">
            Explore Moliva
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Destinations in Moliva
          </h2>
        </div>
        <p className="text-gray-600 font-medium mt-4 md:mt-0">
          <span className="text-xl font-semibold text-gray-900">+50</span> Attractive destinations
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={500}
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-sm opacity-90">{item.tours}</p>
            </div>
            <div className="absolute bottom-5 right-5 bg-lime-500 text-white p-2 rounded-full">
              <MapPin size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
