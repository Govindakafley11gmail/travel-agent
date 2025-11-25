"use client";

import * as React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import { useRouter } from "next/navigation";

interface BlogItem {
  id: number;
  blog_id: number;
  title: string;
  link: string;
  content: string;
  images: string[];
  subcontents?: string[];
  createdAt: string;
}
interface CategoryResponse {
  id: number;
  category: string;
  items: BlogItem[];
}
const BlogSection = () => {
  const [subcontent, setSubcontent] = React.useState<CategoryResponse[]>([]);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getBlogs("Content"));
        const categoryData = response.data.data;
        setSubcontent(categoryData);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">Loading blogs...</div>
    );
  }

  if (subcontent.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">No blog posts found.</div>
    );
  }

  return (
    <section className="w-full bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-mono text-green-600 font-semibold">
            Content
          </h2>
        </div>

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcontent.map((post, index) => (

            <div
              key={index}
              onClick={() => router.push(`/blog-content?id=${post.id}`)}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={post.items[0].images[0]}
                  alt={"hello"}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    const target = e.currentTarget as any;
                    target.src = "/placeholder-blog.jpg";
                  }}
                />
              </div>

              {/* Content */}
              <div className="bg-white rounded-lg shadow min-h-[240px] flex flex-col">
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-green-600 transition">
                    {post.items[0].title}
                  </h3>

                  <p className="text-sm">
                    {post.items[0].content.length > 200
                      ? `${post.items[0].content.slice(0, 200)}...`
                      : post.items[0].content}

                    {post.items[0].content.length > 200 && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/blog-content?id=${post.id}`);
                        }}
                        className="text-green-600 font-medium cursor-pointer ml-2 hover:underline"
                      >
                        Read more
                      </span>
                    )}
                  </p>
                </div>

                {/* Meta */}
                <div className="p-3 flex items-center text-xs text-gray-500 gap-4 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.items[0].createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
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
