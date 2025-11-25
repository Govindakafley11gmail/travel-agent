import BlogSection from "@/component/blogs/content";
import Landing from "@/component/blogs/landing";
import Footer from "@/component/footer";

export default function HomePage() {
  return (
    <main>
  
      <Landing />
      <BlogSection />
      <div className="mt-8">
        
<Footer/>
      </div>
    </main>
  );
}
