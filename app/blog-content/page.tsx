"use client";

import React, { useEffect, useState } from "react";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

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

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [subcontent, setSubcontent] = useState<CategoryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const idNumber = Number(id);
  const router = useRouter();

  const rotateData = (data: CategoryResponse[]) => {
    return data.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.category,
      }))
    );
  };

  const fetchBlogs = async (id: number) => {
    try {
      const res = await apiClient.get(getApiEndpoint.getBlogById(idNumber));
      const response = await apiClient.get(getApiEndpoint.getBlogs("Content"));
      setSubcontent(response.data.data);
      const rotated = rotateData(res.data.data);
      setBlogs(rotated);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idNumber) {
      fetchBlogs(Number(idNumber));
    }
  }, [idNumber]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-6 py-10 justify-center gap-x-20 mx-auto flex flex-col lg:flex-row xl:flex-row">
      {/* Main Content */}
      <div className="flex-1 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>

        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>

              {/* Images */}
              <div className="mt-4">
                {blog.images.length === 1 && (
                  <Image
                    src={blog.images[0]}
                    height={200}
                    width={400}
                    alt="Blog Image"
                    className="rounded-lg w-full object-cover"
                  />
                )}
                {blog.images.length === 2 && (
                  <div className="flex flex-col sm:flex-row gap-2">
                    {blog.images.map((image, i) => (
                      <Image
                        key={i}
                        src={image}
                        height={200}
                        width={400}
                        alt={`Blog Image ${i + 1}`}
                        className="rounded-lg w-full sm:w-1/2 object-cover"
                      />
                    ))}
                  </div>
                )}
                {blog.images.length >= 3 && (
  <div className="grid grid-cols-2 grid-rows-2 gap-3 h-64 sm:h-80 md:h-96 lg:h-[28rem]">
    
    {/* LEFT — Big Image */}
    <div className="row-span-2 rounded-xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-300">
      <Image
        src={blog.images[0]}
        alt="Blog Image 1"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* TOP-RIGHT */}
    <div className="rounded-xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-300">
      <Image
        src={blog.images[1]}
        alt="Blog Image 2"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* BOTTOM-RIGHT */}
    <div className="rounded-xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-all duration-300">
      <Image
        src={blog.images[2]}
        alt="Blog Image 3"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Optional: Show "+X more" badge if there are more than 3 images */}
      {blog.images.length > 3 && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-2xl font-semibold">
            +{blog.images.length - 3} more
          </span>
        </div>
      )}
    </div>
    
  </div>
)}

              </div>

              {/* Content */}
              <p className="mt-2">{blog.content}</p>

              {/* Subcontents */}
              {blog.subcontents && (
                <div className="mt-3">
                  {blog.subcontents.map((sub, idx) => (
                    <p key={idx} className="text-sm">
                      {idx + 1}. {sub}
                    </p>
                  ))}
                </div>
              )}

              {/* Link */}
              {blog.link && (
                <a
                  href={blog.link}
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  {blog.link}
                </a>
              )}

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Subcontent */}
      <div className="w-full lg:w-80 flex flex-col gap-4 mt-30">
        {subcontent.map((category, index) => (
          <Card
            key={index}
            className="shadow-xl rounded-xl overflow-hidden border border-gray-200 cursor-pointer p-0"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/blog-content?id=${category.id}`);
              fetchBlogs(category.id);
            }}
          >
            <Image
              src={category.items[0].images[0]}
              height={200}
              width={400}
              alt={`title`}
              className="rounded-t-xl w-full object-cover"
            />
            <CardContent className="p-3">
              <h3 className="font-semibold cursor-pointer hover:text-lime-600 hover:underline">
                {category.items[0].title}
              </h3>
              <p className="text-sm">
                {category.items[0].content.length > 200
                  ? `${category.items[0].content.slice(0, 200)}...`
                  : category.items[0].content}

                {category.items[0].content.length > 200 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/blog-content?id=${category.id}`);
                      fetchBlogs(category.id);
                    }}
                    className="text-green-600 font-medium cursor-pointer ml-2 hover:underline"
                  >
                    Read more
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}