import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-2">
            <div className="font-space font-bold text-2xl text-foreground">
              Nexus
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              AI-powered sales intelligence
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-inter"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-inter"
            >
              Terms
            </button>
          </div>

          {/* Credit */}
          <div className="flex items-center justify-end space-x-2 text-sm text-muted-foreground">
            <span className="font-inter">Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span className="font-inter">by sales pros, for sales pros.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-inter">
            © 2025 Nexus AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;