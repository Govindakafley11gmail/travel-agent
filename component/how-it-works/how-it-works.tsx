"use client";

import { motion, Variants } from "framer-motion";
import { Leaf, Users, Brain, RefreshCw } from "lucide-react";
import { TourData, tours } from "./data";

interface ToursSectionProps {
  tours?: TourData[];
  heading?: string;
  subHeading?: string;
}

const iconMap = {
  Leaf: Leaf,
  Users: Users,
  Brain: Brain,
  RefreshCw: RefreshCw,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function ToursSection({
  tours,
  heading,
  subHeading,
}: ToursSectionProps) {
  const toursToRender = tours || [];

  const defaultSubHeading = "Great Experience";
  const defaultHeading = "Why choose us?";

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <p className="uppercase text-green-600 font-medium tracking-wider text-sm mb-2">
        {subHeading || defaultSubHeading}
      </p>
      <h2 className="text-base font-mono font-bold text-gray-900 mb-4">
        {heading=='a'?'':heading || defaultHeading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toursToRender.map((tour, idx) => {
          const Icon = iconMap[tour.iconName];
          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ rotateY: 8, rotateX: -5, scale: 1.09 }}
              className="bg-bgsubcolor shadow-md rounded-sm p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-4">
                <Icon />
              </div>
              <h3 className="text-base font-semibold font-mono mb-2">{tour.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{tour.description}</p>
              <a href={tour.linkHref} className="text-green-500 font-medium text-sm">
                {tour.linkText} →
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
