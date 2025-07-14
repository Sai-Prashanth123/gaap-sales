import { AlertTriangle, Clock, MessageSquareX, TrendingDown } from "lucide-react";

const ProblemStatementSection = () => {
  const problems = [
    {
      icon: <MessageSquareX className="w-6 h-6" />,
      text: "Reps freeze on tough objections."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Proof points and case studies are forgotten."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      text: "Critical moments slip away unnoticed."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Problem Statement Header */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold text-foreground leading-tight">
              Your Sales Team Is Losing Deals in Live Calls
            </h2>
          </div>

          {/* Problem List */}
          <div className="grid md:grid-cols-3 gap-8 fade-in-delayed">
            {problems.map((problem, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 p-6">
                <div className="text-muted-foreground">
                  {problem.icon}
                </div>
                <p className="font-inter text-foreground text-lg text-center">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Call-out Box */}
          <div className="relative fade-in-delayed">
            <div className="bg-destructive/10 border border-destructive/20 text-foreground p-8 rounded-3xl max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <span className="text-2xl font-space font-bold">🛑</span>
              </div>
              <p className="text-xl font-space font-semibold mb-2">
                Post-call analytics are too late.
              </p>
              <p className="text-lg font-inter text-muted-foreground">
                You need real-time help — during the conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;