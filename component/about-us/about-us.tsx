"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AboutUs() {
    const router = useRouter();
  const features = [
    { icon: CheckCircle2, title: "Great travel experiences?", color: "text-lime-600" },
    { icon: Calendar, title: "Customizable Itinerary", color: "text-lime-600" },
    { icon: TrendingUp, title: "Competitive pricing offers", color: "text-lime-600" },
    { icon: Award, title: "Sustainable travel options ", color: "text-lime-600" },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-bgsubcolor overflow-hidden">
   

      <div className="relative z-10 max-w-7xl lg:ml-60 mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* LEFT IMAGE (smaller with gap) */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-start items-center"
          >
          
            <motion.div
              className="relative flex   rounded-3xl  overflow-hidden shadow-2xl transform-gpu w-[100%] md:w-[80%] lg:w-[75%]"
              whileHover={{ rotateY: 8, rotateX: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src="/The Takila.jpg"
                alt="Traveler hiking"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t " />

          
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
              <motion.p
                className="text-lime-600 font-bold uppercase text-sm font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                About Us
              </motion.p>
            
     

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Explore Bhutan with Lumora Tours and Travels. We light the way to breathtaking views, soul-soothing journeys, and refreshing experiences, wrapped in comfort, safety, and the timeless beauty of Bhutanese culture. 

            </motion.p>

            {/* Features */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ x: 6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  <p className="text-gray-900 font-semibold">{feature.title}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button with shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button className="relative overflow-hidden bg-lime-600 hover:bg-lime-700 text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg group" onClick={()=>router.push("/About-Us")}>
                <span className="relative z-10 flex items-center">
                  READ MORE
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}