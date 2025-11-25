"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import Sidebar from "@/component/dashboard/sidebar";
import BookingCard from "./booking";
import ContactCard from "./contact";
import Navbar from "./navbar";
import ReviewCard from "./review";
import TripsCard from "./trips-type";
import DashboardContent from "./DashboardContent";
import ProfileCard from "./ProfileCard";
import UserCard from "./UserCard";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  Map,
  Star,
  Mail,
  User,
} from "lucide-react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import BlogCard from "./blog";
import  ProductCard  from "@/component/dashboard/dashboard/products";
import OrderCard from "@/component/dashboard/dashboard/order";


export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [role, setRole] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  // Decode JWT and check role
  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      router.push("/"); // no token → redirect
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload & { role?: string }>(token);
      const userRole = decoded?.role ?? null;

      if (!userRole) {
        router.push("/"); // invalid role → redirect
        return;
      }

      if (userRole.toLowerCase() === "client") {
        router.push("/register"); // client → register
        return;
      }

      // valid admin/Manager/User → allow access
      setRole(userRole);
    } catch (err) {
      console.error("Invalid token:", err);
      router.push("/"); // invalid token → redirect
    }
  }, [router]);

  // Sidebar menu based on role
  const menuItems = useMemo(() => {
    if (role && ["Admin", "Manager", "User"].includes(role)) {
      return [
        { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Users", icon: <Users className="w-5 h-5" /> },
        { name: "Bookings", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Trips", icon: <Map className="w-5 h-5" /> },
        { name: "Reviews", icon: <Star className="w-5 h-5" /> },
        { name: "Contact", icon: <Mail className="w-5 h-5" /> },
        { name: "Product", icon: <User className="w-5 h-5" /> },
        { name: "Orders", icon: <User className="w-5 h-5" /> },
        { name: "Blog", icon: <User className="w-5 h-5" /> },

      ];
    }

    return []; // clients or invalid roles get no menu
  }, [role]);

  // Render main content based on active sidebar item
  const renderContent = () => {
    switch (activeItem.toLowerCase()) {
      case "dashboard":
        return <DashboardContent />;
      case "users":
        return <UserCard />;
      case "bookings":
        return <BookingCard />;
      case "trips":
        return <TripsCard />;
      case "reviews":
        return <ReviewCard />;
      case "contact":
        return <ContactCard />;
    
      case "product":
        return <ProductCard />;
         case "orders":
        return <OrderCard />;
         case "blog":
        return <BlogCard />;
      default:
        return <DashboardContent />;
    }
  };

  // Show loading until role is determined
  if (role === null) {
    // router.push("/")
  }

  return (
    <div className="flex h-screen flex-col md:flex-row bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        menuItems={menuItems}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
        onItemClick={() => setSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col">
        <Navbar
          activeItem={activeItem}
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
        />

        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-950">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
