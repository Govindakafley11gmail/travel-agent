import { TourAboutData } from "@/component/tour-highlights/tour-highlights";
import { Ban, BookOpen, Clock, DollarSign, MapPin, MapPinHouse, Ticket, Users } from "lucide-react";

export const culturalData = [
  {
    day: 1,
    title: "Enjoy the Natural Scenery in the Bay",
    description:
      "Start your adventure by soaking in the stunning natural beauty of the bay. Take a scenic boat tour, explore hidden coves, and relax on pristine beaches...",
  },
  {
    day: 2,
    title: "Hiking and Climbing the Majestic Mountains",
    description: "…",
  },
  // …more days
];
export const tourInfo = [
  { icon: Ticket, typename: "Tour code", value: "NONE" },
  { icon: MapPin, typename: "Start", value: "Paro Town" },
  { icon: MapPinHouse, typename: "End", value: "Thimphu City" },
  { icon: Users, typename: "Type tour", value: "All tour" },
  { icon: Clock, typename: "Age range", value: "Any" },
  { icon: BookOpen, typename: "Language", value: "English" },
  { icon: DollarSign, typename: "Payments", value: "25% Pay" },
  { icon: Ban, typename: "Cancel tour", value: "Yes/Free" },
];

export const defaultItems = [
  {
    day: "Day 1",
    title: "Enjoy the Natural Scenery in the Bay",
    content:
      "Start your journey with stunning coastal views. Explore the pristine beaches, watch the sunset over the bay, and enjoy fresh seafood at local restaurants.",
  },
  {
    day: "Day 2",
    title: "Hiking and Climbing the Majestic Mountains",
    content:
      "Challenge yourself with mountain trails offering breathtaking panoramic views. Professional guides will lead you through scenic routes suitable for various skill levels.",
  },
  {
    day: "Day 3",
    title: "Swim and Experience Adventurous Games",
    content:
      "Dive into crystal-clear waters for swimming, snorkeling, and thrilling water sports. Try kayaking, paddleboarding, or join exciting beach games with fellow travelers.",
  },
  {
    day: "Day 4",
    title: "Explore Primeval Tropical Forests and Wildlife",
    content:
      "Venture into lush tropical forests teeming with diverse wildlife. Spot exotic birds, rare species, and immerse yourself in the rich biodiversity of the region.",
  },
];
export const HoneymoonData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights",       // ✅ dynamic duration
  price: "(USD 1900-2050)",             // ✅ dynamic price
  highlights: [
    {
      title: "Destinations",
      description:
        "• Thimphu • Punakha • Phobjikha",
    },
    {
      title: "Optional Extension",
      description:
        "Haa Valley or Gasa Hot Spring (Hot Stone Bath)",
    },

  ],
  description: `Embark on a romantic honeymoon journey through Bhutan’s most enchanting valleys. This exclusive package blends nature, culture, spirituality, and intimate experiences—designed to give newlyweds a memorable and meaningful escape in the Land of Happiness.`,
};
export const viaPhuentsholingBhutanData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights ",       // ✅ dynamic duration
  price: "(USD-1750-1950)",             // ✅ dynamic price
  highlights: [
    {
      title: "Entry to Bhutan via Phuentsholing",
      description:
        "",
    },
    {
      title: "Scenic drives along rivers, forests, and mountains",
      description:
        "",
    },
    {
      title: "Cultural exploration in Gedu, Paro, and Thimphu",
      description:
        "",
    },

  ],
  description: `Bhutan is one of the safest and most enchanting destinations for families. With clean air, serene landscapes, friendly locals, and cultural experiences that spark curiosity, this itinerary is designed for families seeking quality time together.
Enjoy easy walks, interactive cultural visits, gentle outdoor adventures, and plenty of time for bonding and relaxation.
`,
};
export const eaternBhutanData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "8 Days, 6 Nights",       // ✅ dynamic duration
  price: "(USD-2000-2200)",             // ✅ dynamic price
  highlights: [
    {
      title: "Entry to Bhutan via Samdrup Jongkhar",
      description:
        "",
    },
    {
      title: "Scenic drives along rivers, forests, and mountains",
      description:
        "",
    },
    {
      title: "Cultural exploration in Trashigang, Trashiyangtse, and Pema Gatshel",
      description:
        "",
    },
    {
      title: "Village walks, artisan workshops, and local cuisine experiences",
      description:
        "",
    },
    {
      title: "Visits to monasteries, dzongs, and chortens from the exterior",
      description:
        "",
    },
    {
      title: "Flexible itinerary allowing personal exploration",
      description:
        "",
    }
  ],
  description: `Explore the untouched landscapes and rich culture of Eastern Bhutan over 8 days, entering via Samdrup Jongkhar from Guwahati Airport (India). Visit Trashigang, Trashiyangtse, and Pema Gatshel, experiencing vibrant valleys, historic dzongs, artisan villages, and serene monasteries. The flexible itinerary allows time for photography, cultural immersion, and authentic local experiences.`,
};
export const newTourPackageData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights",       // ✅ dynamic duration
  price: "(USD-1850-2000)",             // ✅ dynamic price
  highlights: [
    {
      title: " 	Village walks and cultural immersion in Paro, Haa, Punakha, and Phobjikha",
      description:
        "",
    },
    {
      title: "Two authentic homestay experiences",
      description:
        "",
    },
    {
      title: "Hands-on activities",
      description:
        "farming, cooking, traditional games",
    },
    {
      title: "Visits to artisan villages and craft communities",
      description:
        "",
    },
    {
      title: "Scenic drives over Chelela Pass and Dochula Pass",
      description:
        "",
    },
    {
      title: " Highland village life exploration in Phobjikha",
      description:
        "",
    },
    {
      title: " 	Organic farmhouse dinners and family interactions",
      description:
        "",
    },
    {
      title: " 	Panoramic Himalayan landscapes and pristine nature walks",
      description:
        "",
    },
  ],
  description: `Bhutan Village Tours invite travelers to step into the peaceful rhythm of rural Bhutan, where daily life remains closely tied to tradition and nature. These journeys offer genuine cultural immersion through interactions with local families, farm experiences, traditional crafts, and scenic walks through terraced fields and forested valleys. Each village presents a unique glimpse into Bhutan’s heritage—its warm hospitality, timeless architecture, and deep-rooted spiritual values. Perfect for those seeking authenticity and quiet exploration, village tours reveal Bhutan’s soul through its people and their harmonious way of living.`,
};
export const culturegastronomyData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "6 Days, 5 Nights",       // ✅ dynamic duration
  price: "(USD-1900-2200)",             // ✅ dynamic price
  highlights: [
    {
      title: "Destinations",
      description:
        " Thimphu – Punakha – Phobjikha – Trongsa – Bumthang – Yongkola (or customizable)",
    },
    {
      title: "Tour Type",
      description:
        "Culture | Gastronomy | Culinary Experiences",
    },

  ],
  description: `This 6-day Bhutan Culture and Gastronomy Tour invites you to experience the kingdom’s timeless heritage, sacred monasteries, and vibrant culinary traditions through an immersive journey across Paro, Thimphu, and Punakha. From exploring ancient temples and majestic dzongs to joining hands-on cooking sessions, farm-to-table experiences, and curated food walks, the tour blends culture and cuisine in perfect harmony. Scenic drives over mountain passes, serene valley walks, and authentic farmhouse dining enhance your connection to Bhutanese life, offering a rich and flavorful introduction to the Land of Happiness.
`,
};
export const dagalatrekData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "8 Days, 7 Nights",       // ✅ dynamic duration
  price: "(USD 1750-2050)",             // ✅ dynamic price
  highlights: [
    {
      title: "Destinations",
      description:
        " Thimphu – Punakha – Phobjikha –",
    },
    {
      title: "Tour Type",
      description:
        "Trekking | Nature | Adventure",
    },

  ],
  description: `The Dagala Thousand Lakes Trek is a stunning high-altitude journey through Bhutan’s pristine landscapes, known for its sparkling alpine lakes, dramatic mountain vistas, remote yak herder settlements, and peaceful trails far from the crowds. Located between Thimphu and Wangdue, this moderately challenging trek takes you across open meadows, rhododendron forests, and ridgelines offering panoramic views of the Himalayan giants—including Mt. Everest, Kanchenjunga, Jichu Drake, Masang Gang, and Tshering Ganga on clear days. Perfect for nature lovers and adventure seekers, the trek blends Bhutan’s natural beauty with serene wilderness and traditional nomadic culture.
`,
};
export const birdsData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "8-12 Days (Flexible)",       // ✅ dynamic duration
  price: "(USD-1550-2200)",             // ✅ dynamic price
  highlights: [
    {
      title: "Destinations",
      description:
        " Thimphu – Punakha – Phobjikha – Trongsa – Bumthang – Yongkola (or customizable)",
    },
    {
      title: "Tour Type",
      description:
        "Birding | Nature | Photography | Wildlife",
    },

  ],
  description: `Bhutan is one of Asia’s best birding destinations, home to over 770 bird species, including rare and endangered Himalayan birds. From lush subtropical forests to high mountain passes, this adventure takes you through diverse habitats rich with colorful pheasants, songbirds, raptors, and migratory species. With expert birding guides, quiet trails, and pristine landscapes, this journey is ideal for avid birders, photographers, and nature lovers.
`,
};
export const easternbhutanbirdsData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "10 Days, 9 Nights",       // ✅ dynamic duration
  price: "USD-1750-2150",             // ✅ dynamic price
  highlights: [
    {
      title: "Destinations",
      description:
        " Samdrup Jongkhar – Trashigang – Trashiyangtse  – Trongsa – Mongar – Yongkola – Bumdeling Wildlife Sanctuary",
    },
    {
      title: "Tour Type",
      description:
        "Birding | Nature | Photography | Wildlife",
    },

  ],
  description: `Option: Customizable
              Best Season: November–May (Peak birding) 
               Eastern Bhutan offers some of the richest bird habitats in the Himalayas, with elevations ranging from subtropical foothills to cool alpine zones. This expedition is designed for passionate birders and nature photographers who want to explore remote valleys, untouched forests, and biodiversity hotspots such as the famous Lingmithang–Yongkola stretch, often called one of the best birding areas in Asia.
You will be accompanied by a guide with birding experience, visit community forests, witness rural lifestyles, and enjoy comfortable accommodations throughout the journey.
`,
};
export const mockTourData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "3 Days, 2 Nights",       // ✅ dynamic duration
  price: "(USD-1850-2000)",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `Discover the magic of Bhutan in this short yet enriching journey designed for those with limited time but a deep sense of curiosity. Over three days, explore the capital city, Thimphu, where tradition meets modernity amidst serene mountain vistas. Visit iconic sites such as the Buddha Dordenma, Tashichho Dzong, and the National Memorial Chorten. Continue to Paro, home to the legendary Taktsang (Tiger’s Nest) Monastery, perched dramatically on a cliffside. Along the way, enjoy glimpses of rural life, colorful prayer flags fluttering in the breeze, and warm Bhutanese hospitality. This itinerary offers a perfect blend of culture, spirituality, and natural beauty—an ideal short escape into the heart of the Himalayas.`,
};
export const raftingTourData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "6 Days, 5Nights",       // ✅ dynamic duration
  price: "USD-1750-2050",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `The Bhutan White Water Rafting Tour blends exhilarating river adventures with immersive cultural experiences in Punakha, Paro, and Thimphu. Known for its pristine rivers, Bhutan offers safe yet exciting rafting opportunities suitable for beginners and adventure enthusiasts alike. Float through the turquoise waters of the Pho Chhu and Mo Chhu Rivers, navigate gentle-to-moderate rapids, pass traditional farming villages, and enjoy dramatic views of Punakha Dzong—the country’s most beautiful fortress. This tour is perfect for those seeking an adventurous twist to their Bhutan journey.`,
};
export const generalFestivalData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",
  duration: "6-8 Days (Flexible)",       // ✅ dynamic duration
  price: "(USD 1450-2000)",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `The Tshechu Festival is Bhutan’s most important annual religious celebration, held in every district during different months of the year. Dedicated to Guru Padmasambhava, Tshechus feature sacred mask dances, colorful costumes, traditional music, blessings, and vibrant community gatherings. This tour allows visitors to experience the deep spiritual and cultural essence of Bhutan while exploring its scenic valleys, monasteries, and fortresses.`,
};
export const introBhutanData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",
  duration: "6 Days / 5 Nights",       // ✅ dynamic duration
  price: "(US $1850–2150)",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `A perfect first-timer package that blends culture, nature, cuisine, and authentic Bhutanese village life.

The Intro Bhutan Tour is a compact yet enriching journey designed for first-time visitors seeking a meaningful taste of Bhutan. In just six days, the tour seamlessly combines sacred monasteries, majestic fortresses, scenic valleys, vibrant markets, and authentic rural experiences. A special highlight is the immersive farmstay, offering a rare opportunity to experience Bhutanese hospitality, traditional cooking, agriculture, and daily village life. Perfect for travelers seeking a deeper connection to Bhutan—the Land of Happiness—this tour promises unforgettable memories and a warm cultural welcome.
`,
};
export const familyTourData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights",       // ✅ dynamic duration
  price: "(USD-1650-1850)",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `Bhutan is one of the safest and most enchanting destinations for families. With clean air, serene landscapes, friendly locals, and cultural experiences that spark curiosity, this itinerary is designed for families seeking quality time together.
Enjoy easy walks, interactive cultural visits, gentle outdoor adventures, and plenty of time for bonding and relaxation.
`,
};
export const bumthangTourData: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights",       // ✅ dynamic duration
  price: "USD 2000-2200",             // ✅ dynamic price
  highlights: [
    {
      title: "Visit the sacred Jambay Lhakhang",
      description:
        "One of Bhutan’s oldest temples (7th century).",
    },
    {
      title: "Explore Kurje Lhakhang",
      description:
        "Where Guru Rinpoche left his body imprint on a rock.",
    },
    {
      title: "Stroll through Jakar Dzong",
      description:
        "Known as the “Castle of the White Bird.”",
    },
    {
      title: "Discover Tamzhing Monastery",
      description:
        "Home to ancient frescoes and sacred relics.",
    },
    {
      title: "Relax at Mebar Tsho (The Burning Lake)",
      description:
        "A site of profound spiritual importance.",
    },
    {
      title: "Visit local farms and cheese factories ",
      description:
        "For a taste of Bumthang’s countryside life.",
    },
    {
      title: "Enjoy scenic walks through Chokhor Valley",
      description:
        "Surrounded by apple orchards and buckwheat fields.",
    },
  ],
  description: `Often called the “spiritual heartland of Bhutan,” Bumthang is a region blessed with sacred monasteries, ancient temples, and breathtaking valleys. This special package invites you to experience the authentic Bhutanese culture, spirituality, and scenic beauty that define Bumthang’s timeless charm.`,
};
export const ParoTshechu: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "Days, 2 Nights ",       // ✅ dynamic duration
  price: "USD: 1900-2200",             // ✅ dynamic price
  highlights: [
    {
      title: "Thimphu City Exploration",
      description:
        "Discover Bhutan’s charming capital, where traditional architecture blends seamlessly with modern life. Visit the Buddha Dordenma statue, Tashichho Dzong, and local markets.",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience Bhutanese traditions through visits to monasteries, museums, and craft centers showcasing the country’s art, textiles, and heritage.",
    },
    {
      title: "Paro Valley Sightseeing",
      description:
        "Wander through the scenic Paro Valley, known for its lush landscapes, ancient temples, and serene atmosphere.",
    },
    {
      title: "Hike to Tiger’s Nest Monastery (Taktsang)",
      description:
        "Embark on a memorable trek to Bhutan’s most iconic landmark, dramatically perched on a cliff overlooking the Paro Valley.",
    },
    {
      title: "Breathtaking Himalayan Landscapes",
      description:
        "Enjoy panoramic mountain views, prayer-flag-strewn passes, and tranquil moments surrounded by the pristine natural beauty of the Himalayas.",
    },
  ],
  description: `Accommodation: 3* Hotel, Twin Sharing
                A Tshechu is a religious festival in Bhutan, meaning the “tenth day,” celebrated annually at dzongs, monasteries, and temples to honor Guru Rinpoche, the second Buddha. The festival features masked dances, music, rituals, and the unfurling of the sacred Thongdrol, which is believed to cleanse sins and bring blessings. Tshechus range from major, widely attended celebrations to smaller, remote festivals, offering visitors a vibrant and intimate glimpse into Bhutan’s rich culture, traditions, and spirituality. Likewise, Paro Tshechu is one of Bhutan’s most celebrated festivals, held annually in March or April at Paro Dzong.
`,
};
export const FeelBhutanTour: TourAboutData = {
  city: "Thimphu",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "5 Days, 4 Nights",       // ✅ dynamic duration
  price: "USD-1850-2200",             // ✅ dynamic price
  highlights: [
    {
      title: "Hike to the Iconic Taktsang (Tiger’s Nest) Monastery: ",
      description:
        "perched dramatically on a cliff above Paro Valley.",
    },
    {
      title: "Explore Bhutan’s living culture and heritage: ",
      description:
        "through visits to ancient dzongs, temples, and traditional craft centers.",
    },
    {
      title: "Enjoy an authentic folk music and cultural dance performance",
      description:
        "showcasing Bhutan’s vibrant traditions.",
    },
    {
      title: "Experience Bhutan’s stunning natural beauty at Dochula Pass and Punakha Valley",
      description:
        "surrounded by serene landscapes and Himalayan views.",
    },

  ],
  description: `Accommodation: 3* Hotel, Twin Sharing
Experience the true essence of Bhutan in this 4-day journey that beautifully blends nature, culture, and heritage. From the tranquil valleys of Thimphu and Punakha to the spiritual heights of Paro’s Tiger’s Nest, this tour offers a heartfelt glimpse into Bhutan’s timeless charm. Discover ancient monasteries, traditional arts and crafts, vibrant folk music, and breathtaking Himalayan landscapes — all while connecting deeply with the country’s warm people and rich traditions. Let the Feel Bhutan Tour awaken your senses and leave you with memories of peace, joy, and cultural wonder.
`,
};

