import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Simple. Powerful. Unlimited.
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Test Management
              <span className="block text-accent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Create, execute, and manage your test cases effortlessly. With unlimited users and complete test history, your team can focus on what matters.
            </p>
            
            <div>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 text-base"
                asChild
              >
                <a href="https://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">
                  Start
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(0_0%_0%/0.05),_transparent_60%)] rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Test Management Dashboard" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
