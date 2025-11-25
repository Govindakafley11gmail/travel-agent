
"use client";




import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, Heart, Share2, ShoppingBag } from "lucide-react";
import { useCart } from "@/component/shopping-ui/product/cartContext";
import { useState } from "react";
import CheckoutDialog from "./form";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
    const [checkoutOpen, setCheckoutOpen] = useState(false);
  const router = useRouter();

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + Number(item.final_price) * (item.quantity || 1);
        }, 0);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <div className="min-h-screen bg-gray-50 py-8 overflow-y-auto">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
                    {cartItems.length > 0 && (
                        <Button
                            variant="outline"
                            onClick={clearCart}
                            className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                            Clear Cart
                        </Button>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items Section */}
                    <div className="flex-1 space-y-4">
                        {/* Price Header - Desktop Only */}
                        {cartItems.length > 0 && (
                            <div className="hidden lg:flex justify-end mb-4 pr-4">
                                <span className="text-lg font-semibold text-gray-700">Price</span>
                            </div>
                        )}

                        {cartItems.length === 0 ? (
                            <Card className="p-12 text-center">
                                <div className="flex flex-col items-center gap-4">
                                    <ShoppingBag className="h-16 w-16 text-black" />
                                    <p className="text-lg text-gray-500">Your cart is empty</p>
                                    <Button className="mt-4  bg-gradient-to-r from-green-500 to-green-700" onClick={() => router.push("E-Shop")}>
                                        Continue Shopping
                                    </Button>
                                </div>
                            </Card>
                        ) : (
                            cartItems.map((item, index) => (
                                <Card key={`${item.id}-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <CardContent className="p-4 md:p-6">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            {/* Product Image */}
                                            <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.images[0]}
                                                    alt={item.product_name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 space-y-3">
                                                {/* Title and Price Row */}
                                                <div className="flex justify-between items-start gap-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
                                                            {item.product_name}
                                                        </h3>
                                                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                                            {item.category}
                                                        </span>
                                                    </div>

                                                    {/* Price - Desktop */}
                                                    <div className="hidden lg:block text-right">
                                                        <p className="text-2xl font-bold text-gray-900">
                                                            ${parseFloat(item.final_price).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                    {item.description}
                                                </p>

                                                {/* Stock Status */}
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                        <span className="text-sm font-medium text-green-700">In Stock</span>
                                                    </div>
                                                </div>

                                                {/* Discount Badge */}
                                                {parseFloat(item.discount_percent) > 0 && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-500 line-through">
                                                            ${parseFloat(item.original_price).toFixed(2)}
                                                        </span>
                                                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">
                                                            {parseFloat(item.discount_percent).toFixed(0)}% OFF
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Stock Info */}
                                                {item.stock_quantity && (
                                                    <div className="flex flex-wrap gap-4 text-sm">
                                                        <span className="text-gray-600">
                                                            <span className="font-medium">Stock:</span> {item.stock_quantity} units available
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Actions Row */}
                                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                                    {/* Quantity Selector */}
                                                    <div className="flex items-center border-2 border-green-400 rounded-full overflow-hidden">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                                            disabled={(item.quantity || 1) <= 1}
                                                            className="h-8 w-8 rounded-none hover:bg-yellow-50"
                                                        >
                                                            <Minus className="h-4 w-4" />
                                                        </Button>
                                                        <span className="px-4 text-sm font-semibold">{item.quantity || 1}</span>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                                            disabled={item.stock_quantity ? (item.quantity || 1) >= item.stock_quantity : false}
                                                            className="h-8 w-8 rounded-none hover:bg-yellow-50"
                                                        >
                                                            <Plus className="h-4 w-4" />
                                                        </Button>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1" />
                                                        Delete
                                                    </Button>

                                                    {/* <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                            <Heart className="h-4 w-4 mr-1" />
                            Save
                          </Button>

                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button> */}
                                                </div>

                                                {/* Price - Mobile */}
                                                <div className="lg:hidden pt-2 border-t">
                                                    <p className="text-xl font-bold text-gray-900">
                                                        ${parseFloat(item.final_price).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>

                    {/* Subtotal Sidebar */}
                    {cartItems.length > 0 && (
                        <div className="lg:w-80 mt-10">
                            <Card className="sticky top-4">
                                <CardContent className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-base">
                                            <span className="text-gray-600">Items ({totalItems}):</span>
                                            <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-base">
                                            <span className="text-gray-600">Shipping:</span>
                                            <span className="font-semibold text-green-600">FREE</span>
                                        </div>
                                        <div className="flex justify-between text-base">
                                            <span className="text-gray-600">Tax:</span>
                                            <span className="font-semibold">${(calculateSubtotal() * 0.1).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-10">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-semibold">Total:</span>
                                            <span className="text-2xl font-bold text-gray-900">
                                                ${(calculateSubtotal() * 1.1).toFixed(2)}
                                            </span>
                                        </div>
                                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold h-12" onClick={() => setCheckoutOpen(true)}>
                                            Proceed to Checkout
                                        </Button>
                                    </div>
                                    <CheckoutDialog
                                        open={checkoutOpen}
                                        onClose={() => setCheckoutOpen(false)}
                                        subtotal={totalItems}
                                        total={(calculateSubtotal() * 1.1).toFixed(2)}
                                    />


                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}