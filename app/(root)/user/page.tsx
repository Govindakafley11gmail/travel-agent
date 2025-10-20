"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function Avatar({ children, className = "", ...props }: any) {
  return (
    <div className={`inline-flex items-center justify-center overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
}

function AvatarImage(props: any) {
  return <img {...props} className={props.className ? props.className : "w-full h-full object-cover"} />;
}

function AvatarFallback({ children, className = "", ...props }: any) {
  return <span {...props} className={className}>{children}</span>;
}

import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import Sidebar from "@/component/dashboard/sidebar";

export default function UserCard() {
  return (
    <Card className="max-w-sm mx-auto mt-10 shadow-lg rounded-2xl border border-gray-200">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/avatar.png" alt="User Avatar" />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg font-semibold">Govinda Prasad</CardTitle>
        <CardDescription className="text-gray-500">Full Stack Developer</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <span>Email:</span>
          <span>govinda@example.com</span>
        </div>
        <div className="flex justify-between">
          <span>Role:</span>
          <span>Admin</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <span className="text-green-500 font-medium">Active</span>
        </div>
        <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2">
          <Edit2 size={16} /> Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
