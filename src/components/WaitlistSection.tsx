import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Users, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase, type GaapUserInsert } from "@/lib/supabase";
import { trackEvents } from "@/lib/analytics";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Track form start
    trackEvents.formStart('waitlist');

    setIsSubmitting(true);
    
    try {
      const userData: GaapUserInsert = {
        email: email.trim(),
        ...(name.trim() && { name: name.trim() })
      };

      const { data, error } = await supabase
        .from('gaap_users')
        .insert([userData])
        .select();

      if (error) {
        // Check if it's a unique constraint error (duplicate email)
        if (error.code === '23505') {
          // Track duplicate signup attempt
          trackEvents.formError('waitlist', 'duplicate_email');
          toast({
            title: "Email already registered! 📧",
            description: "You're already on our waitlist. We'll be in touch soon!",
          });
        } else {
          throw error;
        }
      } else {
        // Track successful waitlist signup
        trackEvents.waitlistSignup(email, !!name.trim());
        toast({
          title: "Welcome to the waitlist! 🎉",
          description: "You'll be among the first to get early access to GAAP.",
        });
      }

      setEmail("");
      setName("");
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      // Track form error
      trackEvents.formError('waitlist', 'submission_error');
      toast({
        title: "Something went wrong 😞",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Social Proof */}
          <div className="fade-in-up">
            <img 
              src="/Frame 64.png" 
              alt="Join 128+ others already signed up for early access" 
              className="mx-auto w-[500px] h-auto"
            />
          </div>

          {/* Header */}
          <div className="space-y-3 fade-in-up">
            <h2 className="text-[34px] sm:text-[38px] font-space font-bold text-foreground">
              Join the next wave of sales.
            </h2>
            <p className="text-[14px] sm:text-[20px] font-inter text-muted-foreground max-w-2xl mx-auto">
              Get early access, behind-the-scenes updates, and help shape GAAP.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 fade-in-delayed w-full">
            <div className="space-y-4 w-full">
              <Input
                type="text"
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-border text-foreground placeholder:text-muted-foreground focus:border-primary/40 rounded-xl text-[14px] sm:text-base w-full max-w-[540px] mx-auto"
                style={{
                  height: '46px',
                  backgroundColor: 'rgba(250, 250, 250, 0.1)',
                  padding: '0 16px'
                }}
              />
              <Input
                type="email"
                placeholder="Email (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-border text-foreground placeholder:text-muted-foreground focus:border-primary/40 rounded-xl text-[14px] sm:text-base w-full max-w-[540px] mx-auto"
                style={{
                  height: '46px',
                  backgroundColor: 'rgba(250, 250, 250, 0.1)',
                  padding: '0 16px'
                }}
              />
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-white text-black hover:bg-white/90 font-space font-semibold text-[14px] sm:text-lg rounded-xl group w-full max-w-[540px] mx-auto"
              style={{
                height: '46px'
              }}
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

            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="font-inter">We don't spam. Just real updates & opportunities.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;