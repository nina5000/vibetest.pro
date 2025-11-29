import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-[var(--gradient-primary)] p-12 md:p-16 lg:p-20 overflow-hidden border border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(0_0%_0%/0.03),_transparent_60%)] opacity-60" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join teams who trust VibeTest to manage their quality assurance process. Start in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl text-base"
                asChild
              >
                <a href="https://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">
                  Start
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-foreground/20 text-foreground hover:bg-foreground/10 text-base"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Setup in minutes • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
