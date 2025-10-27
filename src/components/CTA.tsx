import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-16 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtMTZ2LTJoLTJ2Mmgyem0tNCAwaC0ydjJoMnYtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yem0tNCAwVjMyaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join teams who trust TestFlow to manage their quality assurance process. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 shadow-xl text-base"
                asChild
              >
                <a href="http://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">
                  Start
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70">
              No credit card required • Setup in minutes • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
