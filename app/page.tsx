import AboutUs from "@/component/about-us/about-us";
import AdventuresSection from "@/component/advanture";
import Destinations from "@/component/destination";
import Footer from "@/component/footer";
import HomePage from "@/component/home";
import Navbar from "@/component/navbar/navbar";
import WhyChooseUs from "@/component/why-us/why-us";
import TripsForFistTimer from "./pages/trips-for-first-timer";
import image1 from "@/public/image1.jpg";
import TouristTalkAboutUs from "@/component/tourist-talk-aboutus";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HomePage />
      <AboutUs />
      
      {/* <ToursSection /> */}
      <TripsForFistTimer />
      <WhyChooseUs/>
      <Destinations
        title={"Lumora Tours and Travel video"}
        subtitle={"Beautiful & Romantic"}
        backgroundImage={image1}
        video={true}
      />
      <AdventuresSection />
      <Destinations
        title="Start Exploring"
        subtitle="Are you ready for adventures to"
        bookUs={true}
        contactUs={true}
        backgroundImage={image1}
        video={false}
      />
      <TouristTalkAboutUs />
      <Footer />
    </main>
  );
}
