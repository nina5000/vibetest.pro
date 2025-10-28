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
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get started with Vibetest today and enjoy your first year completely free
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <Card className="border-2 border-border relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">Free Trial</CardTitle>
                  <CardDescription className="text-lg">Perfect for getting started</CardDescription>
                  <div className="mt-6">
                    <div className="text-5xl font-bold text-foreground mb-2">$0</div>
                    <div className="text-muted-foreground">First year free</div>
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
                      <span className="text-muted-foreground">Unlimited team members</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-2 border-primary relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-semibold">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-8 pt-12">
                  <CardTitle className="text-3xl mb-2">Professional</CardTitle>
                  <CardDescription className="text-lg">For teams that need more</CardDescription>
                  <div className="mt-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      $99
                    </div>
                    <div className="text-muted-foreground">per month, after first year</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">Everything in Free, plus:</span>
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
                      <span className="text-muted-foreground">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Dedicated account manager</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" size="lg">
                    Start Free Year
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Free Year Highlight */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">First Year Free for Everyone</h3>
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Start using Vibetest today with full access to all features. No credit card required. 
                    After your first year, choose the plan that works best for your team.
                  </p>
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
