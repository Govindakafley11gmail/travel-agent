"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function HeroVideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative mt-10 w-full h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bhutan-thimphu-city.jpg"
        alt="Beautiful and romantic view"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm mb-2"
        >
          Lumora Tours and Travel Video
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Beautiful & Romantic
        </motion.h1>

        {/* Play Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="icon"
                className="bg-green-600 hover:bg-green-700 rounded-full w-16 h-16"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
            </DialogTrigger>

            {/* Video Modal */}
            <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
              {/* ✅ Hidden title for accessibility */}
              <VisuallyHidden>
                <DialogTitle>Beautiful & Romantic Video</DialogTitle>
              </VisuallyHidden>

              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1"
                  title="Beautiful & Romantic Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
