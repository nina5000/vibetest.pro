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
                    Test Marathon
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    A simple and engaging way to gather fresh insights on your product before release.
                  </p>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    The QA Lead creates a test run and shares a link with the team. Anyone can open it in their browser and go through the tests at their own pace.
                  </p>
                  
                  <p className="text-lg">
                    This allows developers, designers, managers, and other colleagues to join the process — each checking the product from a real user's perspective and sharing valuable feedback.
                  </p>
                  
                  <p className="text-lg font-medium text-foreground">
                    Fast, easy, and highly effective — exactly what you need before an important release.
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
