import { FileText, Brain, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧾",
      text: "Where's the doc for that feature?"
    },
    {
      icon: "😓", 
      text: "I forgot the competitor comparison again…"
    },
    {
      icon: "📉",
      text: "Follow-up notes got buried"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Problem Statement */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground leading-tight max-w-4xl mx-auto">
              Sales reps aren't losing deals because they're bad —
              <br />
              <span className="text-destructive">They're losing because they're unsupported in the moment.</span>
            </h2>
          </div>

          {/* Common Problems */}
          <div className="grid md:grid-cols-3 gap-6 fade-in-delayed">
            {problems.map((problem, index) => (
              <div key={index} className="problem-item">
                <span className="text-2xl">{problem.icon}</span>
                <span className="font-inter text-muted-foreground">{problem.text}</span>
              </div>
            ))}
          </div>

          {/* Promise Box */}
          <div className="relative fade-in-delayed">
            <div className="bg-primary text-primary-foreground p-12 rounded-3xl shadow-strong max-w-3xl mx-auto">
              <div className="space-y-4">
                <Brain className="w-12 h-12 mx-auto opacity-90" />
                <h3 className="text-2xl lg:text-3xl font-space font-bold">
                  Nexus is your AI sales brain — always present, always prepared.
                </h3>
                <p className="text-primary-foreground/80 font-inter text-lg">
                  No more fumbling for information. No more missed opportunities.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary-foreground/20 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary-foreground/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;