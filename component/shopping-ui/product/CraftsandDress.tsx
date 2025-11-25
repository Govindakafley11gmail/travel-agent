"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";
import { LumoraTravelBanner } from ".";
import { customDestinations, customDeals } from "@/data/e-shop";
import { useCart } from "./cartContext";

interface Product {
  id: number;
  product_name: string;
  category: string;
  description: string;
  original_price: string;
  discount_percent: string;
  final_price: string;
  images: string[];
  createdAt: string;
}

const DEFAULT_IMAGE = "/placeholder-trip.jpg";

// Single Product Card Component
function ProductCard({ product }: { product: Product }) {
  // Parse prices safely
  const displayPrice = parseFloat(product.final_price) || 0;
  const originalPrice = parseFloat(product.original_price) || null;
  const discountPercent = parseFloat(product.discount_percent) || null;
    const { addToCart } = useCart(); // <-- access the cart context

  // Get first image from array
  const imageSrc = product.images && product.images.length > 0 
    ? product.images[0] 
    : DEFAULT_IMAGE;

  // Mock data for demo (since your API doesn't have these fields)
  const location = "Bhutan"; // You can add this to your API
  const rating = 4; // You can add this to your API

  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg dark:bg-gray-900">
      {/* Image */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={product.product_name || "Product image"}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = DEFAULT_IMAGE;
          }}
        />

        {/* Discount badge */}
        {discountPercent && discountPercent > 0 && (
          <span className="absolute left-3 bottom-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {discountPercent}% OFF
          </span>
        )}

        {/* Favorite icon */}
        <button 
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Add to favorites"
        >
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                     4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                     6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs font-medium text-green-500 uppercase">{product.category}</p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.product_name}</h3>

        {/* Duration & Location */}
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mt-1">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> 
            <span className="line-clamp-1">{product.description}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> 
            <span>{location}</span>
          </div>
        </div>

        {/* Star rating */}
      

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ${displayPrice.toFixed(2)}
            </p>
            {discountPercent && originalPrice && originalPrice > displayPrice && (
              <p className="text-sm text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <Button className="bg-green-500 hover:bg-green-600 rounded-full p-3"onClick={() => addToCart({
              ...product,
              quantity: 1,
              stock_quantity: 10,
            })}>
           Add To Card
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main Component - Displays all products
export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await apiClient.get(getApiEndpoint.getproduct("crafts-and-dress"));
        
        // Ensure we have an array
        const productsData = Array.isArray(response.data.data) 
          ? response.data.data 
          : [response.data.data];
        
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <LumoraTravelBanner 
                      destinations={customDestinations}
                      quickDeals={customDeals}
                      companyName="Lumora Tour & Travel"
                      tagline="Discover your next adventure with exclusive deals"
                      autoSlideInterval={5000}
                    />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}