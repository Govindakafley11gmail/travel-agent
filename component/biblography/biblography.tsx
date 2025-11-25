"use client";

import { BiblogragphyData } from "@/data/about-data";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Tour {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

export default function BiblograhyComponent() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Header (optional) */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-2xl font-bold text-green-600 mb-3 tracking-tight font-mono">
          Our Mission And Vision
        </h2>
        
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {BiblogragphyData.map((tour, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-5 flex flex-col items-start gap-3 border border-gray-100 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col items-center justify-center self-center text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-xl shadow-sm">
                <tour.icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-3">
                {tour.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {tour.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
