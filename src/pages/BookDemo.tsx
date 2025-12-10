import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const BookDemo = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add CSS to hide Calendly branding
    const style = document.createElement("style");
    style.textContent = `
      .calendly-badge-widget {
        display: none !important;
      }
      [data-calendly-badge] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Load Calendly script if not already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <Card className="border border-border shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1fr_2fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
                  {/* Left Panel - Event Details */}
                  <div className="p-6 md:p-8 lg:p-10 space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[oklch(0.145_0_0)] text-[oklch(0.985_0_0)] text-xl font-bold leading-none">
                        V
                      </div>
                      <span className="text-2xl font-bold text-foreground">VibeTest</span>
                    </div>

                    {/* Team Name */}
                    <div>
                      <p className="text-base text-muted-foreground">VibeTest Sales Team</p>
                    </div>

                    {/* Event Title */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        VibeTest Product Demo (via Zoom)
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">45 min</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        Demonstration of VibeTest test management platform.
                      </p>
                    </div>

                    {/* Instructions */}
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Please join via Zoom or let us know if you need to cancel.
                      </p>
                    </div>

                    {/* Cookie Settings Link */}
                    <div className="pt-4">
                      <a 
                        href="#" 
                        className="text-sm text-primary hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle cookie settings
                        }}
                      >
                        Cookie settings
                      </a>
                    </div>
                  </div>

                  {/* Right Panel - Calendly Widget */}
                  <div className="p-6 md:p-8 lg:p-10 bg-card">
                    <div 
                      ref={calendlyRef}
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/ninasha/30min"
                      style={{ 
                        minWidth: "320px", 
                        minHeight: "700px", 
                        height: "700px", 
                        width: "100%"
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;

