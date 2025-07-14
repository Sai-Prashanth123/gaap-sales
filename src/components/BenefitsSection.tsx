import { CheckCircle, Zap, Target, Users, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      text: "Close deals faster with smart, real-time help"
    },
    {
      icon: Target,
      text: "Never miss a follow-up again"
    },
    {
      icon: CheckCircle,
      text: "Speak with confidence, even on tough objections"
    },
    {
      icon: TrendingUp,
      text: "Managers coach with real data from real moments"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground">
              Benefits for Your Sales Team
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Transform your sales performance with AI-powered assistance that works in real-time.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 fade-in-delayed">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <span className="font-inter text-lg font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 fade-in-delayed">
            <div className="text-center space-y-2">
              <div className="text-4xl font-space font-bold text-primary">40%</div>
              <div className="text-muted-foreground font-inter">Faster Deal Closure</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-space font-bold text-primary">85%</div>
              <div className="text-muted-foreground font-inter">Improved Follow-up Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-space font-bold text-primary">92%</div>
              <div className="text-muted-foreground font-inter">Sales Confidence Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;