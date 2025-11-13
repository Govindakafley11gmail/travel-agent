"use client";

import * as React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";
import { useRouter } from "next/navigation"; // App Router

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  authorImg: string;
}

const BlogSection = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getBlogs("content"));
        const data = response.data.data; // adjust based on your API

        const mappedPosts: BlogPost[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          author: item.author || "Admin",
          date: item.published_at
            ? new Date(item.published_at).getFullYear().toString() // extract year
            : "Unknown",
          readTime: "1 min", // optional, can calculate dynamically
          image:
            item.images && item.images.length > 0
              ? item.images[0]
              : "/default-image.jpg",
          authorImg: item.authorImg || "/default-image.jpg",
        }));

        setPosts(mappedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading blogs...</div>;
  }

  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-sans text-gray-900">
            Content
          </h2>
          <Button
            variant="outline"
            className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2"
          >
            View more
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized // allows external URLs if needed
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title with navigation */}
                <h3
                  className="text-lg font-sans text-gray-900 mb-4 leading-snug cursor-pointer"
                  onClick={() =>
                    router.push(`/blog-content?id=${post.id}`)
                  }
                >
                  {post.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  
                  <div className="text-sm text-gray-700">
                    <p className="font-medium">{post.author}</p>
                    <div className="flex items-center text-gray-500 gap-3 text-xs mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
