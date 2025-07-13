import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out AI video generation",
    icon: Zap,
    features: [
      "3 videos per month",
      "Basic AI avatars",
      "720p video quality",
      "Watermark included",
      "Email support"
    ],
    cta: "Get Started Free",
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "$29",
    description: "For businesses scaling their video content",
    icon: Crown,
    features: [
      "50 videos per month",
      "Premium AI avatars",
      "1080p video quality",
      "No watermark",
      "Custom branding",
      "Priority support",
      "Analytics dashboard"
    ],
    cta: "Start Pro Trial",
    popular: true,
    variant: "hero" as const
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large teams and agencies",
    icon: Rocket,
    features: [
      "Unlimited videos",
      "All AI avatars",
      "4K video quality",
      "White-label solution",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Team collaboration"
    ],
    cta: "Contact Sales",
    popular: false,
    variant: "gradient" as const
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your video creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-brand transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-hero text-primary-foreground scale-105 shadow-glow' 
                  : 'bg-gradient-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium text-primary-foreground shadow-brand">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'bg-white/20' : 'bg-gradient-primary'
                }`}>
                  <plan.icon className={`w-6 h-6 ${
                    plan.popular ? 'text-white' : 'text-primary-foreground'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className={`text-sm ${
                      plan.popular ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      /month
                    </span>
                  )}
                </div>
                <CardDescription className={`${
                  plan.popular ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-primary'
                      }`} />
                      <span className={`${
                        plan.popular ? 'text-white/90' : 'text-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "outline" : plan.variant}
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-white text-primary hover:bg-white/90 border-white' 
                      : ''
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial • No credit card required
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};