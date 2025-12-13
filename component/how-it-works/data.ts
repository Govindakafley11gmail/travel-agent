// data.ts
export type TourData = {
  iconName: "Leaf" | "Users" | "Brain" | "RefreshCw"; // icon key
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
};

export const tours: TourData[] = [
  {
    iconName: "Leaf",
    title: "Eco-Conscious",
    description:
      "Lumora positions to be the champion of eco-conscious travel. With Lumora, travel responsibly, leaving only footprints of wonder. Experience your journey while protecting its nature, culture, and communities.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "Users",
    title: "Client-Oriented",
    description:
      "We listen, we plan, we deliver. Every traveler matters! We craft each experience with you at heart. Lumora is born to serve its client first and make a living later.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "Brain",
    title: "Mindful Experiences",
    description:
      "Lumora is not for an erratic traveller looking for a chaotic/adventurous spontaneity without structure. We bring to you the slow-paced, immersive journeys that inspire reflection, awareness, and connection.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "RefreshCw",
    title: "Evolving",
    description:
      "We are agile and responsive. Our journeys evolve, and so do we—growing with every traveler, every experience, every adventure. We will ensure that this one is better than the last. Does that mean the last one was not worth it? Well, no. Just because we evolve with experience.",
    linkText: "CONTACT US",
    linkHref: "Contact-Us",
  },
];

export const toursOptional: TourData[] = [
  {
    iconName: "Leaf",
    title: "Authentic Journeys",
    description:
      "Step into the heart of Bhutan, where every path, every monastery, and every smile tells a story. We craft experiences that resonate with the soul and linger in memory.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "Users",
    title: "Comfort & Safety",
    description:
      "Travel with peace of mind. From cozy stays to secure, seamless transport, we ensure every moment is as effortless as it is enjoyable.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "Brain",
    title: "Tailored Adventures",
    description:
      "No two travelers are the same, and neither are our tours. Each journey is designed to reflect your dreams, pace, and curiosity, creating memories that are uniquely yours.",
    linkText: "VIEW TOURS",
    linkHref: "All-Trips",
  },
  {
    iconName: "RefreshCw",
    title: "Sustainable & Responsible Tourism",
    description:
      `We honor Bhutan’s land, culture, and people. Every tour nurtures sustainability and responsible travel, leaving a positive impact on communities and preserving the country’s magic for generations to come.                                  
Hash tag: Authenticity • Safety • Personalization • Sustainability`,
    linkText: "CONTACT US",
    linkHref: "Contact-Us",
  },
];
