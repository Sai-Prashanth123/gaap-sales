import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemStatementSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
