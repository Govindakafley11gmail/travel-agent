"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";

function Avatar({ children, className = "", ...props }: any) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function AvatarImage(props: any) {
  return <img {...props} className={props.className ?? "w-full h-full object-cover"} />;
}

function AvatarFallback({ children, className = "", ...props }: any) {
  return <span {...props} className={`text-gray-600 font-bold ${className}`}>{children}</span>;
}

export default function ProfileCard() {
  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg rounded-2xl border border-gray-200">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://via.placeholder.com/150" alt="Profile Avatar" />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-semibold">Govinda Prasad Sharma</CardTitle>
        <CardDescription className="text-gray-500 text-center">
          Full Stack Developer | Dashboard Profile
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <span>Email:</span>
          <span>govinda@example.com</span>
        </div>
        <div className="flex justify-between">
          <span>Phone:</span>
          <span>+977 9812345678</span>
        </div>
        <div className="flex justify-between">
          <span>Role:</span>
          <span>Admin</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span className="text-green-500 font-medium">Active</span>
        </div>
        <Button
          variant="outline"
          className="w-full mt-2 flex items-center justify-center gap-2"
        >
          <Edit2 size={16} /> Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
