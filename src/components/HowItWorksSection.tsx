import { Upload, Video, Bot, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Sales Content",
      description: "Product docs, pricing, case studies, competitor battle cards — everything your team knows."
    },
    {
      number: "02", 
      icon: <Video className="w-8 h-8" />,
      title: "Branded Meeting Links",
      description: "Host secure video meetings with clients via your own custom links."
    },
    {
      number: "03",
      icon: <Bot className="w-8 h-8" />,
      title: "Real-Time AI Co-Pilot",
      description: "While the call is live, your reps get AI-powered talking points and guidance — invisible to the client."
    },
    {
      number: "04",
      icon: <FileText className="w-8 h-8" />,
      title: "Post-Call Insights",
      description: "Auto-summary, key moments, and next steps delivered right after the meeting."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Header */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground leading-tight">
              How It Works
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-delayed">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold font-space">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                    <h3 className="font-space font-semibold text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;