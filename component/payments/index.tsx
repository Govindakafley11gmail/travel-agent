"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function PaymentCard() {
  return (
    <div className="w-full mx-auto p-6 min-h-screen flex items-center justify-center p-0">
      <Card className="w-full max-w-7xl shadow-xl overflow-hidden bg-white p-0">
        <CardHeader className=" p-5">
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 p-5">
            Payment to Lumora Tours and Travels
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="p-8 lg:p-10 space-y-8 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  How to Send Payments to Bhutan
                </h2>
                <p className="text-lg leading-relaxed">
                  Bhutan’s banking system does not maintain direct correspondent accounts with many international banks. 
                  At Lumora Tours and Travels, we use <strong>Bhutan National Bank (BNB)</strong> as our primary local banking partner. 
                  This is a standard practice across the Bhutanese tourism industry, ensuring smooth and secure international transactions.
                </p>
                <p className="mt-4 text-lg font-bold text-indigo-700">
                  Once you confirm your Bhutan tour with us, we will share the official bank details required to process your payment safely.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Payment Method
                </h2>
                <p className="text-lg leading-relaxed">
                  We offer a convenient and reliable method for sending payments to Bhutan. 
                  If you encounter any difficulties, our team will guide you through the process.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  International Bank Transfer (Wire Transfer)
                </h2>
                <p className="text-lg leading-relaxed">
                  Lumora Tours and Travels accepts payments <strong>exclusively through international bank wire transfer</strong>. 
                  Bhutan National Bank facilitates overseas remittances using its trusted global partner banks.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Supported Currencies & Regions
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">USD</span>
                    <span className="text-gray-600">— USA, Singapore, Thailand, Nepal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">EUR</span>
                    <span className="text-gray-600">— Germany</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">GBP</span>
                    <span className="text-gray-600">— United Kingdom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-bold">JPY</span>
                    <span className="text-gray-600">— Japan</span>
                  </li>
                </ul>
              </section>

              <div className="pt-6 border-t">
                <p className="text-sm italic text-gray-600">
                  <strong>Note:</strong> After completing your transfer, please email us the payment confirmation or bank slip. 
                  This helps us verify and confirm your booking promptly.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-96 lg:h-auto min-h-[500px]">
              <Image
                src="/bnb.png"
                alt="Paro Taktsang (Tiger's Nest Monastery), Bhutan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:from-black/40" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Secure & Trusted Payments</h3>
                <p className="text-sm opacity-90">
                  Your journey to the Land of the Thunder Dragon begins with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}