export const oneWeekInBhutan: TourAboutData = {
  city: "Noriva",
  country: "Bhutan",
  Season: "Autumn and Spring",

  duration: "7 Days, 6 Nights",       // ✅ dynamic duration
  price: "USD 2200-2500",             // ✅ dynamic price
  highlights: [
    {
      title: "Hike to the Iconic Taktsang (Tiger’s Nest) Monastery",
      description:
        "Ascend to Bhutan’s most sacred site, dramatically perched on a cliffside above Paro Valley. The hike rewards you with breathtaking views and a deep spiritual connection.",
    },
    {
      title: "Cultural Exploration of Thimphu and Punakha",
      description:
        "Immerse yourself in Bhutan’s living culture as you visit grand fortresses, bustling markets, and sacred temples that echo centuries of Buddhist tradition.",
    },
    {
      title: "Scenic Drive via Dochula Pass",
      description:
        "Travel across Dochula Pass, adorned with 108 memorial chortens and panoramic Himalayan vistas — a serene and awe-inspiring stop along the journey.",
    },
    {
      title: "Phobjikha Valley Experience",
      description:
        "Discover the enchanting glacial valley of Phobjikha, home to the renowned Gangtey Monastery and, if lucky, the graceful black-necked cranes that migrate here each winter.",
    },
    {
      title: "Authentic Bhutanese Hospitality & Local Encounters",
      description:
        "Experience Bhutan’s warmth through local interactions, traditional cuisine, and a soothing hot stone bath — moments that leave lasting impressions of the kingdom’s gentle spirit.",
    },
  ],
  description: `Discover the essence of Bhutan in just seven unforgettable days. This journey blends cultural immersion with soft adventure — from exploring ancient fortresses and serene monasteries to hiking the iconic Tiger’s Nest and wandering through the tranquil Phobjikha Valley. Experience Bhutan’s pristine nature, timeless traditions, and warm hospitality as you travel from Paro to Thimphu, Punakha, and beyond. Experience a soul-stirring journey to the Kingdom of Happiness with Lumora Tours and Travels. Our One Week Bhutan Tour offers a thoughtfully crafted glimpse into Bhutan’s timeless beauty, where every moment celebrates peace, culture, and stunning natural landscapes. The trip’s main highlights include:`,
};


