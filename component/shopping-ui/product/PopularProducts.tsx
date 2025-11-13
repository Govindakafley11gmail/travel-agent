"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { useCart } from "./cartContext";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

interface Product {
  id: number;
  product_name: string;
  final_price: number;
  images: string[];
  category: "popular" | "sale" | "best" | "new";
  rating?: number;
}

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
          const response = await apiClient.get(getApiEndpoint.getproduct());
         setProducts(response.data.data);
     
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
 

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setSelectedProduct(null); // close modal
  };

  const filteredProducts = products.filter((product) => {
    if (activeTab === "all") return true;
    if (activeTab === "popular") return product.category === "popular";
    if (activeTab === "on-sale") return product.category === "sale";
    if (activeTab === "best-rated") return product.category === "best";
    return true;
  });

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Navbar with Cart Count */}
      <div className="space-y-12">
        {/* Header Tabs */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular <span className="text-pink-500">Products</span>
          </h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 sm:grid-cols-4 sm:w-auto">
              <TabsTrigger value="all" className="border-b-2 border-transparent pb-3 text-sm font-medium data-[state=active]:border-pink-500 data-[state=active]:text-pink-500">
                All Products
              </TabsTrigger>
              <TabsTrigger value="popular" className="border-b-2 border-transparent pb-3 text-sm font-medium text-gray-600 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500">
                Popular
              </TabsTrigger>
              <TabsTrigger value="on-sale" className="border-b-2 border-transparent pb-3 text-sm font-medium text-gray-600 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500">
                On Sale
              </TabsTrigger>
              <TabsTrigger value="best-rated" className="border-b-2 border-transparent pb-3 text-sm font-medium text-gray-600 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500">
                Best Rated
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <ProductGridSkeleton />
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-xl bg-white p-6 max-w-sm w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold">{selectedProduct.product_name}</h3>
            <Image
              src={selectedProduct.images[0]}
              alt={selectedProduct.product_name}
              width={300}
              height={300}
              className="my-4 rounded"
            />
            <p className="text-lg font-semibold text-gray-900">${selectedProduct.final_price}</p>
            <Button className="mt-4 w-full" onClick={() => handleAddToCart(selectedProduct)}>
              Confirm Add to Cart
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

// Product Card Component
function ProductCard({
  product,
  setSelectedProduct,
}: {
  product: Product;
  setSelectedProduct: (product: Product) => void;
}) {
  const isOnSale = product.category === "sale";
  const isNew = product.category === "new";

  return (
    <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-900">
      {isOnSale && <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">SALE</span>}
      {isNew && <span className="absolute left-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">NEW</span>}

      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-800">
          <Image
            src={product.images[0]}
            alt={product.product_name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
        </div>

        <div className="space-y-2 p-4 text-center">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-700 dark:text-gray-300">{product.product_name}</h3>
          <div className="flex items-center justify-center gap-2">
            {isOnSale && <span className="text-sm text-gray-500 line-through dark:text-gray-500">${product.final_price + 20}</span>}
            <p className="text-lg font-bold text-gray-900 dark:text-white">${product.final_price}</p>
          </div>
          <Button className="w-full mt-2" onClick={() => setSelectedProduct(product)}>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Skeleton Loader
function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {[...Array(10)].map((_, i) => (
        <Card key={i} className="overflow-hidden rounded-2xl">
          <CardContent className="p-0">
            <Skeleton className="aspect-square w-full rounded-none" />
            <div className="space-y-3 p-4">
              <Skeleton className="h-4 w-4/5 mx-auto" />
              <Skeleton className="h-6 w-16 mx-auto" />
              <Skeleton className="h-8 w-full mx-auto mt-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
