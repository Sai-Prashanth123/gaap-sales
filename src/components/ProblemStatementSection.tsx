import { AlertTriangle, Clock, X, TrendingDown } from "lucide-react";

const ProblemStatementSection = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      text: "Proof points & case studies get forgotten."
    },
    {
      icon: <X className="w-8 h-8" />,
      text: "Reps freeze on tough objections."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      text: "Critical moments slip away unnoticed."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Mobile: Centered Heading and Stacked Cards */}
          <div className="block md:hidden">
            <h2 className="text-center text-[24px] font-space font-bold text-foreground mb-8">
              Sales reps lose deals not from skill,<br />
              but lack of support.
            </h2>
            <div className="flex flex-col gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-white/10 shadow"
                  style={{ backgroundColor: 'rgba(24, 27, 32, 0.7)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <div style={{ color: '#FFFFFF' }}>{problem.icon}</div>
                  </div>
                  <p className="font-inter text-foreground text-base leading-relaxed text-left">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden md:flex items-start" style={{ gap: '110px' }}>
            {/* Left Column - Call-out Card with Background Image */}
            <div className="relative" style={{ width: '448px', height: '306px' }}>
              {/* Background Image */}
              <img 
                src="/2.png" 
                alt="Background pattern" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-"
                style={{ zIndex: 0 }}
              />
              {/* Call-out Card */}
              <div className="backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative" style={{
                width: '448px',
                height: '306px',
                backgroundColor: 'rgba(24, 27, 32, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                zIndex: 1
              }}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-space font-bold text-foreground" style={{ fontSize: '30px' }}>
                    Post-call analytics are<br />
                    too late.
                  </h3>
                  <p className="text-lg text-muted-foreground font-inter">
                    You need real-time help during the conversation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Main Heading and Cards */}
            <div className="flex-1 relative" style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>
              {/* Background Image */}
              <img
                src="/1.png"
                alt="Background pattern"
                loading="lazy"
                className="absolute opacity-50 pointer-events-none select-none"
                style={{ zIndex: 0, top: '-100px', right: '0', width: '600px', height: 'auto' }}
              />
              {/* Main Heading */}
              <div className="relative" style={{ zIndex: 1 }}>
                <h2 className="text-[34px] font-space font-bold text-foreground leading-tight" style={{ zIndex: 1 }}>
                  Sales reps lose deals not from skill,<br />
                  but lack of support.
                </h2>
              </div>

              {/* Problem Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative" style={{ zIndex: 1 }}>
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 hover:border-white/20 transition-all duration-300 w-full sm:w-[201px] h-[120px] sm:h-[175px]"
                    style={{
                      backgroundColor: 'rgba(24, 27, 32, 0.7)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex flex-col space-y-2 sm:space-y-4 h-full">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                        <div style={{ color: '#FFFFFF' }}>
                          {problem.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-inter text-foreground text-xs sm:text-base leading-relaxed">
                          {problem.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;