export const photoSets = {
  Gallery1: [
    {
      id: 1,
      url: "Beautiful Valley.jpg",
      alt: "Mountain peak at sunset",
      span: "row-span-2"
    },
    {
      id: 2,
      url: "Beautiful Dzong.jpg",
      alt: "Mossy landscape with stone",
      span: ""
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
      alt: "Person on mountain edge",
      span: ""
    },
    {
      id: 4,
      url: "Dochula_overview.jpg",
      alt: "Tropical island aerial view",
      span: ""
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
      alt: "Fjord with hiker",
      span: ""
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: "Canyon with river",
      span: ""
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      alt: "Hiker on mountain peak",
      span: ""
    },
    {
      id: 8,
      url: "chorten.jpg",
      alt: "Rice terraces",
      span: ""
    }
  ],
  Gallery2: [
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      alt: "Starry night sky",
      span: "col-span-2"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      alt: "Mountain lake reflection",
      span: ""
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      alt: "Forest path",
      span: ""
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      alt: "Misty mountains",
      span: ""
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
      alt: "Northern lights",
      span: ""
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      alt: "Mountain valley",
      span: ""
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
      alt: "Snowy peaks",
      span: ""
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      alt: "Forest lake",
      span: ""
    }
  ],
  Gallery3: [
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      alt: "Tropical beach",
      span: "row-span-2"
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
      alt: "Ocean waves",
      span: ""
    },
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
      alt: "Sandy shore",
      span: ""
    },
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      alt: "Sunset over water",
      span: ""
    },
    {
      id: 21,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      alt: "Island paradise",
      span: ""
    },
    {
      id: 22,
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
      alt: "Coastal cliffs",
      span: ""
    },
    {
      id: 23,
      url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80",
      alt: "Beach footprints",
      span: ""
    },
    {
      id: 24,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      alt: "Tropical waters",
      span: ""
    }
  ]
};
