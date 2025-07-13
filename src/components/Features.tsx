import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  Palette, 
  Globe, 
  BarChart3, 
  Shield,
  Sparkles,
  Clock,
  Target
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Generation",
    description: "Create professional AI videos in under 30 seconds. No waiting, no complex editing.",
    highlight: "30s generation"
  },
  {
    icon: Users,
    title: "100+ AI Avatars",
    description: "Choose from diverse, realistic avatars that represent your brand perfectly.",
    highlight: "100+ avatars"
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "Match your brand colors, fonts, and style for consistent video content.",
    highlight: "Full customization"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Generate videos in 50+ languages with natural-sounding voices.",
    highlight: "50+ languages"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track video performance and engagement with detailed analytics.",
    highlight: "Real-time stats"
  },
  {
    icon: Shield,
    title: "Commercial License",
    description: "Full commercial rights to use generated videos for business purposes.",
    highlight: "Commercial use"
  }
];

const steps = [
  {
    number: "1",
    title: "Write your script",
    description: "Enter or automatically generate a script that aligns with your brand's message to personalize your AI-generated video.",
    icon: Sparkles
  },
  {
    number: "2", 
    title: "Pick an avatar",
    description: "Select from over 100 unique AI avatars to represent your brand and connect with your audience.",
    icon: Users
  },
  {
    number: "3",
    title: "Generate video",
    description: "Our AI creates a professional UGC video in seconds, ready to boost your conversions.",
    icon: Clock
  }
];

export const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Create AI UGC videos in minutes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate scroll-stopping content with AI, anytime you want
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-card bg-gradient-card hover:shadow-brand transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create professional AI videos in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-brand group-hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 transform translate-x-8" />
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="hero" size="xl">
              <Target className="w-5 h-5" />
              Start Creating Videos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};