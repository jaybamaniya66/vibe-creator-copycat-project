import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-card rounded-full px-4 py-2 mb-8 shadow-card">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium">4.8</span>
          <span className="text-sm text-muted-foreground">
            Trusted by 300+ brands with $100M+ in revenue
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            #1 Platform to Create
          </span>
          <br />
          <span className="bg-gradient-text bg-clip-text text-transparent">
            AI UGC Videos
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          The fastest way to create AI videos that convert.
          <br />
          <span className="font-semibold text-foreground">
            Write your script → Pick an avatar → Generate video
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="hero" size="xl" className="min-w-[200px]">
            Create AI Video Free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="xl" className="min-w-[200px]">
            <Play className="w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Hero Video/Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-brand bg-gradient-card">
            <img 
              src={heroAvatar} 
              alt="AI Avatar Demo" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            <Button 
              variant="glow" 
              size="xl" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Play className="w-6 h-6" />
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="hidden lg:block absolute -top-6 -left-6 bg-gradient-card rounded-xl p-4 shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Recording...</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-6 -right-6 bg-gradient-card rounded-xl p-4 shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <span className="text-sm font-medium">Generated in 30s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};