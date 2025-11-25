import { Mountain, Plane } from "lucide-react";

export const customDestinations = [
  {
    id: 1,
    title: "Paro Valley, Bhutan",
    subtitle: "Land of Thunder Dragon",
    description: "Explore ancient monasteries, trek to Tiger's Nest, and immerse in pristine Himalayan culture.",
    discount: "20% OFF",
    image: "🏔️",
    color: "from-orange-600 via-red-700 to-pink-800"
  },
  {
    id: 2,
    title: "Thimphu, Bhutan",
    subtitle: "Capital of Happiness",
    description: "Experience unique blend of tradition and modernity in the world's only carbon-negative capital city.",
    discount: "25% OFF",
    image: "🏛️",
    color: "from-blue-600 via-indigo-700 to-purple-800"
  },
  {
    id: 3,
    title: "Punakha Valley, Bhutan",
    subtitle: "Valley of Bliss",
    description: "Discover stunning dzongs, serene rivers, and lush subtropical valleys in Bhutan's ancient capital.",
    discount: "30% OFF",
    image: "🌸",
    color: "from-emerald-600 via-teal-700 to-cyan-800"
  }
];

// Define your custom deals
export const customDeals = [
  {
    title: "Himalayan Explorer",
    subtitle: "Paro & Thimphu Tour",
    days: "5 Days / 4 Nights",
    price: "$899",
    originalPrice: "$1,199",
    icon: Mountain,
    color: "bg-orange-50"
  },
  {
    title: "Cultural Journey",
    subtitle: "Complete Bhutan Package",
    days: "8 Days / 7 Nights",
    price: "$1,499",
    originalPrice: "$1,999",
    icon: Plane,
    color: "bg-blue-50"
  }
];