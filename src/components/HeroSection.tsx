import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroInterface from "@/assets/hero-interface.jpg";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-subtle-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-foreground leading-tight">
                Sell the product{" "}
                <span className="text-primary">without struggle.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-lg">
                Own your calls, win more deals. Nexus is the first full-stack sales co-pilot with real-time intelligence built into your meetings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToWaitlist}
                className="btn-hero group"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button variant="ghost" className="group font-space font-medium text-lg">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-inter">
              📩 Be among the first to experience the future of AI-led sales.
            </p>
          </div>

          {/* Visual */}
          <div className="relative fade-in-delayed">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroInterface} 
                alt="Nexus AI Interface - Real-time sales intelligence" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
              <span className="text-sm font-space font-medium">Live AI Insights</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border p-4 rounded-xl shadow-lg">
              <span className="text-sm font-inter text-muted-foreground">Real-time rebuttals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;