import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Plane, Mountain, Palmtree } from 'lucide-react';

// Default destinations data

interface Destination {
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  color: string;
  image: string;
}

interface QuickDeal {
  title: string;
  subtitle: string;
  days: string;
  price: string;
  originalPrice: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface LumoraTravelBannerProps {
  destinations?: Destination[];
  quickDeals?: QuickDeal[];
  autoSlideInterval?: number;
  companyName?: string;
  tagline?: string;
}

export function LumoraTravelBanner({ 
  destinations = [],
  quickDeals = [],
  autoSlideInterval = 5000,
  companyName = "",
  tagline = ""
}: LumoraTravelBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  // Auto-slide effect
  useEffect(() => {
    if (autoSlideInterval > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
      }, autoSlideInterval);

      return () => clearInterval(timer);
    }
  }, [destinations.length, autoSlideInterval]);

  const currentDestination = destinations[currentSlide];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
       {companyName&& (
        <div>
<h1 className="text-3xl font-bold text-gray-900 mb-2">{companyName}</h1>
        <p className="text-gray-600">{tagline}</p>
        </div>

       )} 
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Banner - Featured Destination */}
        <Card className={`lg:col-span-2 bg-gradient-to-br ${currentDestination.color} border-0 overflow-hidden group cursor-pointer`}>
          <CardContent className="p-8 sm:p-12 relative min-h-[400px] flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 text-9xl">{currentDestination.image}</div>
              <div className="absolute bottom-10 left-10 text-7xl opacity-50">{currentDestination.image}</div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                  {currentDestination.discount}
                </div>
                <div className="text-white/80 text-sm font-medium tracking-wide">
                  LIMITED TIME OFFER
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {currentDestination.title}
              </h1>
              <p className="text-xl text-white/90 mb-4 font-light">
                {currentDestination.subtitle}
              </p>
              <p className="text-gray-100 text-base sm:text-lg mb-8 max-w-lg">
                {currentDestination.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Flexible Dates</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Group Discounts</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base rounded-full font-semibold shadow-xl"
              >
                Book Now
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Quick Deals */}
        <div className="flex flex-col gap-4">
          {quickDeals.map((deal, index) => {
            const IconComponent = deal.icon;
            return (
              <Card key={index} className={`${deal.color} border-0 flex-1 hover:shadow-lg transition-shadow cursor-pointer group`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                          Hot Deal
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {deal.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {deal.subtitle}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-600">{deal.days}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                          {deal.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {deal.originalPrice}
                        </span>
                      </div>
                    </div>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComponent className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Demo component showing how to use with custom props
// export default function App() {
//   // Example: Custom destinations
//   const myCustomDestinations = [
//     {
//       title: "Hawaii Dreams",
//       subtitle: "Island Paradise",
//       description: "Volcanic landscapes, pristine beaches, and the spirit of Aloha await you in this Pacific paradise.",
//       discount: "45% OFF",
//       color: "from-orange-500 to-red-600",
//       image: "🌺"
//     },
//     {
//       title: "Santorini Sunset",
//       subtitle: "Greek Islands",
//       description: "White-washed buildings, blue domed churches, and stunning sunsets over the Aegean Sea.",
//       discount: "38% OFF",
//       color: "from-blue-400 to-cyan-600",
//       image: "🏛️"
//     },
//     {
//       title: "Safari Adventure",
//       subtitle: "African Wildlife",
//       description: "Witness the Big Five in their natural habitat on an unforgettable safari experience.",
//       discount: "42% OFF",
//       color: "from-yellow-600 to-orange-700",
//       image: "🦁"
//     }
//   ];

//   // Example: Custom quick deals
//   const myCustomDeals = [
//     {
//       title: "Dubai",
//       subtitle: "Luxury Experience",
//       days: "6 Days / 5 Nights",
//       price: "$1,599",
//       originalPrice: "$2,799",
//       color: "bg-gradient-to-br from-amber-50 to-yellow-50",
//       icon: Plane
//     },
//     {
//       title: "Norway",
//       subtitle: "Fjords Tour",
//       days: "8 Days / 7 Nights",
//       price: "$1,899",
//       originalPrice: "$3,199",
//       color: "bg-gradient-to-br from-blue-50 to-indigo-50",
//       icon: Mountain
//     },
//     {
//       title: "Caribbean",
//       subtitle: "Island Hopping",
//       days: "10 Days / 9 Nights",
//       price: "$1,499",
//       originalPrice: "$2,499",
//       color: "bg-gradient-to-br from-teal-50 to-emerald-50",
//       icon: Palmtree
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Example 1: Using default data */}
//       <LumoraTravelBanner />
      
//       <div className="h-12"></div>
      
//       {/* Example 2: Using custom destinations and deals */}
//       <LumoraTravelBanner 
//         destinations={myCustomDestinations}
//         quickDeals={myCustomDeals}
//         companyName="Dream Vacations"
//         tagline="Your journey begins here"
//         autoSlideInterval={4000}
//       />
//     </div>
//   );
// }