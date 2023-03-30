import About from "@/components/About";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="  h-screen">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Footer />
    </div>
  );
}
