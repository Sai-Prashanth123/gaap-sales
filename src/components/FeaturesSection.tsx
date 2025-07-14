import { Brain, Video, Bot, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Central AI Knowledge Engine",
      description: "All your sales content, instantly searchable in every call.",
      highlight: "Smart Search"
    },
    {
      icon: Video,
      title: "Proprietary Meeting Layer", 
      description: "Branded calls, no Zoom needed. Full control, full context.",
      highlight: "White Label"
    },
    {
      icon: Bot,
      title: "Real-Time AI Co-Pilot",
      description: "Live rebuttals and insights — while you speak.",
      highlight: "Live Assistance"
    },
    {
      icon: FileText,
      title: "Auto Post-Call Insights",
      description: "Call summaries, CRM sync, coaching triggers.",
      highlight: "Auto-Generated"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Everything you need to transform your sales process with AI-powered intelligence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-delayed">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-space font-medium">
                      {feature.highlight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-space font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;