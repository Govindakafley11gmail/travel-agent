"use client";

interface GiftSetsProps {
  content: string;
}

export default function GiftSets({ content }: GiftSetsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white p-4 rounded-2xl flex items-center gap-3">
        <div className="bg-white rounded-full p-2">
          {/* Example icon */}
          🎁
        </div>
        <h2 className="text-2xl font-bold">Gift Sets</h2>
      </div>

      {/* Main content */}
      <div className="mt-6 text-gray-700 text-base space-y-4">
        <p>{content}</p>
        <p>
          Explore our carefully curated gift sets for every occasion. Each set is beautifully packaged
          and perfect for gifting your loved ones.
        </p>
      </div>

      {/* CTA button */}
      <div className="mt-6">
        <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
          Shop Gift Sets
        </button>
      </div>
    </div>
  );
}
