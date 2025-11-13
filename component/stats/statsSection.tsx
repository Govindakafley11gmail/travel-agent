// components/Stats/StatsSection.tsx
import React from "react";
import StarRating from "./star-rating";
import StatItem from "./stat-item";

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-4">
          <StatItem value="+250" title="Attractive tours" subtitle="around Lumora Tours and Travel" />
          <StatItem value="+1.1M" title="Clients from" subtitle="around the world" />

          {/* Rating Stat */}
          <div className="flex items-center md:flex-row flex-col gap-2">
            <div className="text-gray-900 text-5xl font-bold px-4 py-2 rounded">
              4.9
            </div>
            <div className="text-left">
              <StarRating />
              <div className="text-gray-700 font-medium">On Tripadvisor</div>
            </div>
          </div>

          <StatItem value="+98%" title="Our clients" subtitle="are satisfied" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
