import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // close menu on navigation
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-transparent backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/final.png" 
              alt="Nexus Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right side - Navigation Links and CTA Button */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('core-features')}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              How it works
            </button>
            <a
              href="mailto:ganesh2@gaap.live"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-white text-black hover:bg-gray-200 font-medium px-6 py-2 rounded-full transition-colors duration-200"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-white/10 rounded-b-xl shadow-lg px-6 py-4 space-y-4 animate-fade-in-down">
            <button 
              onClick={() => scrollToSection('core-features')}
              className="block w-full text-left text-white hover:text-gray-300 font-medium py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-white hover:text-gray-300 font-medium py-2"
            >
              How it works
            </button>
            <a
              href="mailto:ganesh2@gaap.live"
              className="block w-full text-left text-white hover:text-gray-300 font-medium py-2"
            >
              Contact
            </a>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="w-full bg-white text-black hover:bg-gray-200 font-medium px-6 py-2 rounded-full transition-colors duration-200 mt-2"
            >
              Get Early Access
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;