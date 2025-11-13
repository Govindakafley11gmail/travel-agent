import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Highlights() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="/handmade.png"
            alt="Handmade"
            width={120}
            height={120}
            className="rounded-lg"
          />
          <div>
            <p className="text-sm text-pink-600 font-semibold">Hand made</p>
            <h3 className="text-lg font-semibold">
              New Modern Stylist Crafts
            </h3>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="flex items-center gap-4 p-4">
          <Image
            src="/energy.png"
            alt="Energy"
            width={120}
            height={120}
            className="rounded-lg"
          />
          <div>
            <p className="text-sm text-pink-600 font-semibold">Popular</p>
            <h3 className="text-lg font-semibold">
              Energy with our newest collection
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
