import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
