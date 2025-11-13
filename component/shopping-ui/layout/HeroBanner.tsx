"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroBanner() {
  return (
    <Card className="relative overflow-hidden rounded-2xl shadow-md">
      <CardContent className="flex items-center justify-between px-10 py-12 bg-gray-50">
        <div className="space-y-4">
          <p className="text-pink-600 font-medium">Accessories</p>
          <h2 className="text-4xl font-bold">
            Up to <span className="text-pink-600">35% Off</span> <br /> latest
            Creations
          </h2>
        </div>
        <Image
          src="/clock.png"
          alt="Clock"
          width={300}
          height={300}
          className="object-contain"
        />
      </CardContent>
    </Card>
  );
}
