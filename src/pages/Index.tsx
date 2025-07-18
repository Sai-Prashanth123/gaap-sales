import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConnectivityCard from "@/components/ConnectivityCard";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import Text from "@/components/Text";

const Index = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main className="min-h-screen bg-background">
        <ConnectivityCard />
        <ProblemStatementSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* <BenefitsSection /> */}
        <WaitlistSection />
        <Text/>
      </main>
      <Footer />
    </>
  );
};

export default Index;
