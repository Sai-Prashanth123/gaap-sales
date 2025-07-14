import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Users, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "You'll be among the first to get early access to Nexus.",
      });
      setEmail("");
      setName("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 bg-hero-gradient text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80 fade-in-up">
            <Users className="w-5 h-5" />
            <span className="font-inter font-medium">Join 128+ others already signed up for early access</span>
          </div>

          {/* Header */}
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-space font-bold">
              Be part of the next wave of AI-powered sales.
            </h2>
            <p className="text-xl text-primary-foreground/80 font-inter max-w-2xl mx-auto">
              Get early access, behind-the-scenes updates, and help shape Nexus.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 fade-in-delayed">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40"
              />
              <Input
                type="email"
                placeholder="Email (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/40"
              />
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-space font-semibold text-lg py-4 group"
            >
              {isSubmitting ? (
                "Joining..."
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </Button>

            <div className="flex items-center justify-center space-x-2 text-sm text-primary-foreground/60">
              <Lock className="w-4 h-4" />
              <span className="font-inter">We don't spam. Just real updates & opportunities.</span>
            </div>
          </form>

          {/* Additional CTAs */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 fade-in-delayed">
            <div className="space-y-2">
              <div className="text-2xl">🚀</div>
              <div className="text-sm text-primary-foreground/80">Early Access</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">💡</div>
              <div className="text-sm text-primary-foreground/80">Shape the Product</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">📈</div>
              <div className="text-sm text-primary-foreground/80">Exclusive Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;