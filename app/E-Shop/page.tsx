import Navbar from "@/component/navbar/navbar";
import HeroBanner from "@/component/shopping-ui/layout/HeroBanner";
import SidebarLayout from "@/component/shopping-ui/layout/Sidebar";
import Sidebar from "@/component/shopping-ui/layout/Sidebar";
import Highlights from "@/component/shopping-ui/ui/highlight";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { title } from "process";
import Image from "next/image";
export default function HomePage() {
  return (
    <div>
   

      <div className="grid md:gap-10 md:p-8">
        <SidebarLayout />
        
      </div>
    </div>
  );
}

