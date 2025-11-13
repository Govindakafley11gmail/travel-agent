"use client";

import * as React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  published_at: string;
  content: string;
  image: string;
  authorImg: string;
}

const BlogContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // blog ID from query
  const titleParam = searchParams.get("title"); // optional, for display
  const [blog, setBlog] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        console.log(id)
        const response = await apiClient.get(getApiEndpoint.getBlogs(undefined,id));
        const data = response.data.data[0];

        const mappedBlog: BlogPost = {
          id: data.id,
          title: data.title,
          author: data.author || "Admin",
          published_at: data.published_at || "Unknown",
          content: data.content || "",
          image:
            data.images && data.images.length > 0
              ? data.images[0]
              : "/Beautiful Dzong.jpg",
          authorImg: data.authorImg || "/Beautiful Dzong.jpg",
        };

        setBlog(mappedBlog);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Blog Image */}
        <div className="relative w-full h-96">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">{blog.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
         
            <div className="text-sm text-gray-700">
              <p className="font-medium">{blog.author}</p>
              <div className="flex items-center text-gray-500 gap-3 text-xs mt-1">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {blog.published_at
                    ? new Date(blog.published_at).getFullYear()
                    : "Unknown"}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> 1 min
                </span>
              </div>
            </div>
          </div>

          {/* Blog Text */}
          <div className="text-gray-700 leading-relaxed space-y-6">
            {blog.content.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
