import AdventuresSection from "@/component/advanture";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home";
import Navbar from "@/component/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HomePage />
      <Destinations />
      <AdventuresSection />
      <Footer />
    </main>
  );
}
