import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 border-t border-border" style={{ backgroundColor: '#14161A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-2 text-left">
            <div className="font-space font-bold text-2xl text-foreground">
              GAAP
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              AI-powered sales intelligence
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-8 text-left md:text-center">
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-inter text-left md:text-center"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-inter text-left md:text-center"
            >
              contact
            </button>
          </div>

          {/* Credit */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end space-y-2 md:space-y-0 md:space-x-2 text-sm text-muted-foreground text-left md:text-right">
            <span className="font-inter">Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span className="font-inter">by sales pros, for sales pros.</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-left md:text-center">
          <p className="text-sm text-muted-foreground font-inter">
            © 2025 GAAP . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;