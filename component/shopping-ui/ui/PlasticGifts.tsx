"use client";

interface PlasticGiftsProps {
  content: string;
}

export default function PlasticGifts({ content }: PlasticGiftsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white p-4 rounded-2xl flex items-center gap-3">
        <div className="bg-white rounded-full p-2">🎁</div>
        <h2 className="text-2xl font-bold">Plastic Gifts</h2>
      </div>

      <div className="mt-6 text-gray-700 text-base space-y-4">
        <p>{content}</p>
        <p>Discover a range of affordable and creative plastic gifts for home and events.</p>
      </div>

      <div className="mt-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
          Shop Plastic Gifts
        </button>
      </div>
    </div>
  );
}
