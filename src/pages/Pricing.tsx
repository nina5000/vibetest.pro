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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Professional Plan */}
              <Card className="border border-border relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1">Professional</CardTitle>
                  <CardDescription className="text-base">Perfect for small teams</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">$0</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Up to 3 users</span>
                    </li>
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
                      <span className="text-muted-foreground">Up to 500 test runs per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Import/Export (JSON, CSV)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Last 30 days history</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="border border-border relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1">Team</CardTitle>
                  <CardDescription className="text-base">For growing QA teams</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">$12</div>
                    <div className="text-sm text-muted-foreground">per user/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
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
                      <span className="text-muted-foreground">Up to 25 users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited test runs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">90 days history storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Bulk operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Email support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="border border-border relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1">Business</CardTitle>
                  <CardDescription className="text-base">For established teams</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">$20</div>
                    <div className="text-sm text-muted-foreground">per user/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Everything in Team, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">Unlimited history storage</span>
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
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border border-primary relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1">Enterprise</CardTitle>
                  <CardDescription className="text-base">For organizations with specific needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-2">
                    <div className="text-lg font-semibold text-foreground">Custom Pricing</div>
                  </div>
                  <ul className="space-y-3">
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
                  <p className="text-sm text-muted-foreground mt-6 text-center">
                    We offer flexible, fixed-price contracts tailored to your organization—not based on user count. Contact us to discuss your requirements.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 mt-4" size="lg">
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
