"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Main Blog Content */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-semibold leading-snug mb-4">
          How to create an Art that shows the beauty in everyone’s ideas of flaws.
        </h1>

        <p className="text-gray-600 mb-6">
          Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
          elementum, luctus justo ac, purus semper. Donec ipsum faucibus arcu elementum,
          luctus justo ac, purus semper. Donec ipsum faucibus arcu elementum...
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
          For dull and lifeless skin, mix apple juice with honey. Apply a thin layer to your
          face, and leave it for 5 minutes.
          <br />
          <span className="not-italic text-gray-500">— Kelvin Edison</span>
        </blockquote>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent consequat
          condimentum augue, at varius lorem facilisis eget. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <div className="my-6 flex flex-col sm:flex-row gap-4">
          <Image
            src="/images/blog1.jpg"
            alt="Sample Image"
            width={250}
            height={150}
            className="rounded-lg object-cover"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque tempor,
            metus vel elementum ullamcorper, lectus lacus ultricies lorem, ac viverra justo
            magna nec magna. Quisque blandit felis nec leo cursus, nec fringilla justo
            commodo.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Fusce faucibus ante vitae justo efficitur
        </h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
          <li>Quisque sagittis lacus eu lorem sodales</li>
          <li>Donec ipsum faucibus arcu elementum</li>
          <li>Sed at porttitor diam</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Quisque sagittis lacus eu lorem sodales
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, turpis at
          condimentum facilisis, justo purus maximus eros, nec porttitor lacus nisl sit amet
          mauris. Fusce faucibus arcu elementum luctus justo ac purus semper.
        </p>

        {/* Tags and Social Share */}
        <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-3 justify-between items-center text-sm">
          <div className="flex gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Fashion</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Beauty</span>
          </div>
          <div className="flex gap-4 text-gray-500">
            <span>Share:</span>
            <a href="#" className="hover:text-blue-500">Facebook</a>
            <a href="#" className="hover:text-blue-500">Twitter</a>
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10 text-blue-500 text-sm font-medium">
          <a href="#">← Previous Post</a>
          <a href="#">Next Post →</a>
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1 space-y-10">
        {/* About Author */}
        <div className="p-6 border rounded-lg text-center">
          <Image
            src="/images/author.jpg"
            alt="Author"
            width={80}
            height={80}
            className="mx-auto rounded-full mb-3"
          />
          <h3 className="font-semibold text-lg">Isabella</h3>
          <p className="text-gray-500 text-sm">
            I am a Fashion designer, Makeup artist, and Blog writer.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-500 cursor-pointer">Beauty</li>
            <li className="hover:text-blue-500 cursor-pointer">Fashion and Style</li>
            <li className="hover:text-blue-500 cursor-pointer">Food and Wellness</li>
            <li className="hover:text-blue-500 cursor-pointer">Lifestyle</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {[
              {
                title: "4 Ways to feel Great during the Cold Weather",
                date: "June 18, 2020",
                img: "/images/post1.jpg",
              },
              {
                title: "How to Make the Best Homemade Shopkan Veg Bread",
                date: "June 15, 2020",
                img: "/images/post2.jpg",
              },
              {
                title: "How to get Beautiful coloring Highlights this week",
                date: "June 12, 2020",
                img: "/images/post3.jpg",
              },
            ].map((post, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium leading-tight hover:text-blue-500 cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Twitter Feed */}
        <div>
          <h3 className="font-semibold mb-4">Twitter feed</h3>
          <p className="text-sm text-gray-600 mb-2">
            Creating an Art that shows the beauty in everyone’s ideas of flaws.
            <span className="text-blue-500"> #Beauty #Art #Creativity</span>
          </p>
          <p className="text-sm text-gray-600">
            See our lifestyle and beauty posts now.{" "}
            <span className="text-blue-500">#Lifestyle #Beauty</span>
          </p>
        </div>
      </div>
    </div>
  );
}
