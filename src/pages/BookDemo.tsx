import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDemo = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Book a Demo
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Schedule a meeting with our sales team to learn more about how VibeTest can help your team.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/your-calendly-url"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;

