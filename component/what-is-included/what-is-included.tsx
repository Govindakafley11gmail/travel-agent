"use client";

import { motion } from "framer-motion";
import {
  LucideIcon,
} from "lucide-react";

export interface IncludedExclusion {
  icon: LucideIcon;
  text: string;
}

interface IncludedExclusionProps {
  textTitle: string;
  data: IncludedExclusion[];
}

const IncludedExclusionComponent: React.FC<IncludedExclusionProps> = ({
  data,
  textTitle,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className=" px-6 lg:px-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <span>{textTitle}</span>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
        >
          {data.map((reason, index) => {
            return (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start gap-4"
              >
                <reason.icon
                  className={`w-7 h-7 text-lime-500 mt-1 flex-shrink-0`}
                />
                <p className="text-gray-600 font-serif text-base leading-snug">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default IncludedExclusionComponent;
