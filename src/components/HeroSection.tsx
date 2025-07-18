import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100vh] sm:min-h-[900px] h-screen flex items-center justify-center bg-black overflow-hidden -mt-20 pt-20">
      {/* Extended background that reaches the very top */}
      <div className="absolute inset-0 bg-black" style={{ top: '-80px', height: 'calc(100% + 120px)' }}></div>
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '-40px', height: 'calc(100% + 160px)' }}>
        <img 
          src="/Group 1437253789.png" 
          alt="Background Pattern" 
          className="w-auto h-auto max-w-none opacity-100"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-20 text-center z-10 -mt-10 sm:-mt-20">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 sm:px-6 sm:py-2 rounded-full text-base sm:text-sm font-medium">
            Coming Soon!
          </span>
        </div>

        {/* Main Heading - Improved mobile typography */}
        <h1 className="text-[48px] leading-[1.1] font-bold text-white mb-6 sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] sm:leading-tight sm:mb-8">
          <span className="block">Turn Every Sales</span>
          <span className="block">Rep into Top Closer</span>
        </h1>
        
        {/* Subtitle - Better mobile readability */}
        <p className="text-[18px] leading-[1.6] font-light text-white/90 max-w-[340px] mx-auto mb-10 sm:text-[28px] sm:font-light sm:text-white/80 sm:leading-relaxed sm:max-w-6xl sm:mb-12">
          <span className="block sm:inline sm:whitespace-nowrap">Own your calls. Close more deals. </span>
          <span className="block sm:inline sm:whitespace-nowrap">GAAP is the first full-stack sales </span>
          <span className="block sm:inline sm:whitespace-nowrap">co-pilot with meeting intelligence.</span>
        </p>

        {/* CTA Button - Larger for mobile */}
        <Button 
          onClick={scrollToWaitlist}
          className="bg-white text-black hover:bg-white/90 text-[18px] px-10 py-7 rounded-full font-semibold transition-all duration-200 hover:scale-105 sm:text-lg sm:px-8 sm:py-6"
          size="lg"
        >
          Get Early Access
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;