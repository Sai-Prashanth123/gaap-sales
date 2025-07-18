import { Brain, Video, Bot, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Central AI Knowledge Engine",
      description: "All your sales content, instantly searchable in every call.",
      
    },
    {
      icon: Video,
      title: "Proprietary Meeting Layer", 
      description: "Branded calls, no Zoom needed. Full control, full context.",
      
    },
    {
      icon: Bot,
      title: "Real-Time AI Co-Pilot",
      description: "Live rebuttals and insights — while you speak.",
      
    },
    {
      icon: FileText,
      title: "Auto Post-Call Insights",
      description: "Call summaries, CRM sync, coaching triggers.",
      
    }
  ];

  return (
    <section id="core-features" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="relative text-center space-y-4 fade-in-up">
            {/* Background Image */}
            <img
              src="/Planet.png"
              alt="Background Planet"
              loading="lazy"
              className="absolute left-0" 
              style={{ zIndex: 0, width: '600px', height: 'auto', top: '80px', opacity: 0.5, pointerEvents: 'none', userSelect: 'none', transform: 'none' }}
            />
            <h2 className="text-[44px] sm:text-4xl lg:text-5xl font-space font-bold text-foreground relative animate-fade-in-up"
            style={{ 
              fontSize: '44px',
              background: 'linear-gradient(90deg, #75B5FF 35%, #FFFFFF 50%, #C681AD 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              zIndex: 1
            }}>
              Core Features
            </h2>
            <p className="text-[14px] sm:text-xl text-muted-foreground font-inter max-w-2xl mx-auto relative animate-fade-in-up" style={{ zIndex: 1 }}>
              Everything you need to transform your sales process with AI-powered intelligence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 fade-in-delayed">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card group backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 px-4 py-6 sm:px-6 sm:py-8 transform-gpu hover:scale-105 hover:shadow-2xl active:scale-100 animate-fade-in-up"
                style={{ 
                  backgroundColor: 'rgba(24, 27, 32, 0.7)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#FFFFFF' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-xl font-space font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-muted-foreground sm:font-inter sm:leading-relaxed">
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