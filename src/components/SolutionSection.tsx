import { Brain, Lightbulb, BarChart3, Target, Shield } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      emoji: "💡",
      title: "Instant Answers",
      description: "to objections and product questions"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      emoji: "📊",
      title: "Real Proof Points",
      description: "surfaced when they matter"
    },
    {
      icon: <Target className="w-6 h-6" />,
      emoji: "🎯",
      title: "Next-Step Recommendations",
      description: "to move deals forward"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      emoji: "🔒",
      title: "Secure, Branded Video Meetings",
      description: "(no Zoom/Meet required)"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Solution Header */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground leading-tight">
              Meet Nexus — The AI Co-Pilot for Sales Calls
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-4xl mx-auto">
              A real-time AI assistant that listens silently during your client meetings and gives your reps:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 fade-in-delayed">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-2xl border border-border">
                <div className="flex-shrink-0">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-space font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="relative fade-in-delayed">
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-strong max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-10 h-10 opacity-90" />
              </div>
              <p className="text-xl font-space font-semibold">
                All inside your own video meeting experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;