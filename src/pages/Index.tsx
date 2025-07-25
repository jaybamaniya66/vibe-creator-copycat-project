import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VideoCreator } from "@/components/VideoCreator";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <VideoCreator />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
