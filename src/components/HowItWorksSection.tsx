import { Upload, Video, Bot, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-10 h-10" />,
      title: "Upload Your Sales Content",
      description: "Product docs, pricing, case studies, competitor battle cards — everything your team knows."
    },
    {
      number: "02", 
      icon: <Video className="w-10 h-10" />,
      title: "Branded Meeting Links",
      description: "Host secure video meetings with clients via your own custom links."
    },
    {
      number: "03",
      icon: <Bot className="w-10 h-10" />,
      title: "Real-Time AI Co-Pilot",
      description: "While the call is live, your reps get AI-powered talking points and guidance — invisible to the client."
    },
    {
      number: "04",
      icon: <FileText className="w-10 h-10" />,
      title: "Post-Call Insights",
      description: "Auto-summary, key moments, and next steps delivered right after the meeting."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-[24px] sm:text-4xl lg:text-5xl font-space font-bold text-foreground leading-tight animate-fade-in-up"
            style={{ 
              fontSize: '44px',
              background: 'linear-gradient(90deg, #75B5FF 30%, #FFFFFF 50%, #C681AD 65%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              How It Works
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Background Image */}
            <img
              src="/organ.png"
              alt="Background Organ"
              loading="lazy"
              className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none select-none"
              style={{ zIndex: 0, width: '800px', height: 'auto', right: '-200px' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 fade-in-delayed relative" style={{ zIndex: 1 }}>
              {steps.map((step, index) => (
                <div key={index} className="relative animate-fade-in-up transform-gpu hover:scale-105 hover:shadow-2xl active:scale-100 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 md:w-12 md:h-12 bg-primary/75 text-primary-foreground rounded-full flex items-center justify-center text-xs md:text-sm font-bold font-space z-10">
                    {step.number}
                  </div>
                  {/* Card */}
                  <div 
                    className="backdrop-blur-md border border-white/10 rounded-2xl p-3 md:p-6 h-full hover:border-white/20 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'rgba(24, 27, 32, 0.7)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                      <div style={{ color: '#FFFFFF' }}>
                        {step.icon}
                      </div>
                      <h3 className="font-space font-semibold text-base md:text-lg text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-inter text-xs md:text-muted-foreground md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Connector Line (hidden on mobile, shown on larger screens) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;