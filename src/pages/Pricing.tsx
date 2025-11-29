import { useState } from "react";
import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data
  const businessMonthlyPrice = 120;
  const businessYearlyPrice = 90; // 25% discount when billed yearly ($120 * 0.75 = $90/month)

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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start for free and scale as your team grows. All plans include a 14-day free trial.
            </p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Label
                htmlFor="billing-toggle"
                className={`text-base cursor-pointer ${!isYearly ? "font-semibold text-foreground" : "text-muted-foreground"}`}
              >
                Monthly Plan
              </Label>
              <Switch
                id="billing-toggle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <Label
                htmlFor="billing-toggle"
                className={`text-base cursor-pointer ${isYearly ? "font-semibold text-foreground" : "text-muted-foreground"}`}
              >
                Yearly Plan
              </Label>
              <span className={`ml-2 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md transition-opacity ${isYearly ? "opacity-100" : "opacity-0"}`} style={{ minWidth: "70px" }}>
                Save 25%
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lite Plan */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-1 font-bold">Lite</CardTitle>
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
                      <span className="text-muted-foreground">3 users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Email support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">5 active test runs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">15 test marathons participants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">2 test marathons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6 month history</span>
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
                    <div className="text-4xl font-bold text-foreground mb-1">
                      ${isYearly ? businessYearlyPrice : businessMonthlyPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per month
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Everything in Lite, plus:</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">10 users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Premium support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited active test runs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">50 test marathons participants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6 test marathons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited history</span>
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
                      <span className="text-muted-foreground">Custom users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Custom test marathons participants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited test marathons</span>
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
                    <TableHead className="text-center font-semibold">Lite</TableHead>
                    <TableHead className="text-center font-semibold">Business</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Users</TableCell>
                    <TableCell className="text-center">3</TableCell>
                    <TableCell className="text-center">10</TableCell>
                    <TableCell className="text-center">Custom</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support</TableCell>
                    <TableCell className="text-center">Email</TableCell>
                    <TableCell className="text-center">Premium support</TableCell>
                    <TableCell className="text-center">Premium support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Active test runs</TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test case management</TableCell>
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
                    <TableCell className="font-medium">Test marathons participants</TableCell>
                    <TableCell className="text-center">15</TableCell>
                    <TableCell className="text-center">50</TableCell>
                    <TableCell className="text-center">Custom</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test marathons</TableCell>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell className="text-center">6</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">History</TableCell>
                    <TableCell className="text-center">6 month</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
                    <TableCell className="text-center">Unlimited</TableCell>
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
