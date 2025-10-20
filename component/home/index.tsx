"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import image from "../../image/Paro_Taktsang.jpg"
export default function HomePage() {
  const destinations = [
    {
      title: "Paris, France",
      img: image,
    },
    {
      title: "Tokyo, Japan",
      img: image,
    },
    {
      title: "Bali, Indonesia",
      img: image,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-600 to-green-400 text-white py-20 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Explore the World with{" "}
              <span className="text-yellow-200">Travel Agent</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-green-50">
              Find your next adventure, book your trip, and experience unforgettable
              memories with us.
            </p>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-green-800 font-semibold px-6 py-3 rounded-xl">
              Start Exploring
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src={image}
              alt="Travel"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="flex justify-center py-10 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all"
          >
            Explore Destinations
          </Button>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Popular Destinations
          </h2>
          <p className="text-gray-600 mb-10">
            Discover our most loved travel spots across the globe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <Image
                    src={dest.img}
                    alt={dest.title}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {dest.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Explore & book your dream trip today
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
    </div>
  )
}
