import { Check, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-4 px-6 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start free. Scale when your team needs more.
            </p>
          </div>
        </section>

        {/* Free Year Highlight */}
        <section className="pt-4 pb-10 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">✨ Start Testing Today ✨</h3>
                  <p className="text-lg text-muted-foreground">
                    Start testing with Vibetest today and scale as your team grows. For advanced features and enterprise needs, contact us.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Professional Plan */}
              <Card className="border-2 border-border relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Professional</CardTitle>
                  <CardDescription className="text-lg">Perfect for getting started</CardDescription>
                  <div className="mt-6">
                    <div className="text-5xl font-bold text-foreground mb-2">$0</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited test cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited concurrent test runs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Git integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">LLM integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Up to 10 users</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="border-2 border-border relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Business</CardTitle>
                  <CardDescription className="text-lg">For growing teams</CardDescription>
                  <div className="mt-6">
                    <div className="text-5xl font-bold text-foreground mb-2">$100</div>
                    <div className="text-muted-foreground">per month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Everything in Professional, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited test run history storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited team members</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2 border-primary relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Enterprise</CardTitle>
                  <CardDescription className="text-lg">For teams that need more</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">Everything in Business, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">SSO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Self-hosted deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Test case versioning</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" size="lg">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Highlight */}
            <div className="text-center max-w-3xl mx-auto mt-16">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Need Custom Features or Integrations?</h3>
                  <p className="text-lg text-muted-foreground">
                    We build custom solutions for enterprise clients — from specialized integrations to bespoke features tailored to your workflow.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    Pricing: Fixed-price quotes starting from $5,000. No hourly rates, no surprises.
                  </p>
                  <Button variant="outline" className="mt-6" size="lg">
                    Contact us for details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
