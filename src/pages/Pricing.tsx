import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start for free and scale as your team grows. All plans include a 14-day free trial.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Professional Plan */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1 font-bold">Professional</CardTitle>
                  <CardDescription className="text-base">Perfect for small teams</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">$0</div>
                    <div className="text-sm text-muted-foreground">Free forever</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to 3 users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited test cases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to 500 test runs per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Import/Export (JSON, CSV)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Last 30 days history</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    size="lg"
                    asChild
                  >
                    <a href="https://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1 font-bold">Business</CardTitle>
                  <CardDescription className="text-base">For established teams</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">$20</div>
                    <div className="text-sm text-muted-foreground">per user/month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Everything in Professional, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited history storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited test run history storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited team members</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    size="lg"
                    asChild
                  >
                    <a href="https://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2 border-primary relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1 font-bold text-primary">Enterprise</CardTitle>
                  <CardDescription className="text-base">For organizations with specific needs</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-foreground mb-1">Custom</div>
                    <div className="text-sm text-muted-foreground">Pricing</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Everything in Business, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">SSO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Self-hosted deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Test case versioning</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6" size="lg">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Features</TableHead>
                    <TableHead className="text-center font-semibold">Professional</TableHead>
                    <TableHead className="text-center font-semibold">Business</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Number of users</TableCell>
                    <TableCell className="text-center">Up to 3</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test cases</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test runs per month</TableCell>
                    <TableCell className="text-center">500</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">History storage</TableCell>
                    <TableCell className="text-center">30 days</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Import/Export (JSON, CSV)</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Email support</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Priority support</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SSO (Single Sign-On)</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Self-hosted deployment</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test case versioning</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
