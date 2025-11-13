import Navbar from "@/component/navbar/navbar";
import HeroBanner from "@/component/shopping-ui/layout/HeroBanner";
import SidebarLayout from "@/component/shopping-ui/layout/Sidebar";
import Sidebar from "@/component/shopping-ui/layout/Sidebar";
import Highlights from "@/component/shopping-ui/ui/highlight";


export default function HomePage() {
  return (
    <div >
      <div className="grid  gap-6 p-6">
        <SidebarLayout />
      </div>
    </div>
  );
}
