"use client";

import { motion, Variants } from "framer-motion";
import { User, Briefcase, ShoppingBag } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { tours } from "./data";

interface Tour {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

export default function ToursSection() {
  // ✅ define tours array HERE in the same client file

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="uppercase text-green-600 font-medium tracking-wider text-sm mb-2">
            Great Experience
          </p>
          <h2 className="text-base font-mono font-bold text-gray-900 mb-4">
            Why choose us?
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       

        {tours.map((tour, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ rotateY: 8, rotateX: -5, scale: 1.09 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-bgsubcolor shadow-md rounded-sm p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-4">
              <tour.icon />
            </div>
            <h3 className="text-base font-semibold font-mono mb-2">
              {tour.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 font-sans">
              {tour.description}
            </p>
            <a
              href={tour.linkHref}
              className="text-green-500 font-medium text-sm "
            >
              {tour.linkText} →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
