import { Lightbulb, BarChart3, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Instant Answers",
      description: "to objections and product questions"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Real Proof Points",
      description: "surfaced when they matter"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Next-Step Recommendations",
      description: "to move deals forward"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure, Branded Video Meetings",
      description: "(no Zoom/Meet required)"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Solution Header */}
          <div className="space-y-6 fade-in-up">
            <h2 
              className="text-[44px] sm:text-[48px] font-space font-bold leading-tight" 
              style={{ 
                fontSize: '44px',
                background: 'linear-gradient(90deg, #75B5FF 0%, #FFFFFF 50%, #C681AD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Meet GAAP-Your AI Sales Co-Pilot
            </h2>
            <p className="text-[14px] sm:text-[20px] font-inter text-muted-foreground max-w-4xl mx-auto" style={{ zIndex: 1 }}>
              A real-time AI assistant that listens silently during your client meetings and gives your reps:
            </p>
          </div>

          {/* Features Grid */}
          <div className="relative">
            {/* Background Image */}
            <img
              src="/Eclipse.png"
              alt="Background Eclipse"
              loading="lazy"
              className="absolute opacity-50 pointer-events-none select-none"
              style={{ zIndex: 0, top: '-60px', right: '-100px', width: '600px', height: 'auto' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 fade-in-delayed relative" style={{ zIndex: 1 }}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-6 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(24, 27, 32, 0.7)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div style={{ color: '#FFFFFF' }}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-space font-semibold text-base md:text-lg text-foreground mb-1 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-xs md:text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 fade-in-delayed">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-white text-black hover:bg-white/90 text-md px-10 py-7 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              size="lg"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;