// app/dashboard/page.tsx

import Sidebar from "@/component/dashboard/sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100 overflow-auto">
        <h1 className="text-3xl font-bold mb-5">Welcome to Dashboard</h1>
        <p>This is your dashboard content area.</p>
      </div>
    </div>
  );
}
