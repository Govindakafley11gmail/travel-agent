"use client";

import { useState } from "react";
import Sidebar from "@/component/dashboard/sidebar";
import DashboardContent from "@/component/dashboard/DashboardContent";
import UserCard from "@/component/dashboard/UserCard";
import ProfileCard from "@/component/dashboard/ProfileCard";
import { menuItems } from "@/component/dashboard/sidebar";
export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("");

  // Mapping of menu item to content component
  const renderContent = () => {
    switch (activeItem) {
     
      case "dashboard":
        return <DashboardContent />;
      case "user":
        return <UserCard />;
      case "profile":
        return <ProfileCard />;
      case "settings":
        // return <SettingsCard />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}
