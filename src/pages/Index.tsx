import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Test Marathon Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <Card className="border border-border shadow-lg">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Test Marathons
                  </h2>
                  <p className="text-xl font-medium text-foreground mb-6">
                    Our Unique Approach to Collaborative Testing
                  </p>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Unlike traditional test management tools, we make it easy to involve anyone in the testing process — without requiring accounts or training.
                  </p>
                  
                  <p className="text-lg">
                    The QA Lead creates a test run and shares a link. Team members simply open it in their browser and complete tests at their own pace. No login, no setup, just testing.
                  </p>
                  
                  <p className="text-lg">
                    Invite developers to verify fixes, designers to check UI details, or product managers to validate features — each person brings valuable insights from their perspective.
                  </p>
                  
                  <p className="text-lg font-medium text-foreground">
                    A simple way to get broader test coverage and catch issues before release.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
