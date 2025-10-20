"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Example Card 1 */}
      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Total registered users: <span className="font-semibold">125</span></p>
        </CardContent>
      </Card>

      {/* Example Card 2 */}
      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Monthly revenue: <span className="font-semibold">$12,540</span></p>
        </CardContent>
      </Card>

      {/* Example Card 3 */}
      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Orders this month: <span className="font-semibold">230</span></p>
        </CardContent>
      </Card>
    </div>
  );
}